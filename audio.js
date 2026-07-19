window.NeonAudio = (function () {
  let ctx = null;
  let masterGain = null;
  let musicGain = null;
  let muted = localStorage.getItem('neonDashMuted') === 'true';
  let running = false;
  let schedulerId = null;
  let nextNoteTime = 0;
  let step = 0;
  let currentTheme = null;

  const MUSIC_VOLUME = 0.22;

  const SCALES = {
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
    pentatonic: [0, 3, 5, 7, 10]
  };

  function midiFreq(midi) { return 440 * Math.pow(2, (midi - 69) / 12); }
  function noteFreq(root, semitone) { return root * Math.pow(2, semitone / 12); }

  function buildTheme({ root, scale, tempo, progression, waveArp, waveBass }) {
    const s = SCALES[scale];
    const bars = progression.map(degree => {
      const bassSemi = s[degree % s.length] - 12;
      const notes = [0, 2, 4, 2].map(off => {
        const idx = degree + off;
        return s[idx % s.length] + Math.floor(idx / s.length) * 12;
      });
      return { bass: noteFreq(root, bassSemi), notes: notes.map(n => noteFreq(root, n)) };
    });
    return { bars, tempo: Math.round(tempo * 1.12), waveArp: waveArp || 'sawtooth', waveBass: waveBass || 'sawtooth' };
  }

  const LEVEL_DEFS_BASE = [
    { root: midiFreq(45), scale: 'minor', tempo: 116, progression: [0, 5, 3, 4] },
    { root: midiFreq(43), scale: 'dorian', tempo: 120, progression: [0, 3, 4, 5] },
    { root: midiFreq(47), scale: 'minor', tempo: 124, progression: [0, 4, 5, 3] },
    { root: midiFreq(41), scale: 'phrygian', tempo: 128, progression: [0, 5, 4, 3] },
    { root: midiFreq(48), scale: 'harmonicMinor', tempo: 132, progression: [0, 3, 5, 4] },
    { root: midiFreq(44), scale: 'minor', tempo: 135, progression: [0, 5, 3, 2] },
    { root: midiFreq(42), scale: 'dorian', tempo: 138, progression: [0, 2, 5, 4] },
    { root: midiFreq(50), scale: 'minor', tempo: 141, progression: [0, 4, 3, 5] },
    { root: midiFreq(40), scale: 'phrygian', tempo: 144, progression: [0, 5, 4, 2] },
    { root: midiFreq(46), scale: 'harmonicMinor', tempo: 147, progression: [0, 3, 4, 5] },
    { root: midiFreq(38), scale: 'minor', tempo: 150, progression: [0, 5, 2, 4] },
    { root: midiFreq(52), scale: 'dorian', tempo: 153, progression: [0, 4, 5, 2] },
    { root: midiFreq(37), scale: 'phrygian', tempo: 156, progression: [0, 5, 3, 4], waveArp: 'square' },
    { root: midiFreq(49), scale: 'harmonicMinor', tempo: 159, progression: [0, 3, 5, 2], waveArp: 'square' },
    { root: midiFreq(36), scale: 'minor', tempo: 163, progression: [0, 5, 4, 3], waveArp: 'square' }
  ];

  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildAdditionalLevelDefs(count) {
    const rng = mulberry32(135792468);
    const scales = ['minor', 'dorian', 'phrygian', 'harmonicMinor', 'pentatonic'];
    const progressions = [[0, 5, 3, 4], [0, 3, 4, 5], [0, 4, 5, 3], [0, 5, 4, 3], [0, 3, 5, 4],
      [0, 5, 3, 2], [0, 2, 5, 4], [0, 4, 3, 5], [0, 5, 4, 2], [0, 3, 4, 5]];
    const list = [];
    let tempo = 163;
    for (let i = 0; i < count; i++) {
      tempo = Math.min(210, tempo + 2 + Math.floor(rng() * 3));
      const scale = scales[i % scales.length];
      const midi = 36 + Math.floor(rng() * 18);
      const progression = progressions[Math.floor(rng() * progressions.length)];
      const waveArp = rng() < 0.5 ? 'square' : 'sawtooth';
      list.push({ root: midiFreq(midi), scale, tempo, progression, waveArp });
    }
    return list;
  }

  const LEVEL_DEFS = [...LEVEL_DEFS_BASE, ...buildAdditionalLevelDefs(45)];

  const THEMES = {
    menu: buildTheme({ root: midiFreq(45), scale: 'minor', tempo: 96, progression: [0, 5, 3, 4], waveArp: 'triangle' }),
    endless: buildTheme({ root: midiFreq(45), scale: 'minor', tempo: 132, progression: [0, 5, 2, 3] }),
    hardcore: buildTheme({ root: midiFreq(40), scale: 'harmonicMinor', tempo: 158, progression: [0, 5, 3, 4], waveArp: 'square' }),
    ship: buildTheme({ root: midiFreq(43), scale: 'dorian', tempo: 122, progression: [0, 4, 5, 3], waveArp: 'triangle' }),
    ball: buildTheme({ root: midiFreq(46), scale: 'pentatonic', tempo: 126, progression: [0, 3, 2, 4], waveArp: 'square' }),
    custom: buildTheme({ root: midiFreq(44), scale: 'dorian', tempo: 128, progression: [0, 3, 5, 4], waveArp: 'sawtooth' }),
    levels: LEVEL_DEFS.map(buildTheme)
  };

  function ensureContext() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(ctx.destination);

    musicGain = ctx.createGain();
    musicGain.gain.value = muted ? 0 : MUSIC_VOLUME;
    musicGain.connect(masterGain);
    currentTheme = THEMES.menu;
  }

  function playArp(freq, time, wave) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2200;
    osc.type = wave;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.5, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.22);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(musicGain);
    osc.start(time);
    osc.stop(time + 0.24);
  }

  let wobbleDistortionCurve = null;
  function getWobbleDistortionCurve() {
    if (wobbleDistortionCurve) return wobbleDistortionCurve;
    const n = 256;
    const amount = 18;
    const curve = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1;
      curve[i] = ((3 + amount) * x * 20 * Math.PI / 180) / (Math.PI + amount * Math.abs(x));
    }
    wobbleDistortionCurve = curve;
    return curve;
  }

  function playWobbleBass(freq, time, duration, wave) {
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const shaper = ctx.createWaveShaper();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    osc.type = wave;
    osc.frequency.value = freq;

    filter.type = 'lowpass';
    filter.frequency.value = 450;
    filter.Q.value = 5;

    lfo.type = 'sine';
    lfo.frequency.value = 8;
    lfoGain.gain.value = 850;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    shaper.curve = getWobbleDistortionCurve();
    shaper.oversample = '2x';

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.55, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(shaper);
    shaper.connect(gain);
    gain.connect(musicGain);

    osc.start(time);
    osc.stop(time + duration + 0.05);
    lfo.start(time);
    lfo.stop(time + duration + 0.05);
  }

  function scheduleStep(index, time) {
    const theme = currentTheme;
    const bar = Math.floor(index / 16) % theme.bars.length;
    const local = index % 16;
    const chord = theme.bars[bar];
    if (local % 4 === 0) {
      playArp(chord.notes[(local / 4) % chord.notes.length], time, theme.waveArp);
    }
    if (local === 0 || local === 8) {
      const stepDur = 60 / theme.tempo / 4;
      playWobbleBass(chord.bass, time, stepDur * 7, theme.waveBass);
    }
  }

  function scheduler() {
    const stepDur = 60 / currentTheme.tempo / 4;
    while (nextNoteTime < ctx.currentTime + 0.1) {
      scheduleStep(step, nextNoteTime);
      nextNoteTime += stepDur;
      step = (step + 1) % (16 * currentTheme.bars.length);
    }
    schedulerId = setTimeout(scheduler, 25);
  }

  function init() {
    ensureContext();
    if (ctx.state === 'suspended') ctx.resume();
  }

  function start() {
    ensureContext();
    if (ctx.state === 'suspended') ctx.resume();
    if (running) return;
    running = true;
    step = 0;
    nextNoteTime = ctx.currentTime + 0.05;
    scheduler();
  }

  function setTheme(theme) {
    ensureContext();
    currentTheme = theme || THEMES.menu;
    step = 0;
    nextNoteTime = ctx.currentTime + 0.05;
  }

  function toggleMute() {
    ensureContext();
    muted = !muted;
    localStorage.setItem('neonDashMuted', String(muted));
    musicGain.gain.setTargetAtTime(muted ? 0 : MUSIC_VOLUME, ctx.currentTime, 0.05);
    return muted;
  }

  function isMuted() {
    return muted;
  }

  return { init, start, setTheme, toggleMute, isMuted, THEMES };
})();
