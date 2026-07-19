(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  const scoreEl = document.getElementById('score');
  const bestEl = document.getElementById('best');
  const modeLabelEl = document.getElementById('modeLabel');
  const levelProgressWrap = document.getElementById('levelProgressWrap');
  const levelNameEl = document.getElementById('levelName');
  const levelTimerEl = document.getElementById('levelTimer');
  const progressBarFill = document.getElementById('progressBarFill');
  const practiceTagEl = document.getElementById('practiceTag');
  const checkpointBtnEl = document.getElementById('checkpointBtn');
  const moveLeftBtn = document.getElementById('moveLeftBtn');
  const moveRightBtn = document.getElementById('moveRightBtn');
  const levelCoinRowEl = document.getElementById('levelCoinRow');
  const coinBalanceEl = document.getElementById('coinBalance');
  const collectionCoinBalanceEl = document.getElementById('collectionCoinBalance');

  const menuScreen = document.getElementById('menuScreen');
  const gameOverScreen = document.getElementById('gameOverScreen');
  const levelCompleteScreen = document.getElementById('levelCompleteScreen');
  const menuBestEl = document.getElementById('menuBest');
  const menuHardcoreBestEl = document.getElementById('menuHardcoreBest');
  const menuShipBestEl = document.getElementById('menuShipBest');
  const menuBallBestEl = document.getElementById('menuBallBest');
  const levelGridEl = document.getElementById('levelGrid');
  const endlessBtn = document.getElementById('endlessBtn');
  const hardcoreBtn = document.getElementById('hardcoreBtn');
  const shipBtn = document.getElementById('shipBtn');
  const ballBtn = document.getElementById('ballBtn');
  const retryBtn = document.getElementById('retryBtn');
  const gameOverMenuBtn = document.getElementById('gameOverMenuBtn');
  const gameOverStat1 = document.getElementById('gameOverStat1');
  const gameOverStat2 = document.getElementById('gameOverStat2');
  const gameOverRewardEl = document.getElementById('gameOverReward');
  const nextLevelBtn = document.getElementById('nextLevelBtn');
  const completeMenuBtn = document.getElementById('completeMenuBtn');
  const completeLevelName = document.getElementById('completeLevelName');
  const completeTime = document.getElementById('completeTime');
  const completeBestTime = document.getElementById('completeBestTime');
  const completeRewardEl = document.getElementById('completeReward');
  const muteBtn = document.getElementById('muteBtn');

  const dailyChestBtn = document.getElementById('dailyChestBtn');
  const chestStatusEl = document.getElementById('chestStatus');
  const chestRevealScreen = document.getElementById('chestRevealScreen');
  const chestRevealTitle = document.getElementById('chestRevealTitle');
  const chestRevealSwatch = document.getElementById('chestRevealSwatch');
  const chestRevealName = document.getElementById('chestRevealName');
  const chestRevealSub = document.getElementById('chestRevealSub');
  const chestRevealBtn = document.getElementById('chestRevealBtn');
  const collectionBtn = document.getElementById('collectionBtn');
  const collectionCountEl = document.getElementById('collectionCount');
  const collectionScreen = document.getElementById('collectionScreen');
  const collectionProgress = document.getElementById('collectionProgress');
  const collectionGridEl = document.getElementById('collectionGrid');
  const rarityLegendEl = document.getElementById('rarityLegend');
  const collectionBackBtn = document.getElementById('collectionBackBtn');

  const shopBtn = document.getElementById('shopBtn');
  const shopOwnedCountEl = document.getElementById('shopOwnedCount');
  const shopScreen = document.getElementById('shopScreen');
  const shopGridEl = document.getElementById('shopGrid');
  const shopCoinBalanceEl = document.getElementById('shopCoinBalance');
  const shopBackBtn = document.getElementById('shopBackBtn');

  const digBtn = document.getElementById('digBtn');
  const digScreen = document.getElementById('digScreen');
  const digGridEl = document.getElementById('digGrid');
  const menuDiamondBalanceEl = document.getElementById('menuDiamondBalance');
  const digDiamondBalanceEl = document.getElementById('digDiamondBalance');
  const digNewPatchBtn = document.getElementById('digNewPatchBtn');
  const digBackBtn = document.getElementById('digBackBtn');

  const diamondShopBtn = document.getElementById('diamondShopBtn');
  const diamondShopOwnedCountEl = document.getElementById('diamondShopOwnedCount');
  const diamondShopScreen = document.getElementById('diamondShopScreen');
  const diamondShopGridEl = document.getElementById('diamondShopGrid');
  const diamondShopBalanceEl = document.getElementById('diamondShopBalance');
  const diamondShopBackBtn = document.getElementById('diamondShopBackBtn');

  const slotsBtn = document.getElementById('slotsBtn');
  const slotsScreen = document.getElementById('slotsScreen');
  const slotsCoinBalanceEl = document.getElementById('slotsCoinBalance');
  const slotsResultEl = document.getElementById('slotsResult');
  const slotsSpinBtn = document.getElementById('slotsSpinBtn');
  const slotsBackBtn = document.getElementById('slotsBackBtn');
  const slotReelEls = [document.getElementById('slotReel0'), document.getElementById('slotReel1'), document.getElementById('slotReel2')];

  const meteorBtn = document.getElementById('meteorBtn');
  const meteorScreen = document.getElementById('meteorScreen');
  const meteorDiamondBalanceEl = document.getElementById('meteorDiamondBalance');
  const meteorHintEl = document.getElementById('meteorHint');
  const meteorCanvas = document.getElementById('meteorCanvas');
  const meteorTimerEl = document.getElementById('meteorTimer');
  const meteorPlayBtn = document.getElementById('meteorPlayBtn');
  const meteorBackBtn = document.getElementById('meteorBackBtn');

  const minigamesBtn = document.getElementById('minigamesBtn');
  const minigamesScreen = document.getElementById('minigamesScreen');
  const minigamesGridEl = document.getElementById('minigamesGrid');
  const minigamesBackBtn = document.getElementById('minigamesBackBtn');

  const minigamePlayScreen = document.getElementById('minigamePlayScreen');
  const minigamePlayTitleEl = document.getElementById('minigamePlayTitle');
  const minigamePlayCoinRow = document.getElementById('minigamePlayCoinRow');
  const minigamePlayCoinBalanceEl = document.getElementById('minigamePlayCoinBalance');
  const minigamePlayDiamondRow = document.getElementById('minigamePlayDiamondRow');
  const minigamePlayDiamondBalanceEl = document.getElementById('minigamePlayDiamondBalance');
  const minigamePlayHintEl = document.getElementById('minigamePlayHint');
  const minigameAreaEl = document.getElementById('minigameArea');
  const minigamePlayResultEl = document.getElementById('minigamePlayResult');
  const minigamePlayActionBtn = document.getElementById('minigamePlayActionBtn');
  const minigamePlayBackBtn = document.getElementById('minigamePlayBackBtn');

  const createLevelBtn = document.getElementById('createLevelBtn');
  const customLevelListEl = document.getElementById('customLevelList');
  const levelPackListEl = document.getElementById('levelPackList');
  const gauntletListEl = document.getElementById('gauntletList');
  const editorPanel = document.getElementById('editorPanel');
  const editorNameInput = document.getElementById('editorName');
  const editorLengthInput = document.getElementById('editorLength');
  const editorSpeedInput = document.getElementById('editorSpeed');
  const editorSideToggleBtn = document.getElementById('editorSideToggle');
  const editorScrollLeftBtn = document.getElementById('editorScrollLeft');
  const editorScrollRightBtn = document.getElementById('editorScrollRight');
  const editorClearBtn = document.getElementById('editorClearBtn');
  const editorTestBtn = document.getElementById('editorTestBtn');
  const editorSaveBtn = document.getElementById('editorSaveBtn');
  const editorBackBtn = document.getElementById('editorBackBtn');

  const COMPLETED_KEY = 'neonDashCompletedLevels';
  const CLAIMED_PACKS_KEY = 'neonDashClaimedPacks';
  const CLAIMED_GAUNTLETS_KEY = 'neonDashClaimedGauntlets';
  const LEVEL_COINS_KEY = 'neonDashLevelCoins';
  const COIN_BALANCE_KEY = 'neonDashCoinBalance';
  const DIAMOND_BALANCE_KEY = 'neonDashDiamondBalance';
  const BEST_TIMES_KEY = 'neonDashBestTimes';
  const CUSTOM_LEVELS_KEY = 'neonDashCustomLevels';
  const BEST_KEYS = { endless: 'neonDashBest', hardcore: 'neonDashHardcoreBest', ship: 'neonDashShipBest', ball: 'neonDashBallBest' };
  const UNLOCKED_SKINS_KEY = 'neonDashUnlockedSkins';
  const EQUIPPED_SKIN_KEY = 'neonDashEquippedSkin';
  const UNLOCKED_SHIPS_KEY = 'neonDashUnlockedShips';
  const EQUIPPED_SHIP_KEY = 'neonDashEquippedShip';
  const UNLOCKED_TRAILS_KEY = 'neonDashUnlockedTrails';
  const EQUIPPED_TRAIL_KEY = 'neonDashEquippedTrail';
  const LAST_CHEST_KEY = 'neonDashLastChest';

  const RARITY_INFO = {
    common: { label: 'COMMON', color: '#9fb3c8', weight: 60 },
    rare: { label: 'RARE', color: '#4ff2ff', weight: 27 },
    epic: { label: 'EPIC', color: '#c48bff', weight: 10 },
    legendary: { label: 'LEGENDARY', color: '#ffe14f', weight: 3 },
    ultimate: { label: 'ULTIMATE', color: '#ff8a00', weight: 0 },
    mythic: { label: 'MYTHIC', color: '#7cf9ff', weight: 0 }
  };
  const RARITY_COST = { common: 8, rare: 20, epic: 50, legendary: 120, ultimate: 300 };

  const SIGNATURE_SKINS = [
    { id: 'default', name: 'NEON', c1: '#4ff2ff', c2: '#ff3df0', rarity: 'common' },
    { id: 'solar', name: 'SOLAR FLARE', c1: '#fff35c', c2: '#ff7a1a', rarity: 'common' },
    { id: 'toxic', name: 'TOXIC', c1: '#baff3d', c2: '#00c46a', rarity: 'common' },
    { id: 'royal', name: 'ROYAL', c1: '#9d6bff', c2: '#3d5bff', rarity: 'rare' },
    { id: 'crimson', name: 'CRIMSON', c1: '#ff6b6b', c2: '#8a0026', rarity: 'rare' },
    { id: 'glacier', name: 'GLACIER', c1: '#c8faff', c2: '#3d8bff', rarity: 'rare' },
    { id: 'gilded', name: 'GILDED', c1: '#fff2b8', c2: '#c9971f', rarity: 'epic' },
    { id: 'void', name: 'VOID', c1: '#c48bff', c2: '#3d1a66', rarity: 'legendary' }
  ];

  const ULTIMATE_SKINS = [
    { id: 'ult-inferno', name: 'INFERNO CORE', c1: '#ff5a1a', c2: '#5c0000', rarity: 'ultimate', pattern: 'flame', cost: 300 },
    { id: 'ult-galaxy', name: 'GALAXY DRIFT', c1: '#8b5cf6', c2: '#0a0a2a', rarity: 'ultimate', pattern: 'stars', cost: 350 },
    { id: 'ult-hexcore', name: 'HEXCORE', c1: '#4ff2ff', c2: '#003a3a', rarity: 'ultimate', pattern: 'hex', cost: 350 },
    { id: 'ult-circuitking', name: 'CIRCUIT KING', c1: '#39ff8a', c2: '#003318', rarity: 'ultimate', pattern: 'circuit', cost: 400 },
    { id: 'ult-royalcrest', name: 'ROYAL CREST', c1: '#ffd700', c2: '#5c3d00', rarity: 'ultimate', pattern: 'diamond', cost: 450 },
    { id: 'ult-glitchking', name: 'GLITCH KING', c1: '#ff3df0', c2: '#0a0a0a', rarity: 'ultimate', pattern: 'glitch', cost: 500 },
    { id: 'ult-prismshard', name: 'PRISM SHARD', c1: '#ffffff', c2: '#4ff2ff', rarity: 'ultimate', pattern: 'stripes', cost: 600 },
    { id: 'ult-voidsovereign', name: 'VOID SOVEREIGN', c1: '#3d1a66', c2: '#000000', rarity: 'ultimate', pattern: 'rings', cost: 900 }
  ];

  const DIAMOND_SKINS = [
    { id: 'dia-aurora', name: 'AURORA REGALIA', c1: '#7cf9ff', c2: '#0a1a3d', rarity: 'mythic', pattern: 'rings', costDiamonds: 4000 },
    { id: 'dia-supernova', name: 'SUPERNOVA', c1: '#ffe14f', c2: '#ff3df0', rarity: 'mythic', pattern: 'stars', costDiamonds: 5500 },
    { id: 'dia-titanium', name: 'TITANIUM EDGE', c1: '#e8f4ff', c2: '#5c6b7a', rarity: 'mythic', pattern: 'hex', costDiamonds: 7000 },
    { id: 'dia-abyssal', name: 'ABYSSAL KING', c1: '#3d1a66', c2: '#000814', rarity: 'mythic', pattern: 'circuit', costDiamonds: 9000 },
    { id: 'dia-eternal', name: 'ETERNAL DIAMOND', c1: '#ffffff', c2: '#7cf9ff', rarity: 'mythic', pattern: 'diamond', costDiamonds: 12000 },
    { id: 'dia-emberlord', name: 'EMBERLORD', c1: '#ff9a3d', c2: '#4d0f00', rarity: 'mythic', pattern: 'flame', costDiamonds: 14000 },
    { id: 'dia-starforge', name: 'STARFORGE', c1: '#ffd166', c2: '#1a0a3d', rarity: 'mythic', pattern: 'stars', costDiamonds: 16000 },
    { id: 'dia-crystalline', name: 'CRYSTALLINE', c1: '#d0f7ff', c2: '#2a6f8a', rarity: 'mythic', pattern: 'hex', costDiamonds: 18000 },
    { id: 'dia-mainframe', name: 'MAINFRAME', c1: '#7cff9a', c2: '#01230f', rarity: 'mythic', pattern: 'circuit', costDiamonds: 20000 },
    { id: 'dia-monarch', name: 'MONARCH', c1: '#ffe8a3', c2: '#7a4d00', rarity: 'mythic', pattern: 'diamond', costDiamonds: 22000 },
    { id: 'dia-corrupted', name: 'CORRUPTED SIGNAL', c1: '#ff2ec4', c2: '#050505', rarity: 'mythic', pattern: 'glitch', costDiamonds: 24000 },
    { id: 'dia-lumina', name: 'LUMINA', c1: '#ffffff', c2: '#a3d9ff', rarity: 'mythic', pattern: 'stripes', costDiamonds: 26000 },
    { id: 'dia-eclipsed', name: 'ECLIPSED', c1: '#8b5cf6', c2: '#050014', rarity: 'mythic', pattern: 'rings', costDiamonds: 28000 },
    { id: 'dia-warden', name: 'WARDEN PRIME', c1: '#4ff2ff', c2: '#001a1a', rarity: 'mythic', pattern: 'hex', costDiamonds: 30000 },
    { id: 'dia-genesis', name: 'GENESIS', c1: '#ffffff', c2: '#ffe14f', rarity: 'mythic', pattern: 'stars', costDiamonds: 35000 }
  ];

  const DIAMOND_SHIPS = [
    { id: 'dship-comet', name: 'COMET SOVEREIGN', c1: '#7cf9ff', c2: '#0a1a3d', rarity: 'mythic', pattern: 'rings', costDiamonds: 4500 },
    { id: 'dship-nova', name: 'NOVA WING', c1: '#ffe14f', c2: '#ff3df0', rarity: 'mythic', pattern: 'stars', costDiamonds: 6000 },
    { id: 'dship-titan', name: 'TITAN HULL', c1: '#e8f4ff', c2: '#5c6b7a', rarity: 'mythic', pattern: 'hex', costDiamonds: 8000 },
    { id: 'dship-abyss', name: 'ABYSS RUNNER', c1: '#3d1a66', c2: '#000814', rarity: 'mythic', pattern: 'circuit', costDiamonds: 10000 },
    { id: 'dship-diamond', name: 'DIAMOND EDGE', c1: '#ffffff', c2: '#7cf9ff', rarity: 'mythic', pattern: 'diamond', costDiamonds: 13000 },
    { id: 'dship-ember', name: 'EMBERWING', c1: '#ff9a3d', c2: '#4d0f00', rarity: 'mythic', pattern: 'flame', costDiamonds: 15000 },
    { id: 'dship-mainframe', name: 'MAINFRAME MK2', c1: '#7cff9a', c2: '#01230f', rarity: 'mythic', pattern: 'circuit', costDiamonds: 18000 },
    { id: 'dship-corrupted', name: 'CORRUPTED WING', c1: '#ff2ec4', c2: '#050505', rarity: 'mythic', pattern: 'glitch', costDiamonds: 21000 },
    { id: 'dship-lumina', name: 'LUMINA DRIFT', c1: '#ffffff', c2: '#a3d9ff', rarity: 'mythic', pattern: 'stripes', costDiamonds: 24000 },
    { id: 'dship-genesis', name: 'GENESIS WING', c1: '#ffffff', c2: '#ffe14f', rarity: 'mythic', pattern: 'stars', costDiamonds: 30000 }
  ];

  const SIGNATURE_SHIPS = [
    { id: 'ship-default', name: 'INTERCEPTOR', c1: '#4ff2ff', c2: '#ff3df0', rarity: 'common' },
    { id: 'ship-blaze', name: 'BLAZE RUNNER', c1: '#fff35c', c2: '#ff7a1a', rarity: 'common' },
    { id: 'ship-viper', name: 'VIPER', c1: '#baff3d', c2: '#00c46a', rarity: 'common' },
    { id: 'ship-royal', name: 'ROYAL FALCON', c1: '#9d6bff', c2: '#3d5bff', rarity: 'rare' },
    { id: 'ship-crimson', name: 'CRIMSON WRAITH', c1: '#ff6b6b', c2: '#8a0026', rarity: 'rare' },
    { id: 'ship-glacier', name: 'GLACIER CORSAIR', c1: '#c8faff', c2: '#3d8bff', rarity: 'rare' },
    { id: 'ship-gilded', name: 'GILDED PHOENIX', c1: '#fff2b8', c2: '#c9971f', rarity: 'epic' },
    { id: 'ship-void', name: 'VOID REAPER', c1: '#c48bff', c2: '#3d1a66', rarity: 'legendary' }
  ];

  const SKIN_ADJ = ['NEON', 'PLASMA', 'QUANTUM', 'CYBER', 'LASER', 'PHANTOM', 'GLITCH', 'VAPOR', 'CHROME', 'STATIC',
    'VOLT', 'RETRO', 'ATOMIC', 'LUNAR', 'SOLAR', 'ARCANE', 'FROST', 'EMBER', 'SHADOW', 'CRYSTAL',
    'TURBO', 'HYPER', 'COSMIC', 'RADIANT', 'FERAL', 'SPECTRAL', 'MIDNIGHT', 'GOLDEN', 'CRIMSON', 'AZURE'];
  const SKIN_NOUN = ['WAVE', 'FLARE', 'BLADE', 'CORE', 'DRIFT', 'SURGE', 'SPARK', 'HAZE', 'PULSE', 'ECHO',
    'STORM', 'CIRCUIT', 'MERIDIAN', 'CASCADE', 'RUSH', 'BLOOM', 'RIOT', 'FRACTURE', 'HALO', 'VORTEX',
    'PRISM', 'NEBULA', 'SIGNAL', 'GRID', 'FLUX', 'ORBIT', 'ZENITH', 'ECLIPSE', 'MIRAGE', 'GLARE'];

  const SHIP_ADJ = ['STEALTH', 'RAPID', 'IRON', 'GHOST', 'ROGUE', 'NOVA', 'TITAN', 'APEX', 'OMEGA', 'VECTOR',
    'QUANTUM', 'PHANTOM', 'CRIMSON', 'ARCTIC', 'SOLAR', 'LUNAR', 'VOID', 'STORM', 'BLAZE', 'SHADOW',
    'HYPER', 'ROGUE', 'CHROME', 'STATIC', 'FERAL', 'RADIANT', 'MIDNIGHT', 'GOLDEN', 'AZURE', 'FROST'];
  const SHIP_NOUN = ['INTERCEPTOR', 'CRUISER', 'FALCON', 'VIPER', 'COMET', 'RAPTOR', 'WRAITH', 'HORNET', 'PHOENIX', 'CORSAIR',
    'BANSHEE', 'TALON', 'NOMAD', 'STRIKER', 'GLIDER', 'PULSAR', 'METEOR', 'ORBITER', 'SABER', 'LANCER',
    'DRIFTER', 'RUNNER', 'SEEKER', 'VALKYRIE', 'MARAUDER', 'HARBINGER', 'SENTINEL', 'REAPER', 'ZEPHYR', 'HALCYON'];

  function buildGeneratedCosmetics(seed, count, adjList, nounList, idPrefix) {
    const rng = mulberry32(seed);
    const used = new Set();
    const list = [];
    for (let i = 0; i < count; i++) {
      let name;
      do {
        const a = adjList[(rng() * adjList.length) | 0];
        const n = nounList[(rng() * nounList.length) | 0];
        name = a + ' ' + n;
      } while (used.has(name));
      used.add(name);

      const hue1 = rng() * 360;
      const hue2 = (hue1 + 30 + rng() * 90) % 360;
      const sat = 70 + rng() * 25;
      const c1 = `hsl(${hue1.toFixed(0)}, ${sat.toFixed(0)}%, ${(58 + rng() * 12).toFixed(0)}%)`;
      const c2 = `hsl(${hue2.toFixed(0)}, ${sat.toFixed(0)}%, ${(20 + rng() * 18).toFixed(0)}%)`;

      const roll = rng();
      const rarity = roll < 0.55 ? 'common' : roll < 0.85 ? 'rare' : roll < 0.97 ? 'epic' : 'legendary';

      list.push({ id: idPrefix + i, name, c1, c2, rarity });
    }
    return list;
  }

  const SKINS = [...SIGNATURE_SKINS, ...buildGeneratedCosmetics(918273645, 500, SKIN_ADJ, SKIN_NOUN, 'gen'), ...ULTIMATE_SKINS, ...DIAMOND_SKINS];
  const SHIPS = [...SIGNATURE_SHIPS, ...buildGeneratedCosmetics(837465219, 500, SHIP_ADJ, SHIP_NOUN, 'genship'), ...DIAMOND_SHIPS];

  const SIGNATURE_TRAILS = [
    { id: 'trail-default', name: 'NEON TRAIL', c1: '#4ff2ff', c2: '#ff3df0', rarity: 'common' }
  ];

  const DIAMOND_TRAILS = [
    { id: 'dtrail-aurora', name: 'AURORA WAKE', c1: '#7cf9ff', c2: '#0a1a3d', rarity: 'mythic', costDiamonds: 3000 },
    { id: 'dtrail-nova', name: 'NOVA WAKE', c1: '#ffe14f', c2: '#ff3df0', rarity: 'mythic', costDiamonds: 4000 },
    { id: 'dtrail-titanium', name: 'TITANIUM WAKE', c1: '#e8f4ff', c2: '#5c6b7a', rarity: 'mythic', costDiamonds: 5000 },
    { id: 'dtrail-abyssal', name: 'ABYSSAL WAKE', c1: '#3d1a66', c2: '#000814', rarity: 'mythic', costDiamonds: 6000 },
    { id: 'dtrail-eternal', name: 'ETERNAL WAKE', c1: '#ffffff', c2: '#7cf9ff', rarity: 'mythic', costDiamonds: 7500 },
    { id: 'dtrail-ember', name: 'EMBER WAKE', c1: '#ff9a3d', c2: '#4d0f00', rarity: 'mythic', costDiamonds: 9000 },
    { id: 'dtrail-toxic', name: 'TOXIC WAKE', c1: '#7cff9a', c2: '#01230f', rarity: 'mythic', costDiamonds: 10500 },
    { id: 'dtrail-corrupted', name: 'CORRUPTED WAKE', c1: '#ff2ec4', c2: '#050505', rarity: 'mythic', costDiamonds: 12000 },
    { id: 'dtrail-lumina', name: 'LUMINA WAKE', c1: '#ffffff', c2: '#a3d9ff', rarity: 'mythic', costDiamonds: 14000 },
    { id: 'dtrail-genesis', name: 'GENESIS WAKE', c1: '#ffffff', c2: '#ffe14f', rarity: 'mythic', costDiamonds: 18000 }
  ];

  const TRAILS = [...SIGNATURE_TRAILS, ...DIAMOND_TRAILS];

  const COSMETIC_CATEGORIES = {
    skin: { items: SKINS, unlockedKey: UNLOCKED_SKINS_KEY, equippedKey: EQUIPPED_SKIN_KEY, defaultId: 'default', label: 'SKIN' },
    ship: { items: SHIPS, unlockedKey: UNLOCKED_SHIPS_KEY, equippedKey: EQUIPPED_SHIP_KEY, defaultId: 'ship-default', label: 'SHIP' },
    trail: { items: TRAILS, unlockedKey: UNLOCKED_TRAILS_KEY, equippedKey: EQUIPPED_TRAIL_KEY, defaultId: 'trail-default', label: 'TRAIL' }
  };

  function rollRarity() {
    const total = Object.values(RARITY_INFO).reduce((s, r) => s + r.weight, 0);
    let roll = Math.random() * total;
    for (const key of Object.keys(RARITY_INFO)) {
      roll -= RARITY_INFO[key].weight;
      if (roll <= 0) return key;
    }
    return 'common';
  }

  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function getUnlockedCosmetics(cat) {
    const info = COSMETIC_CATEGORIES[cat];
    try {
      const list = JSON.parse(localStorage.getItem(info.unlockedKey) || JSON.stringify([info.defaultId]));
      return list.includes(info.defaultId) ? list : [info.defaultId, ...list];
    } catch (e) { return [info.defaultId]; }
  }
  function setUnlockedCosmetics(cat, list) {
    localStorage.setItem(COSMETIC_CATEGORIES[cat].unlockedKey, JSON.stringify(list));
  }
  function getEquippedCosmeticId(cat) {
    return localStorage.getItem(COSMETIC_CATEGORIES[cat].equippedKey) || COSMETIC_CATEGORIES[cat].defaultId;
  }
  function setEquippedCosmeticId(cat, id) {
    localStorage.setItem(COSMETIC_CATEGORIES[cat].equippedKey, id);
  }
  function getEquippedCosmetic(cat) {
    const info = COSMETIC_CATEGORIES[cat];
    return info.items.find(s => s.id === getEquippedCosmeticId(cat)) || info.items[0];
  }
  function isChestAvailable() {
    return localStorage.getItem(LAST_CHEST_KEY) !== todayStr();
  }

  const LEVELS_BASE = [
    { id: 1, name: 'NEON DAWN', length: 3600, speed: 320, seed: 101, gapMin: 340, gapMax: 500, doubleChance: 0.05, blockChance: 0.25, tripleChance: 0 },
    { id: 2, name: 'PULSE DRIVE', length: 4400, speed: 360, seed: 202, gapMin: 300, gapMax: 460, doubleChance: 0.12, blockChance: 0.30, tripleChance: 0 },
    { id: 3, name: 'GRID RUSH', length: 5200, speed: 400, seed: 303, gapMin: 280, gapMax: 420, doubleChance: 0.20, blockChance: 0.32, tripleChance: 0 },
    { id: 4, name: 'VOID CIRCUIT', length: 6200, speed: 440, seed: 404, gapMin: 260, gapMax: 400, doubleChance: 0.28, blockChance: 0.34, tripleChance: 0 },
    { id: 5, name: 'HYPER OVERDRIVE', length: 7200, speed: 480, seed: 505, gapMin: 250, gapMax: 380, doubleChance: 0.35, blockChance: 0.36, tripleChance: 0 },
    { id: 6, name: 'CHROME HORIZON', length: 7600, speed: 500, seed: 606, gapMin: 300, gapMax: 450, doubleChance: 0.30, blockChance: 0.34, tripleChance: 0.05 },
    { id: 7, name: 'STATIC BLOOM', length: 8000, speed: 520, seed: 707, gapMin: 290, gapMax: 440, doubleChance: 0.32, blockChance: 0.34, tripleChance: 0.08 },
    { id: 8, name: 'QUANTUM FLUX', length: 8400, speed: 540, seed: 808, gapMin: 280, gapMax: 430, doubleChance: 0.33, blockChance: 0.35, tripleChance: 0.10 },
    { id: 9, name: 'SIGNAL STORM', length: 8800, speed: 560, seed: 909, gapMin: 270, gapMax: 420, doubleChance: 0.34, blockChance: 0.35, tripleChance: 0.12 },
    { id: 10, name: 'PHANTOM CIRCUIT', length: 9200, speed: 580, seed: 1010, gapMin: 260, gapMax: 410, doubleChance: 0.35, blockChance: 0.36, tripleChance: 0.14 },
    { id: 11, name: 'RETROWAVE RIOT', length: 9600, speed: 600, seed: 1111, gapMin: 255, gapMax: 400, doubleChance: 0.36, blockChance: 0.36, tripleChance: 0.16 },
    { id: 12, name: 'GLITCH CASCADE', length: 10000, speed: 615, seed: 1212, gapMin: 250, gapMax: 390, doubleChance: 0.37, blockChance: 0.37, tripleChance: 0.18 },
    { id: 13, name: 'LASER MERIDIAN', length: 10400, speed: 630, seed: 1313, gapMin: 245, gapMax: 380, doubleChance: 0.38, blockChance: 0.37, tripleChance: 0.20 },
    { id: 14, name: 'SYNTH APOCALYPSE', length: 10800, speed: 645, seed: 1414, gapMin: 240, gapMax: 370, doubleChance: 0.39, blockChance: 0.38, tripleChance: 0.22 },
    { id: 15, name: 'TERMINAL VELOCITY', length: 11200, speed: 660, seed: 1515, gapMin: 235, gapMax: 360, doubleChance: 0.40, blockChance: 0.38, tripleChance: 0.25 }
  ];

  const LEVEL_NAME_ADJ = ['NEON', 'PULSE', 'QUANTUM', 'VOID', 'CHROME', 'GLITCH', 'PHANTOM', 'STORM', 'RADIANT', 'CRIMSON',
    'FROST', 'EMBER', 'SOLAR', 'LUNAR', 'TOXIC', 'FERAL', 'SPECTRAL', 'MIDNIGHT', 'GOLDEN', 'AZURE',
    'HYPER', 'TURBO', 'COSMIC', 'ARCANE', 'SHADOW', 'CRYSTAL', 'VOLT', 'RETRO', 'ATOMIC', 'STATIC'];
  const LEVEL_NAME_NOUN = ['DAWN', 'DRIVE', 'RUSH', 'CIRCUIT', 'OVERDRIVE', 'HORIZON', 'BLOOM', 'FLUX', 'CASCADE', 'MERIDIAN',
    'ECLIPSE', 'VORTEX', 'APOCALYPSE', 'VELOCITY', 'RIOT', 'FRACTURE', 'SIGNAL', 'ORBIT', 'ZENITH', 'MIRAGE',
    'GLARE', 'ABYSS', 'NEXUS', 'PROTOCOL', 'REBELLION', 'SANCTUM', 'SPIRAL', 'ASCENT', 'PARADOX', 'INFERNO'];

  function buildAdditionalLevels(count) {
    const rng = mulberry32(24681012);
    const usedNames = new Set(LEVELS_BASE.map(l => l.name));
    const list = [];
    let length = 11200, speed = 660, gapMin = 235, gapMax = 360, doubleChance = 0.40, blockChance = 0.38, tripleChance = 0.25;
    for (let i = 0; i < count; i++) {
      const id = LEVELS_BASE.length + 1 + i;
      let name;
      do {
        const a = LEVEL_NAME_ADJ[(rng() * LEVEL_NAME_ADJ.length) | 0];
        const n = LEVEL_NAME_NOUN[(rng() * LEVEL_NAME_NOUN.length) | 0];
        name = a + ' ' + n;
      } while (usedNames.has(name));
      usedNames.add(name);

      length += 400;
      speed = Math.min(900, speed + 5);
      gapMin = Math.max(150, gapMin - 2);
      gapMax = Math.max(260, gapMax - 2);
      doubleChance = Math.min(0.5, doubleChance + 0.002);
      blockChance = Math.min(0.45, blockChance + 0.0016);
      tripleChance = Math.min(0.45, tripleChance + 0.004);

      list.push({ id, name, length, speed, seed: id * 101, gapMin, gapMax, doubleChance, blockChance, tripleChance });
    }
    return list;
  }

  const LEVELS = [...LEVELS_BASE, ...buildAdditionalLevels(45)];

  const LEVEL_PACK_ADJ = ['CRIMSON', 'AZURE', 'OBSIDIAN', 'PLATINUM', 'EMERALD', 'VIOLET', 'AMBER', 'SILVER', 'COBALT', 'SCARLET',
    'IVORY', 'ONYX', 'JADE', 'RUBY', 'SAPPHIRE'];
  const LEVEL_PACK_NOUN = ['ASCENSION', 'DOMINION', 'PARADOX', 'ECHELON', 'BASTION', 'REVELATION', 'SINGULARITY', 'DESCENT', 'RECKONING', 'ODYSSEY',
    'CITADEL', 'MAELSTROM', 'THRESHOLD', 'GENESIS', 'FRONTIER'];

  function buildAdditionalPacks(count) {
    const rng = mulberry32(97531864);
    const usedNames = new Set(LEVEL_PACKS_BASE.map(p => p.name));
    const list = [];
    for (let i = 0; i < count; i++) {
      const cycle = Math.floor(i / 15);
      const within = i % 15;
      const levelIds = cycle === 0
        ? [16 + within * 3, 17 + within * 3, 18 + within * 3]
        : [1 + within, 21 + within, 41 + within];
      let name;
      do {
        const a = LEVEL_PACK_ADJ[(rng() * LEVEL_PACK_ADJ.length) | 0];
        const n = LEVEL_PACK_NOUN[(rng() * LEVEL_PACK_NOUN.length) | 0];
        name = a + ' ' + n;
      } while (usedNames.has(name));
      usedNames.add(name);
      list.push({ id: 'pack' + (LEVEL_PACKS_BASE.length + 1 + i), name, levelIds });
    }
    return list;
  }

  const LEVEL_PACKS_BASE = [
    { id: 'pack1', name: 'NEON BEGINNINGS', levelIds: [1, 2, 3] },
    { id: 'pack2', name: 'PULSE SURGE', levelIds: [4, 5, 6] },
    { id: 'pack3', name: 'STORM CIRCUIT', levelIds: [7, 8, 9] },
    { id: 'pack4', name: 'GLITCH REALM', levelIds: [10, 11, 12] },
    { id: 'pack5', name: 'TERMINAL LEGACY', levelIds: [13, 14, 15] }
  ];

  const LEVEL_PACKS = [...LEVEL_PACKS_BASE, ...buildAdditionalPacks(30)];

  const GAUNTLETS = [
    { id: 'gaunt-fire', name: 'FIRE GAUNTLET', color: '#ff5a1a', levelIds: [1, 6, 11], diamondReward: 800 },
    { id: 'gaunt-ice', name: 'ICE GAUNTLET', color: '#7cf9ff', levelIds: [2, 7, 12], diamondReward: 1000 },
    { id: 'gaunt-poison', name: 'POISON GAUNTLET', color: '#baff3d', levelIds: [3, 8, 13], diamondReward: 1200 },
    { id: 'gaunt-shadow', name: 'SHADOW GAUNTLET', color: '#8b5cf6', levelIds: [4, 9, 14], diamondReward: 1500 },
    { id: 'gaunt-lava', name: 'LAVA GAUNTLET', color: '#ff3d1a', levelIds: [5, 10, 15], diamondReward: 2000 },
    { id: 'gaunt-water', name: 'WATER GAUNTLET', color: '#1ac6ff', levelIds: [16, 31, 46], diamondReward: 2200 },
    { id: 'gaunt-wind', name: 'WIND GAUNTLET', color: '#baffef', levelIds: [17, 32, 47], diamondReward: 2400 },
    { id: 'gaunt-earth', name: 'EARTH GAUNTLET', color: '#a97845', levelIds: [18, 33, 48], diamondReward: 2600 },
    { id: 'gaunt-thunder', name: 'THUNDER GAUNTLET', color: '#ffe14f', levelIds: [19, 34, 49], diamondReward: 2800 },
    { id: 'gaunt-crystal', name: 'CRYSTAL GAUNTLET', color: '#b3e0ff', levelIds: [20, 35, 50], diamondReward: 3000 },
    { id: 'gaunt-chaos', name: 'CHAOS GAUNTLET', color: '#ff2ec4', levelIds: [21, 36, 51], diamondReward: 3200 },
    { id: 'gaunt-time', name: 'TIME GAUNTLET', color: '#c48bff', levelIds: [22, 37, 52], diamondReward: 3400 },
    { id: 'gaunt-magic', name: 'MAGIC GAUNTLET', color: '#9d6bff', levelIds: [23, 38, 53], diamondReward: 3600 },
    { id: 'gaunt-steel', name: 'STEEL GAUNTLET', color: '#b0b8c0', levelIds: [24, 39, 54], diamondReward: 3800 },
    { id: 'gaunt-plasma', name: 'PLASMA GAUNTLET', color: '#ff5ac4', levelIds: [25, 40, 55], diamondReward: 4000 },
    { id: 'gaunt-nova', name: 'NOVA GAUNTLET', color: '#fff35c', levelIds: [26, 41, 56], diamondReward: 4200 },
    { id: 'gaunt-eclipse', name: 'ECLIPSE GAUNTLET', color: '#5c3d99', levelIds: [27, 42, 57], diamondReward: 4400 },
    { id: 'gaunt-rift', name: 'RIFT GAUNTLET', color: '#00e0c0', levelIds: [28, 43, 58], diamondReward: 4600 },
    { id: 'gaunt-storm', name: 'STORM GAUNTLET', color: '#4ff2ff', levelIds: [29, 44, 59], diamondReward: 4800 },
    { id: 'gaunt-void', name: 'VOID GAUNTLET', color: '#8a5cff', levelIds: [30, 45, 60], diamondReward: 5000 }
  ];

  const ENDLESS_CONFIGS = {
    endless: { baseSpeed: 340, maxSpeed: 620, ramp: 4.5, gapMin: 300, gapMax: 460 },
    hardcore: { baseSpeed: 430, maxSpeed: 780, ramp: 7.5, gapMin: 250, gapMax: 380 },
    ship: { baseSpeed: 300, maxSpeed: 560, ramp: 5, gapMin: 260, gapMax: 400 },
    ball: { baseSpeed: 320, maxSpeed: 580, ramp: 5, gapMin: 260, gapMax: 400 }
  };

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function getCompleted() {
    try { return JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function markCompleted(id) {
    const done = getCompleted();
    if (!done.includes(id)) {
      done.push(id);
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(done));
    }
  }
  function getClaimedPacks() {
    try { return JSON.parse(localStorage.getItem(CLAIMED_PACKS_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setClaimedPacks(list) {
    localStorage.setItem(CLAIMED_PACKS_KEY, JSON.stringify(list));
  }
  function getClaimedGauntlets() {
    try { return JSON.parse(localStorage.getItem(CLAIMED_GAUNTLETS_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setClaimedGauntlets(list) {
    localStorage.setItem(CLAIMED_GAUNTLETS_KEY, JSON.stringify(list));
  }
  function getAllLevelCoins() {
    try { return JSON.parse(localStorage.getItem(LEVEL_COINS_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function getLevelCoins(levelId) {
    return getAllLevelCoins()[levelId] || [];
  }
  function setLevelCoinCollected(levelId, index) {
    const map = getAllLevelCoins();
    const arr = map[levelId] ? map[levelId].slice() : [];
    arr[index] = true;
    map[levelId] = arr;
    localStorage.setItem(LEVEL_COINS_KEY, JSON.stringify(map));
  }
  function getCoinBalance() {
    return Number(localStorage.getItem(COIN_BALANCE_KEY) || 0);
  }
  function addCoinsToBalance(n) {
    localStorage.setItem(COIN_BALANCE_KEY, String(getCoinBalance() + n));
  }
  function spendCoins(n) {
    localStorage.setItem(COIN_BALANCE_KEY, String(Math.max(0, getCoinBalance() - n)));
  }
  function updateCoinDisplays() {
    coinBalanceEl.textContent = getCoinBalance();
    collectionCoinBalanceEl.textContent = getCoinBalance();
    shopCoinBalanceEl.textContent = getCoinBalance();
    slotsCoinBalanceEl.textContent = getCoinBalance();
  }
  function getDiamondBalance() {
    return Number(localStorage.getItem(DIAMOND_BALANCE_KEY) || 0);
  }
  function addDiamondsToBalance(n) {
    localStorage.setItem(DIAMOND_BALANCE_KEY, String(getDiamondBalance() + n));
  }
  function spendDiamonds(n) {
    localStorage.setItem(DIAMOND_BALANCE_KEY, String(Math.max(0, getDiamondBalance() - n)));
  }
  function updateDiamondDisplays() {
    menuDiamondBalanceEl.textContent = getDiamondBalance();
    digDiamondBalanceEl.textContent = getDiamondBalance();
    diamondShopBalanceEl.textContent = getDiamondBalance();
    meteorDiamondBalanceEl.textContent = getDiamondBalance();
  }
  function isUnlocked(level) {
    if (level.id === 1) return true;
    return getCompleted().includes(level.id - 1);
  }
  function getBestTimes() {
    try { return JSON.parse(localStorage.getItem(BEST_TIMES_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function setBestTime(id, t) {
    const times = getBestTimes();
    times[id] = t;
    localStorage.setItem(BEST_TIMES_KEY, JSON.stringify(times));
  }
  function getCustomLevels() {
    try { return JSON.parse(localStorage.getItem(CUSTOM_LEVELS_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function setCustomLevels(list) {
    localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify(list));
  }

  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateLevelObstacles(level) {
    const rnd = mulberry32(level.seed);
    const list = [];
    let x = 500;
    let genMini = false;
    let genGravity = 'floor';
    let genPhysics = 'cube';
    let segmentEnd = 0;
    while (x < level.length - 500) {
      const gap = level.gapMin + rnd() * (level.gapMax - level.gapMin);
      x += gap;

      if (genPhysics === 'cube') {
        if (x > 1400 && x < level.length - 1800 && rnd() < 0.025) {
          genPhysics = rnd() < 0.5 ? 'ship' : 'ball';
          segmentEnd = Math.min(x + 700 + rnd() * 700, level.length - 700);
          list.push({ type: genPhysics === 'ship' ? 'shipPortal' : 'ballPortal', worldX: x - 40 });
          continue;
        }
      } else if (x >= segmentEnd) {
        list.push({ type: 'cubePortal', worldX: x - 40 });
        genPhysics = 'cube';
      }

      if (genPhysics !== 'cube') {
        const side = rnd() < 0.5 ? 'floor' : 'ceil';
        if (rnd() < 0.65) {
          list.push({ type: 'spike', worldX: x, width: 40, height: 50 + rnd() * 40, side, full: true });
        } else {
          list.push({ type: 'block', worldX: x, width: 50 + rnd() * 20, height: 60 + rnd() * 50, side, full: true });
        }
        continue;
      }

      const roll = rnd();
      const tripleC = level.tripleChance || 0;
      if (rnd() < 0.05) {
        list.push({ type: 'portal', worldX: x - 30, mini: !genMini });
        genMini = !genMini;
      }
      if (rnd() < 0.04) {
        list.push({ type: 'gravityPortal', worldX: x - 60 });
        genGravity = genGravity === 'floor' ? 'ceil' : 'floor';
      }
      const side = genGravity;
      if (roll < tripleC) {
        const h = 34 + rnd() * 8;
        list.push({ type: 'spike', worldX: x, width: 30, height: h, side });
        list.push({ type: 'spike', worldX: x + 34, width: 30, height: h, side });
        list.push({ type: 'spike', worldX: x + 68, width: 30, height: h, side });
        x += 68;
      } else if (roll < tripleC + level.doubleChance) {
        const h = 36 + rnd() * 10;
        list.push({ type: 'spike', worldX: x, width: 34, height: h, side });
        list.push({ type: 'spike', worldX: x + 40, width: 34, height: h, side });
        x += 40;
      } else if (roll < tripleC + level.doubleChance + level.blockChance) {
        if (rnd() < 0.35) {
          x += pushBlockStructure(list, x, side, (min, max) => min + rnd() * (max - min));
        } else {
          list.push({ type: 'block', worldX: x, width: 44 + rnd() * 16, height: 46 + rnd() * 26, side });
        }
      } else if (rnd() < 0.12) {
        list.push({ type: 'pad', worldX: x, width: 46, height: 14, side });
      } else {
        list.push({ type: 'spike', worldX: x, width: 40, height: 38 + rnd() * 16, side });
      }
      if (rnd() < 0.15) {
        list.push({ type: 'orb', worldX: x + 60 + rnd() * 40, height: 90 + rnd() * 50, radius: ORB_RADIUS, side });
      }
      if (rnd() < 0.06) {
        const amplitude = 40 + rnd() * 30;
        const baseY = 120 + amplitude + rnd() * Math.max(0, GROUND_Y - 240 - amplitude * 2);
        list.push({ type: 'movingSpike', worldX: x + 60 + rnd() * 40, baseY, amplitude, size: 26 });
      }
    }

    [0.22, 0.5, 0.78].forEach(frac => {
      const cx = clamp(level.length * frac + (rnd() - 0.5) * 300, 300, level.length - 300);
      list.push({ type: 'coin', worldX: cx, height: 90 + rnd() * 60, side: 'floor', radius: 14 });
    });

    return list;
  }

  let W = 0, H = 0, DPR = 1;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    GROUND_Y = H - Math.max(70, H * 0.14);
    CEIL_Y = Math.max(50, H * 0.10);
  }

  const GRAVITY = 2600;
  const JUMP_VELOCITY = -840;
  const ORB_VELOCITY = -880;
  const ORB_RADIUS = 16;
  const PAD_VELOCITY = -1080;
  const NORMAL_PLAYER_SIZE = 42;
  const MINI_PLAYER_SIZE = NORMAL_PLAYER_SIZE * 0.6;
  let PLAYER_SIZE = NORMAL_PLAYER_SIZE;
  let miniMode = false;
  let gravityDir = 1; // 1 = floor (normal), -1 = ceiling (flipped)
  const PLAYER_X = 130;

  const SHIP_GRAVITY = 1500;
  const SHIP_THRUST = -3100;
  const SHIP_MAX_VY = 560;

  let ballDir = 0; // 0 = straight, -1 = diagonal up, 1 = diagonal down

  const PLATFORMER_SPEED = 320;
  let moveLeft = false;
  let moveRight = false;

  let GROUND_Y = 0;
  let CEIL_Y = 0;

  let state = 'menu'; // menu | playing | gameover | levelcomplete | editor
  let mode = 'endless'; // endless | hardcore | ship | level
  let levelPlayMode = 'normal'; // normal | practice | timetrial
  let currentLevel = null;
  let practiceCheckpoint = null;
  let levelPhysics = 'cube'; // cube | ship | ball — active physics while mode === 'level'
  let distance = 0;
  let speed = 0;
  let levelElapsed = 0;
  let inputHeld = false;

  let editorTool = 'spike'; // spike | double | triple | block | erase
  let editorSide = 'floor'; // floor | ceil — placement side for hazard tools
  let editorScroll = 0;
  let editorHoverX = null;
  let editingCustomId = null;
  let editorTestActive = false;

  const bestScores = {
    endless: Number(localStorage.getItem(BEST_KEYS.endless) || 0),
    hardcore: Number(localStorage.getItem(BEST_KEYS.hardcore) || 0),
    ship: Number(localStorage.getItem(BEST_KEYS.ship) || 0),
    ball: Number(localStorage.getItem(BEST_KEYS.ball) || 0)
  };

  const player = { y: 0, vy: 0, onGround: true, rot: 0, squash: 0 };

  function resetPlayer() {
    miniMode = miniModeSelected;
    PLAYER_SIZE = miniModeSelected ? MINI_PLAYER_SIZE : NORMAL_PLAYER_SIZE;
    gravityDir = 1;
    player.y = GROUND_Y - PLAYER_SIZE;
    player.vy = 0;
    player.onGround = true;
    player.rot = 0;
    player.squash = 0;
  }

  function setMiniMode(mini) {
    if (miniMode === mini) return;
    miniMode = mini;
    if (gravityDir === 1) {
      const bottom = player.y + PLAYER_SIZE;
      PLAYER_SIZE = mini ? MINI_PLAYER_SIZE : NORMAL_PLAYER_SIZE;
      player.y = bottom - PLAYER_SIZE;
    } else {
      const top = player.y;
      PLAYER_SIZE = mini ? MINI_PLAYER_SIZE : NORMAL_PLAYER_SIZE;
      player.y = top;
    }
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, mini ? '#7cf9ff' : '#ff9df7'));
  }

  function setGravityDir(dir) {
    if (gravityDir === dir) return;
    gravityDir = dir;
    player.vy = 0;
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, dir === -1 ? '#39ff8a' : '#ffb347'));
  }

  let obstacles = [];
  let lastObstacleWorldX = 0;
  let spawnGravitySide = 'floor';
  let trail = [];
  let bursts = [];
  let hue = 190;

  function rand(min, max) { return min + Math.random() * (max - min); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

  function pushBlockStructure(list, x, side, randFn) {
    const steps = 3 + Math.floor(randFn(0, 3));
    const ascending = randFn(0, 1) < 0.5;
    const stepW = 38;
    let h = randFn(28, 44);
    for (let i = 0; i < steps; i++) {
      list.push({ type: 'block', worldX: x + i * stepW, width: stepW, height: h, side });
      h = Math.max(24, h + randFn(16, 26) * (ascending ? 1 : -1));
    }
    return (steps - 1) * stepW;
  }

  function spawnObstacleEndless(cfg) {
    const type = pick(['spike', 'spike', 'block', 'double', 'structure']);
    const speedFactor = speed / cfg.baseSpeed;
    const gap = rand(cfg.gapMin, cfg.gapMax) * (0.85 + speedFactor * 0.15);
    lastObstacleWorldX += gap;

    if (Math.random() < 0.05) {
      obstacles.push({ type: 'gravityPortal', worldX: lastObstacleWorldX - 30 });
      spawnGravitySide = spawnGravitySide === 'floor' ? 'ceil' : 'floor';
    }
    const side = spawnGravitySide;

    if (type === 'spike') {
      if (Math.random() < 0.12) {
        obstacles.push({ type: 'pad', worldX: lastObstacleWorldX, width: 46, height: 14, side });
      } else {
        obstacles.push({ type: 'spike', worldX: lastObstacleWorldX, width: 40, height: rand(38, 54), side });
      }
    } else if (type === 'double') {
      const h = rand(36, 46);
      obstacles.push({ type: 'spike', worldX: lastObstacleWorldX, width: 34, height: h, side });
      obstacles.push({ type: 'spike', worldX: lastObstacleWorldX + 40, width: 34, height: h, side });
      lastObstacleWorldX += 40;
    } else if (type === 'structure') {
      lastObstacleWorldX += pushBlockStructure(obstacles, lastObstacleWorldX, side, rand);
    } else {
      obstacles.push({ type: 'block', worldX: lastObstacleWorldX, width: rand(44, 60), height: rand(46, 72), side });
    }

    if (Math.random() < 0.16) {
      obstacles.push({ type: 'orb', worldX: lastObstacleWorldX + rand(70, 130), height: rand(90, 150), radius: ORB_RADIUS, side });
    }

    if (Math.random() < 0.08) {
      const amplitude = rand(40, 70);
      const baseY = rand(120 + amplitude, GROUND_Y - 120 - amplitude);
      obstacles.push({ type: 'movingSpike', worldX: lastObstacleWorldX + rand(60, 140), baseY, amplitude, size: 26 });
    }
  }

  function spawnPipeObstacle(cfg) {
    const speedFactor = speed / cfg.baseSpeed;
    const gap = rand(cfg.gapMin, cfg.gapMax) * (0.85 + speedFactor * 0.15);
    lastObstacleWorldX += gap;

    if (Math.random() < 0.25) {
      const side = Math.random() < 0.5 ? 'floor' : 'ceil';
      obstacles.push({ type: 'spike', worldX: lastObstacleWorldX, width: 40, height: rand(50, 90), side, full: true });
      return;
    }

    const gapHeight = Math.max(150, 240 - distance * 0.006);
    const margin = 50;
    const center = rand(margin + gapHeight / 2, GROUND_Y - margin - gapHeight / 2);
    obstacles.push({ type: 'pipe', worldX: lastObstacleWorldX, width: 56, topHeight: center - gapHeight / 2, bottomY: center + gapHeight / 2 });
  }

  function spawnBallObstacle(cfg) {
    const speedFactor = speed / cfg.baseSpeed;
    const gap = rand(cfg.gapMin, cfg.gapMax) * (0.85 + speedFactor * 0.15);
    lastObstacleWorldX += gap;
    const side = Math.random() < 0.5 ? 'floor' : 'ceil';
    if (Math.random() < 0.65) {
      obstacles.push({ type: 'spike', worldX: lastObstacleWorldX, width: 40, height: rand(50, 95), side, full: true });
    } else {
      obstacles.push({ type: 'block', worldX: lastObstacleWorldX, width: rand(50, 70), height: rand(60, 110), side, full: true });
    }
  }

  function hideAllScreens() {
    menuScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    levelCompleteScreen.classList.add('hidden');
    chestRevealScreen.classList.add('hidden');
    collectionScreen.classList.add('hidden');
    shopScreen.classList.add('hidden');
    digScreen.classList.add('hidden');
    diamondShopScreen.classList.add('hidden');
    slotsScreen.classList.add('hidden');
    meteorScreen.classList.add('hidden');
    minigamesScreen.classList.add('hidden');
    minigamePlayScreen.classList.add('hidden');
    editorPanel.classList.add('hidden');
  }

  function playMusic(theme) {
    if (!window.NeonAudio) return;
    NeonAudio.setTheme(theme);
    NeonAudio.init();
    NeonAudio.start();
  }

  function renderMenu() {
    menuBestEl.textContent = bestScores.endless;
    menuHardcoreBestEl.textContent = bestScores.hardcore;
    menuShipBestEl.textContent = bestScores.ship;
    menuBallBestEl.textContent = bestScores.ball;
    updateCoinDisplays();
    updateDiamondDisplays();
    levelGridEl.innerHTML = '';
    const completed = getCompleted();
    const bestTimes = getBestTimes();
    LEVELS.forEach(level => {
      const btn = document.createElement('button');
      const unlocked = isUnlocked(level);
      const done = completed.includes(level.id);
      btn.className = 'levelBtn' + (done ? ' completed' : '') + (!unlocked ? ' locked' : '');
      btn.innerHTML = String(level.id) + (done ? '<span class="starMark">&#9733;</span>' : '');
      btn.disabled = !unlocked;
      btn.title = level.name + (bestTimes[level.id] !== undefined ? ' - best ' + bestTimes[level.id].toFixed(1) + 's' : '');
      if (unlocked) btn.addEventListener('click', () => startLevel(level));
      levelGridEl.appendChild(btn);
    });
    renderLevelPacks();
    renderGauntlets();
    renderCustomLevels();
    renderChest();
    renderCollectionButton();
    renderShopButton();
    renderDiamondShopButton();
  }

  function renderChest() {
    const available = isChestAvailable();
    dailyChestBtn.disabled = !available;
    dailyChestBtn.classList.toggle('available', available);
    chestStatusEl.textContent = available ? 'TAP TO OPEN' : 'COME BACK TOMORROW';
  }

  function renderCollectionButton() {
    const unlockedCount = getUnlockedCosmetics('skin').length + getUnlockedCosmetics('ship').length + getUnlockedCosmetics('trail').length;
    const total = SKINS.length + SHIPS.length + TRAILS.length;
    collectionCountEl.textContent = unlockedCount + ' / ' + total;
  }

  function renderRarityLegend() {
    rarityLegendEl.innerHTML = '';
    Object.keys(RARITY_INFO).forEach(key => {
      const info = RARITY_INFO[key];
      const item = document.createElement('span');
      item.className = 'rarityLegendItem';
      item.style.color = info.color;
      const dot = document.createElement('span');
      dot.className = 'rarityLegendDot';
      dot.style.background = info.color;
      dot.style.boxShadow = `0 0 6px ${info.color}`;
      item.appendChild(dot);
      item.appendChild(document.createTextNode(info.label));
      rarityLegendEl.appendChild(item);
    });
  }

  let collectionTab = 'skin'; // skin | ship
  let collectionFilter = 'all'; // all | owned

  function costOf(item) {
    return item.cost != null ? item.cost : RARITY_COST[item.rarity];
  }

  function renderCollectionGrid() {
    const info = COSMETIC_CATEGORIES[collectionTab];
    const unlocked = getUnlockedCosmetics(collectionTab);
    const equipped = getEquippedCosmeticId(collectionTab);
    const balance = getCoinBalance();
    collectionProgress.textContent = unlocked.length + ' / ' + info.items.length + ' UNLOCKED';
    collectionGridEl.innerHTML = '';
    const items = collectionFilter === 'owned' ? info.items.filter(item => unlocked.includes(item.id)) : info.items;
    items.forEach(item => {
      const owned = unlocked.includes(item.id);
      const diamondOnly = item.costDiamonds != null;
      const cost = costOf(item);
      const affordable = !owned && !diamondOnly && balance >= cost;
      const sw = document.createElement('button');
      sw.className = 'collectionSwatch rarity-' + item.rarity + (owned ? '' : ' locked') + (owned && item.id === equipped ? ' equipped' : '') + (affordable ? ' buyable' : '');
      sw.style.background = `linear-gradient(135deg, ${item.c1}, ${item.c2})`;
      sw.title = owned ? (item.name + ' — ' + RARITY_INFO[item.rarity].label) : (diamondOnly ? (item.name + ' — DIAMOND SHOP EXCLUSIVE') : (item.name + ' — ' + cost + ' COINS'));
      sw.disabled = !owned && !affordable;
      if (owned) {
        sw.addEventListener('click', () => { setEquippedCosmeticId(collectionTab, item.id); renderCollectionGrid(); });
      } else if (affordable) {
        sw.addEventListener('click', () => buyCosmetic(collectionTab, item));
        const costLabel = document.createElement('span');
        costLabel.className = 'collectionSwatchCost';
        costLabel.textContent = cost;
        sw.appendChild(costLabel);
      }
      collectionGridEl.appendChild(sw);
    });
  }

  function buyCosmetic(cat, item) {
    const cost = costOf(item);
    if (getCoinBalance() < cost) return;
    spendCoins(cost);
    const unlocked = getUnlockedCosmetics(cat);
    if (!unlocked.includes(item.id)) setUnlockedCosmetics(cat, [...unlocked, item.id]);
    setEquippedCosmeticId(cat, item.id);
    updateCoinDisplays();
    renderCollectionButton();
    renderCollectionGrid();
  }

  function openCollection() {
    updateCoinDisplays();
    renderCollectionGrid();
    hideAllScreens();
    collectionScreen.classList.remove('hidden');
  }

  function renderShopButton() {
    const unlocked = getUnlockedCosmetics('skin');
    const ownedUltimate = ULTIMATE_SKINS.filter(item => unlocked.includes(item.id)).length;
    shopOwnedCountEl.textContent = ownedUltimate + ' / ' + ULTIMATE_SKINS.length;
  }

  function renderShop() {
    const unlocked = getUnlockedCosmetics('skin');
    const equipped = getEquippedCosmeticId('skin');
    const balance = getCoinBalance();
    shopGridEl.innerHTML = '';
    ULTIMATE_SKINS.forEach(item => {
      const owned = unlocked.includes(item.id);
      const cost = costOf(item);
      const affordable = !owned && balance >= cost;

      const card = document.createElement('div');
      card.className = 'shopCard';

      const canvas = document.createElement('canvas');
      canvas.width = 96;
      canvas.height = 96;
      const cctx = canvas.getContext('2d');
      cctx.save();
      cctx.translate(48, 48);
      const grad = cctx.createLinearGradient(-40, -40, 40, 40);
      grad.addColorStop(0, item.c1);
      grad.addColorStop(1, item.c2);
      cctx.fillStyle = grad;
      cctx.shadowColor = item.c1;
      cctx.shadowBlur = 14;
      const r = 10;
      cctx.beginPath();
      cctx.moveTo(-40 + r, -40);
      cctx.arcTo(40, -40, 40, 40, r);
      cctx.arcTo(40, 40, -40, 40, r);
      cctx.arcTo(-40, 40, -40, -40, r);
      cctx.arcTo(-40, -40, 40, -40, r);
      cctx.closePath();
      cctx.fill();
      cctx.strokeStyle = 'rgba(255,255,255,0.7)';
      cctx.lineWidth = 2;
      cctx.stroke();
      drawCubePattern(cctx, item.pattern, 80);
      cctx.restore();
      card.appendChild(canvas);

      const name = document.createElement('div');
      name.className = 'shopCardName';
      name.textContent = item.name + (owned ? '' : ' — ' + cost + ' COINS');
      card.appendChild(name);

      const btn = document.createElement('button');
      btn.className = 'shopCardBtn' + (owned ? ' owned' : '');
      if (owned) {
        btn.textContent = item.id === equipped ? 'EQUIPPED' : 'EQUIP';
        btn.disabled = item.id === equipped;
        if (item.id !== equipped) {
          btn.addEventListener('click', () => { setEquippedCosmeticId('skin', item.id); renderShop(); });
        }
      } else {
        btn.textContent = 'BUY';
        btn.disabled = !affordable;
        btn.addEventListener('click', () => { buyCosmetic('skin', item); renderShop(); renderShopButton(); });
      }
      card.appendChild(btn);

      shopGridEl.appendChild(card);
    });
  }

  function openShop() {
    updateCoinDisplays();
    renderShop();
    hideAllScreens();
    shopScreen.classList.remove('hidden');
  }

  const DIAMOND_ITEMS_BY_CAT = { skin: DIAMOND_SKINS, ship: DIAMOND_SHIPS, trail: DIAMOND_TRAILS };
  let diamondShopTab = 'skin'; // skin | ship | trail

  function buyDiamondCosmetic(cat, item) {
    const cost = item.costDiamonds;
    if (getDiamondBalance() < cost) return;
    spendDiamonds(cost);
    const unlocked = getUnlockedCosmetics(cat);
    if (!unlocked.includes(item.id)) setUnlockedCosmetics(cat, [...unlocked, item.id]);
    setEquippedCosmeticId(cat, item.id);
    updateDiamondDisplays();
    renderCollectionButton();
  }

  function renderDiamondShopButton() {
    let owned = 0, total = 0;
    Object.keys(DIAMOND_ITEMS_BY_CAT).forEach(cat => {
      const unlocked = getUnlockedCosmetics(cat);
      const items = DIAMOND_ITEMS_BY_CAT[cat];
      owned += items.filter(item => unlocked.includes(item.id)).length;
      total += items.length;
    });
    diamondShopOwnedCountEl.textContent = owned + ' / ' + total;
  }

  function renderDiamondShop() {
    const cat = diamondShopTab;
    const items = DIAMOND_ITEMS_BY_CAT[cat];
    const unlocked = getUnlockedCosmetics(cat);
    const equipped = getEquippedCosmeticId(cat);
    const balance = getDiamondBalance();
    diamondShopGridEl.innerHTML = '';
    items.forEach(item => {
      const owned = unlocked.includes(item.id);
      const cost = item.costDiamonds;
      const affordable = !owned && balance >= cost;

      const card = document.createElement('div');
      card.className = 'shopCard';

      const canvas = document.createElement('canvas');
      canvas.width = 96;
      canvas.height = 96;
      const cctx = canvas.getContext('2d');
      cctx.save();
      cctx.translate(48, 48);
      const grad = cctx.createLinearGradient(-40, -40, 40, 40);
      grad.addColorStop(0, item.c1);
      grad.addColorStop(1, item.c2);
      cctx.fillStyle = grad;
      cctx.shadowColor = item.c1;
      cctx.shadowBlur = 14;
      const r = 10;
      cctx.beginPath();
      cctx.moveTo(-40 + r, -40);
      cctx.arcTo(40, -40, 40, 40, r);
      cctx.arcTo(40, 40, -40, 40, r);
      cctx.arcTo(-40, 40, -40, -40, r);
      cctx.arcTo(-40, -40, 40, -40, r);
      cctx.closePath();
      cctx.fill();
      cctx.strokeStyle = 'rgba(255,255,255,0.7)';
      cctx.lineWidth = 2;
      cctx.stroke();
      if (item.pattern) drawCubePattern(cctx, item.pattern, 80);
      cctx.restore();
      card.appendChild(canvas);

      const name = document.createElement('div');
      name.className = 'shopCardName';
      name.textContent = item.name + (owned ? '' : ' — ' + cost + ' DIAMONDS');
      card.appendChild(name);

      const btn = document.createElement('button');
      btn.className = 'shopCardBtn' + (owned ? ' owned' : '');
      if (owned) {
        btn.textContent = item.id === equipped ? 'EQUIPPED' : 'EQUIP';
        btn.disabled = item.id === equipped;
        if (item.id !== equipped) {
          btn.addEventListener('click', () => { setEquippedCosmeticId(cat, item.id); renderDiamondShop(); });
        }
      } else {
        btn.textContent = 'BUY';
        btn.disabled = !affordable;
        btn.addEventListener('click', () => { buyDiamondCosmetic(cat, item); renderDiamondShop(); renderDiamondShopButton(); });
      }
      card.appendChild(btn);

      diamondShopGridEl.appendChild(card);
    });
  }

  function openDiamondShop() {
    updateDiamondDisplays();
    renderDiamondShop();
    hideAllScreens();
    diamondShopScreen.classList.remove('hidden');
  }

  const SLOT_SYMBOLS = [
    { icon: '●', color: '#9fb3c8', weight: 40, payout3: 15, payout2: 4 },
    { icon: '◆', color: '#4ff2ff', weight: 25, payout3: 25, payout2: 6 },
    { icon: '★', color: '#ffe14f', weight: 15, payout3: 40, payout2: 10 },
    { icon: '⚡', color: '#ff3df0', weight: 10, payout3: 60, payout2: 15 },
    { icon: '✦', color: '#39ff8a', weight: 5, payout3: 120, payout2: 25 }
  ];
  const SPIN_COOLDOWN = 2500;
  let lastSpinTime = 0;
  let spinCooldownInterval = null;

  function pickSlotSymbol() {
    const total = SLOT_SYMBOLS.reduce((s, sym) => s + sym.weight, 0);
    let roll = Math.random() * total;
    for (const sym of SLOT_SYMBOLS) {
      roll -= sym.weight;
      if (roll <= 0) return sym;
    }
    return SLOT_SYMBOLS[0];
  }

  function updateSlotSpinBtn() {
    const remaining = SPIN_COOLDOWN - (Date.now() - lastSpinTime);
    if (remaining > 0) {
      slotsSpinBtn.disabled = true;
      slotsSpinBtn.textContent = 'SPIN (' + Math.ceil(remaining / 1000) + 's)';
    } else {
      slotsSpinBtn.disabled = false;
      slotsSpinBtn.textContent = 'SPIN';
    }
  }

  function settleSlotSpin(results) {
    let payout = 1;
    let message = 'NO MATCH — +1 COIN';
    if (results[0].icon === results[1].icon && results[1].icon === results[2].icon) {
      payout = results[0].payout3;
      message = 'JACKPOT! +' + payout + ' COINS';
    } else if (results[0].icon === results[1].icon || results[1].icon === results[2].icon || results[0].icon === results[2].icon) {
      const matched = results[0].icon === results[1].icon ? results[0] : (results[1].icon === results[2].icon ? results[1] : results[0]);
      payout = matched.payout2;
      message = 'MATCH! +' + payout + ' COINS';
    }
    addCoinsToBalance(payout);
    updateCoinDisplays();
    slotsResultEl.textContent = message;
    updateSlotSpinBtn();
  }

  function spinSlots() {
    if (Date.now() - lastSpinTime < SPIN_COOLDOWN) return;
    lastSpinTime = Date.now();
    updateSlotSpinBtn();
    const results = [pickSlotSymbol(), pickSlotSymbol(), pickSlotSymbol()];
    slotReelEls.forEach(el => el.classList.add('spinning'));
    slotsResultEl.textContent = '';
    setTimeout(() => {
      results.forEach((sym, i) => {
        slotReelEls[i].textContent = sym.icon;
        slotReelEls[i].style.color = sym.color;
        slotReelEls[i].classList.remove('spinning');
      });
      settleSlotSpin(results);
    }, 500);
  }

  function openSlots() {
    updateCoinDisplays();
    slotsResultEl.textContent = '';
    slotReelEls.forEach(el => { el.textContent = '?'; el.style.color = ''; });
    updateSlotSpinBtn();
    hideAllScreens();
    slotsScreen.classList.remove('hidden');
    if (spinCooldownInterval) clearInterval(spinCooldownInterval);
    spinCooldownInterval = setInterval(updateSlotSpinBtn, 300);
  }

  function closeSlots() {
    if (spinCooldownInterval) {
      clearInterval(spinCooldownInterval);
      spinCooldownInterval = null;
    }
    goToMenu();
  }

  const METEOR_ROUND_DURATION = 20;
  let meteorState = null;
  let meteorCtx = null;

  function meteorRandomLoot() {
    const r = Math.random();
    if (r < 0.65) return { value: 1 + Math.floor(Math.random() * 2), radius: 20, color: '#7cf9ff' };
    if (r < 0.9) return { value: 3 + Math.floor(Math.random() * 3), radius: 15, color: '#4ff2ff' };
    return { value: 8 + Math.floor(Math.random() * 7), radius: 10, color: '#ffe14f' };
  }

  function spawnMeteor() {
    const loot = meteorRandomLoot();
    const x = loot.radius + Math.random() * (meteorCanvas.width - loot.radius * 2);
    meteorState.meteors.push({ x, y: -loot.radius, radius: loot.radius, value: loot.value, color: loot.color, vy: 80 + Math.random() * 60 });
  }

  function drawMeteors() {
    meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);
    meteorState.meteors.forEach(m => {
      meteorCtx.save();
      meteorCtx.shadowColor = m.color;
      meteorCtx.shadowBlur = 16;
      const grad = meteorCtx.createRadialGradient(m.x, m.y, 2, m.x, m.y, m.radius);
      grad.addColorStop(0, '#fff8d0');
      grad.addColorStop(1, m.color);
      meteorCtx.fillStyle = grad;
      meteorCtx.beginPath();
      meteorCtx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      meteorCtx.fill();
      meteorCtx.strokeStyle = 'rgba(255,255,255,0.6)';
      meteorCtx.lineWidth = 1.5;
      meteorCtx.stroke();
      meteorCtx.restore();
    });
  }

  function meteorLoop(now) {
    if (!meteorState || !meteorState.running) return;
    const dt = Math.min(0.05, (now - meteorState.lastTime) / 1000);
    meteorState.lastTime = now;
    meteorState.elapsed += dt;
    meteorState.spawnTimer -= dt;
    if (meteorState.spawnTimer <= 0 && meteorState.elapsed < METEOR_ROUND_DURATION) {
      spawnMeteor();
      meteorState.spawnTimer = 0.5 + Math.random() * 0.3;
    }

    meteorState.meteors.forEach(m => { m.y += m.vy * dt; });
    meteorState.meteors = meteorState.meteors.filter(m => m.y - m.radius < meteorCanvas.height);

    drawMeteors();

    const remaining = Math.max(0, METEOR_ROUND_DURATION - meteorState.elapsed);
    meteorTimerEl.textContent = Math.ceil(remaining);

    if (meteorState.elapsed >= METEOR_ROUND_DURATION && meteorState.meteors.length === 0) {
      endMeteorRound();
      return;
    }
    meteorState.rafId = requestAnimationFrame(meteorLoop);
  }

  function handleMeteorClick(e) {
    if (!meteorState || !meteorState.running) return;
    const rect = meteorCanvas.getBoundingClientRect();
    const scaleX = meteorCanvas.width / rect.width;
    const scaleY = meteorCanvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top) * scaleY;
    for (let i = meteorState.meteors.length - 1; i >= 0; i--) {
      const m = meteorState.meteors[i];
      const dx = cx - m.x, dy = cy - m.y;
      if (dx * dx + dy * dy <= (m.radius + 8) * (m.radius + 8)) {
        addDiamondsToBalance(m.value);
        updateDiamondDisplays();
        meteorState.meteors.splice(i, 1);
        break;
      }
    }
  }

  function startMeteorRound() {
    meteorState = { meteors: [], spawnTimer: 0, elapsed: 0, running: true, lastTime: performance.now(), rafId: null };
    meteorPlayBtn.disabled = true;
    meteorPlayBtn.textContent = 'PLAYING...';
    meteorHintEl.textContent = 'CLICK THE FALLING GEMS';
    meteorState.rafId = requestAnimationFrame(meteorLoop);
  }

  function endMeteorRound() {
    if (meteorState) {
      meteorState.running = false;
      if (meteorState.rafId) cancelAnimationFrame(meteorState.rafId);
    }
    if (meteorCtx) meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);
    meteorTimerEl.textContent = METEOR_ROUND_DURATION;
    meteorPlayBtn.disabled = false;
    meteorPlayBtn.textContent = 'PLAY AGAIN';
    meteorHintEl.textContent = 'ROUND OVER — PRESS PLAY TO GO AGAIN';
  }

  function openMeteorCatch() {
    updateDiamondDisplays();
    if (!meteorCtx) meteorCtx = meteorCanvas.getContext('2d');
    meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);
    meteorTimerEl.textContent = METEOR_ROUND_DURATION;
    meteorPlayBtn.disabled = false;
    meteorPlayBtn.textContent = 'PLAY';
    meteorHintEl.textContent = 'CLICK THE FALLING GEMS';
    hideAllScreens();
    meteorScreen.classList.remove('hidden');
  }

  function closeMeteorCatch() {
    if (meteorState) {
      meteorState.running = false;
      if (meteorState.rafId) cancelAnimationFrame(meteorState.rafId);
      meteorState = null;
    }
    goToMenu();
  }

  const MG_COLORS = ['#4ff2ff', '#ff3df0', '#ffe14f', '#39ff8a', '#ff8a00', '#8b5cf6', '#7cf9ff'];

  const MINIGAMES = [
    { id: 'mg-treasurechest', name: 'TREASURE CHEST', engine: 'pick', currency: 'coin', tileCount: 9, mult: 1.0 },
    { id: 'mg-gemvault', name: 'GEM VAULT', engine: 'pick', currency: 'diamond', tileCount: 9, mult: 0.8 },
    { id: 'mg-lootcrate', name: 'LOOT CRATE', engine: 'pick', currency: 'coin', tileCount: 12, mult: 1.1 },
    { id: 'mg-crystalcave', name: 'CRYSTAL CAVE', engine: 'pick', currency: 'diamond', tileCount: 12, mult: 0.9 },
    { id: 'mg-mysterybox', name: 'MYSTERY BOX', engine: 'pick', currency: 'coin', tileCount: 16, mult: 1.2 },
    { id: 'mg-icevault', name: 'ICE VAULT', engine: 'pick', currency: 'diamond', tileCount: 16, mult: 1.0 },
    { id: 'mg-goldvault', name: 'GOLD VAULT', engine: 'pick', currency: 'coin', tileCount: 9, mult: 1.3 },
    { id: 'mg-sunkenchest', name: 'SUNKEN CHEST', engine: 'pick', currency: 'diamond', tileCount: 9, mult: 1.1 },
    { id: 'mg-luckydig', name: 'LUCKY DIG', engine: 'pick', currency: 'coin', tileCount: 12, mult: 1.4 },
    { id: 'mg-ancientruins', name: 'ANCIENT RUINS', engine: 'pick', currency: 'diamond', tileCount: 12, mult: 1.2 },
    { id: 'mg-buriedhoard', name: 'BURIED HOARD', engine: 'pick', currency: 'coin', tileCount: 16, mult: 1.5 },
    { id: 'mg-sanddunes', name: 'SAND DUNES', engine: 'pick', currency: 'diamond', tileCount: 16, mult: 1.3 },

    { id: 'mg-starcatcher', name: 'STAR CATCHER', engine: 'catch', currency: 'coin', duration: 15, mult: 1.0 },
    { id: 'mg-gemshower', name: 'GEM SHOWER', engine: 'catch', currency: 'diamond', duration: 15, mult: 0.8 },
    { id: 'mg-coinrain', name: 'COIN RAIN', engine: 'catch', currency: 'coin', duration: 18, mult: 1.1 },
    { id: 'mg-fallingfortune', name: 'FALLING FORTUNE', engine: 'catch', currency: 'diamond', duration: 18, mult: 0.9 },
    { id: 'mg-skyharvest', name: 'SKY HARVEST', engine: 'catch', currency: 'coin', duration: 20, mult: 1.2 },
    { id: 'mg-orbdrop', name: 'ORB DROP', engine: 'catch', currency: 'diamond', duration: 20, mult: 1.0 },
    { id: 'mg-lootstorm', name: 'LOOT STORM', engine: 'catch', currency: 'coin', duration: 15, mult: 1.3 },
    { id: 'mg-cometrush', name: 'COMET RUSH', engine: 'catch', currency: 'diamond', duration: 15, mult: 1.1 },
    { id: 'mg-rainofriches', name: 'RAIN OF RICHES', engine: 'catch', currency: 'coin', duration: 18, mult: 1.4 },
    { id: 'mg-stardustcatch', name: 'STARDUST CATCH', engine: 'catch', currency: 'diamond', duration: 18, mult: 1.2 },
    { id: 'mg-novadrop', name: 'NOVA DROP', engine: 'catch', currency: 'coin', duration: 20, mult: 1.5 },
    { id: 'mg-asteroidhaul', name: 'ASTEROID HAUL', engine: 'catch', currency: 'diamond', duration: 20, mult: 1.3 },

    { id: 'mg-memoryvault', name: 'MEMORY VAULT', engine: 'pattern', currency: 'coin', gridSize: 4, rewardPerStep: 3 },
    { id: 'mg-sequencelock', name: 'SEQUENCE LOCK', engine: 'pattern', currency: 'diamond', gridSize: 4, rewardPerStep: 2 },
    { id: 'mg-circuithack', name: 'CIRCUIT HACK', engine: 'pattern', currency: 'coin', gridSize: 6, rewardPerStep: 4 },
    { id: 'mg-patternpuzzle', name: 'PATTERN PUZZLE', engine: 'pattern', currency: 'diamond', gridSize: 6, rewardPerStep: 3 },
    { id: 'mg-codebreaker', name: 'CODE BREAKER', engine: 'pattern', currency: 'coin', gridSize: 9, rewardPerStep: 5 },
    { id: 'mg-signaltrace', name: 'SIGNAL TRACE', engine: 'pattern', currency: 'diamond', gridSize: 9, rewardPerStep: 4 },
    { id: 'mg-neonsimon', name: 'NEON SIMON', engine: 'pattern', currency: 'coin', gridSize: 4, rewardPerStep: 4 },
    { id: 'mg-gridrecall', name: 'GRID RECALL', engine: 'pattern', currency: 'diamond', gridSize: 4, rewardPerStep: 3 },
    { id: 'mg-echochain', name: 'ECHO CHAIN', engine: 'pattern', currency: 'coin', gridSize: 6, rewardPerStep: 5 },
    { id: 'mg-mindcircuit', name: 'MIND CIRCUIT', engine: 'pattern', currency: 'diamond', gridSize: 6, rewardPerStep: 4 },
    { id: 'mg-syncpuzzle', name: 'SYNC PUZZLE', engine: 'pattern', currency: 'coin', gridSize: 9, rewardPerStep: 6 }
  ];

  const MG_ACTION_COOLDOWN = 4000;
  const mgLastActionTime = {};
  let mgActive = null; // currently open MINIGAMES entry
  let mgCooldownInterval = null;
  let mgCatchState = null;
  let mgCatchCtx = null;
  let mgPatternState = null;

  function mgAddReward(config, amount) {
    if (config.currency === 'diamond') { addDiamondsToBalance(amount); updateDiamondDisplays(); }
    else { addCoinsToBalance(amount); updateCoinDisplays(); }
  }

  function mgCurrencyLabel(config) {
    return config.currency === 'diamond' ? 'DIAMONDS' : 'COINS';
  }

  function renderMinigamesGrid() {
    minigamesGridEl.innerHTML = '';
    MINIGAMES.forEach((mg, i) => {
      const color = MG_COLORS[i % MG_COLORS.length];
      const tile = document.createElement('button');
      tile.className = 'minigameTile';
      tile.style.setProperty('--mg-color', color);
      const name = document.createElement('span');
      name.className = 'minigameTileName';
      name.textContent = mg.name;
      const meta = document.createElement('span');
      meta.className = 'minigameTileMeta';
      meta.innerHTML = (mg.currency === 'diamond' ? '<span class="diamondIcon"></span>' : '<span class="coinIcon"></span>') + mgCurrencyLabel(mg);
      tile.appendChild(name);
      tile.appendChild(meta);
      tile.addEventListener('click', () => openMinigame(mg));
      minigamesGridEl.appendChild(tile);
    });
  }

  function openMinigamesHub() {
    renderMinigamesGrid();
    hideAllScreens();
    minigamesScreen.classList.remove('hidden');
  }

  function mgUpdateActionBtn() {
    if (!mgActive) return;
    const last = mgLastActionTime[mgActive.id] || 0;
    const remaining = MG_ACTION_COOLDOWN - (Date.now() - last);
    if (remaining > 0) {
      minigamePlayActionBtn.disabled = true;
      minigamePlayActionBtn.textContent = 'PLAY (' + Math.ceil(remaining / 1000) + 's)';
    } else {
      minigamePlayActionBtn.disabled = false;
      minigamePlayActionBtn.textContent = mgActive.engine === 'pick' ? 'NEW GRID' : 'PLAY';
    }
  }

  function openMinigame(config) {
    mgActive = config;
    minigamePlayTitleEl.textContent = config.name;
    minigamePlayTitleEl.style.color = config.currency === 'diamond' ? '#7cf9ff' : '#ffc72c';
    minigamePlayResultEl.textContent = '';
    minigamePlayCoinRow.classList.toggle('hidden', config.currency !== 'coin');
    minigamePlayDiamondRow.classList.toggle('hidden', config.currency !== 'diamond');
    updateCoinDisplays();
    updateDiamondDisplays();
    minigameAreaEl.innerHTML = '';
    minigameAreaEl.style.setProperty('--mg-color', MG_COLORS[MINIGAMES.indexOf(config) % MG_COLORS.length]);

    if (config.engine === 'pick') {
      minigamePlayHintEl.textContent = 'CLICK A TILE TO REVEAL A PRIZE';
      mgBuildPickGrid(config, true);
    } else if (config.engine === 'catch') {
      minigamePlayHintEl.textContent = 'CLICK THE FALLING ORBS';
      mgBuildCatchArea(config);
    } else if (config.engine === 'pattern') {
      minigamePlayHintEl.textContent = 'WATCH THE PATTERN, THEN REPEAT IT';
      mgBuildPatternGrid(config);
    }

    mgUpdateActionBtn();
    hideAllScreens();
    minigamePlayScreen.classList.remove('hidden');
    if (mgCooldownInterval) clearInterval(mgCooldownInterval);
    mgCooldownInterval = setInterval(mgUpdateActionBtn, 400);
  }

  function closeMinigame() {
    if (mgCooldownInterval) { clearInterval(mgCooldownInterval); mgCooldownInterval = null; }
    if (mgCatchState) { mgCatchState.running = false; if (mgCatchState.rafId) cancelAnimationFrame(mgCatchState.rafId); mgCatchState = null; }
    mgPatternState = null;
    mgActive = null;
    openMinigamesHub();
  }

  // --- Pick engine ---
  function mgRollPickValue(mult) {
    const r = Math.random();
    let v;
    if (r < 0.6) v = 1 + Math.floor(Math.random() * 2);
    else if (r < 0.85) v = 3 + Math.floor(Math.random() * 3);
    else if (r < 0.97) v = 6 + Math.floor(Math.random() * 5);
    else v = 20 + Math.floor(Math.random() * 16);
    return Math.max(1, Math.round(v * mult));
  }

  function mgBuildPickGrid(config) {
    const cols = Math.round(Math.sqrt(config.tileCount));
    const grid = document.createElement('div');
    grid.className = 'mgPickGrid';
    grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    for (let i = 0; i < config.tileCount; i++) {
      const value = mgRollPickValue(config.mult);
      const btn = document.createElement('button');
      btn.className = 'mgPickTile';
      btn.textContent = '?';
      btn.addEventListener('click', () => {
        if (btn.classList.contains('dug')) return;
        btn.classList.add('dug');
        btn.textContent = '+' + value;
        mgAddReward(config, value);
      });
      grid.appendChild(btn);
    }
    minigameAreaEl.appendChild(grid);
  }

  // --- Catch engine ---
  function mgCatchRandomLoot(mult) {
    const r = Math.random();
    let base;
    if (r < 0.65) base = { value: 1 + Math.floor(Math.random() * 2), radius: 20 };
    else if (r < 0.9) base = { value: 3 + Math.floor(Math.random() * 3), radius: 15 };
    else base = { value: 8 + Math.floor(Math.random() * 7), radius: 10 };
    return { value: Math.max(1, Math.round(base.value * mult)), radius: base.radius };
  }

  function mgBuildCatchArea(config) {
    const wrap = document.createElement('div');
    wrap.className = 'mgCatchWrap';
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 340;
    const timerEl = document.createElement('div');
    timerEl.className = 'mgCatchTimer';
    timerEl.textContent = config.duration;
    wrap.appendChild(canvas);
    wrap.appendChild(timerEl);
    minigameAreaEl.appendChild(wrap);

    mgCatchCtx = canvas.getContext('2d');
    canvas.addEventListener('click', (e) => mgHandleCatchClick(e, canvas));

    mgCatchState = { meteors: [], spawnTimer: 0, elapsed: 0, running: false, lastTime: 0, rafId: null, canvas, timerEl, config };
  }

  function mgCatchSpawn() {
    const s = mgCatchState;
    const loot = mgCatchRandomLoot(s.config.mult);
    const x = loot.radius + Math.random() * (s.canvas.width - loot.radius * 2);
    s.meteors.push({ x, y: -loot.radius, radius: loot.radius, value: loot.value, vy: 80 + Math.random() * 60 });
  }

  function mgCatchDraw() {
    const s = mgCatchState;
    const color = MG_COLORS[MINIGAMES.indexOf(s.config) % MG_COLORS.length];
    mgCatchCtx.clearRect(0, 0, s.canvas.width, s.canvas.height);
    s.meteors.forEach(m => {
      mgCatchCtx.save();
      mgCatchCtx.shadowColor = color;
      mgCatchCtx.shadowBlur = 16;
      const grad = mgCatchCtx.createRadialGradient(m.x, m.y, 2, m.x, m.y, m.radius);
      grad.addColorStop(0, '#fff8d0');
      grad.addColorStop(1, color);
      mgCatchCtx.fillStyle = grad;
      mgCatchCtx.beginPath();
      mgCatchCtx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      mgCatchCtx.fill();
      mgCatchCtx.strokeStyle = 'rgba(255,255,255,0.6)';
      mgCatchCtx.lineWidth = 1.5;
      mgCatchCtx.stroke();
      mgCatchCtx.restore();
    });
  }

  function mgCatchLoop(now) {
    const s = mgCatchState;
    if (!s || !s.running) return;
    const dt = Math.min(0.05, (now - s.lastTime) / 1000);
    s.lastTime = now;
    s.elapsed += dt;
    s.spawnTimer -= dt;
    if (s.spawnTimer <= 0 && s.elapsed < s.config.duration) {
      mgCatchSpawn();
      s.spawnTimer = 0.5 + Math.random() * 0.3;
    }
    s.meteors.forEach(m => { m.y += m.vy * dt; });
    s.meteors = s.meteors.filter(m => m.y - m.radius < s.canvas.height);
    mgCatchDraw();
    const remaining = Math.max(0, s.config.duration - s.elapsed);
    s.timerEl.textContent = Math.ceil(remaining);
    if (s.elapsed >= s.config.duration && s.meteors.length === 0) {
      s.running = false;
      minigamePlayResultEl.textContent = 'ROUND OVER';
      mgUpdateActionBtn();
      return;
    }
    s.rafId = requestAnimationFrame(mgCatchLoop);
  }

  function mgHandleCatchClick(e, canvas) {
    const s = mgCatchState;
    if (!s || !s.running) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top) * scaleY;
    for (let i = s.meteors.length - 1; i >= 0; i--) {
      const m = s.meteors[i];
      const dx = cx - m.x, dy = cy - m.y;
      if (dx * dx + dy * dy <= (m.radius + 8) * (m.radius + 8)) {
        mgAddReward(s.config, m.value);
        s.meteors.splice(i, 1);
        break;
      }
    }
  }

  function mgStartCatch() {
    if (!mgCatchState) return;
    mgCatchState.meteors = [];
    mgCatchState.spawnTimer = 0;
    mgCatchState.elapsed = 0;
    mgCatchState.running = true;
    mgCatchState.lastTime = performance.now();
    minigamePlayResultEl.textContent = '';
    mgCatchState.rafId = requestAnimationFrame(mgCatchLoop);
  }

  // --- Pattern engine ---
  function mgBuildPatternGrid(config) {
    const cols = Math.round(Math.sqrt(config.gridSize));
    const grid = document.createElement('div');
    grid.className = 'mgPatternGrid';
    grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    const tiles = [];
    for (let i = 0; i < config.gridSize; i++) {
      const btn = document.createElement('button');
      btn.className = 'mgPatternTile';
      btn.addEventListener('click', () => mgHandlePatternClick(i));
      grid.appendChild(btn);
      tiles.push(btn);
    }
    minigameAreaEl.appendChild(grid);
    mgPatternState = { config, tiles, sequence: [], playerIndex: 0, round: 0, accepting: false };
  }

  function mgFlashTile(tiles, idx, duration) {
    return new Promise(resolve => {
      tiles[idx].classList.add('lit');
      setTimeout(() => {
        tiles[idx].classList.remove('lit');
        setTimeout(resolve, 150);
      }, duration);
    });
  }

  async function mgPlaySequence() {
    const s = mgPatternState;
    s.accepting = false;
    for (const idx of s.sequence) {
      await mgFlashTile(s.tiles, idx, 450);
    }
    s.accepting = true;
    s.playerIndex = 0;
  }

  function mgStartPattern() {
    const s = mgPatternState;
    if (!s) return;
    s.sequence = [Math.floor(Math.random() * s.tiles.length)];
    s.round = 1;
    minigamePlayResultEl.textContent = '';
    mgPlaySequence();
  }

  function mgHandlePatternClick(idx) {
    const s = mgPatternState;
    if (!s || !s.accepting) return;
    if (idx === s.sequence[s.playerIndex]) {
      s.tiles[idx].classList.add('lit');
      setTimeout(() => s.tiles[idx].classList.remove('lit'), 150);
      s.playerIndex++;
      if (s.playerIndex >= s.sequence.length) {
        const reward = s.round * s.config.rewardPerStep;
        mgAddReward(s.config, reward);
        minigamePlayResultEl.textContent = 'ROUND ' + s.round + ' CLEARED! +' + reward + ' ' + mgCurrencyLabel(s.config);
        s.round++;
        s.sequence.push(Math.floor(Math.random() * s.tiles.length));
        s.accepting = false;
        setTimeout(() => mgPlaySequence(), 700);
      }
    } else {
      s.accepting = false;
      minigamePlayResultEl.textContent = 'WRONG TILE — REACHED ROUND ' + s.round;
      mgUpdateActionBtn();
    }
  }

  function mgHandleAction() {
    if (!mgActive) return;
    const last = mgLastActionTime[mgActive.id] || 0;
    if (Date.now() - last < MG_ACTION_COOLDOWN) return;
    mgLastActionTime[mgActive.id] = Date.now();
    mgUpdateActionBtn();
    if (mgActive.engine === 'pick') {
      minigameAreaEl.innerHTML = '';
      minigamePlayResultEl.textContent = '';
      mgBuildPickGrid(mgActive);
    } else if (mgActive.engine === 'catch') {
      mgStartCatch();
    } else if (mgActive.engine === 'pattern') {
      mgStartPattern();
    }
  }

  const DIG_TILE_COUNT = 24;
  const DIG_PATCH_COOLDOWN = 4000;
  let digTiles = [];
  let lastDigPatchTime = 0;
  let digCooldownInterval = null;

  function rollDigValue() {
    const r = Math.random();
    if (r < 0.6) return 1 + Math.floor(Math.random() * 2);
    if (r < 0.85) return 3 + Math.floor(Math.random() * 3);
    if (r < 0.97) return 6 + Math.floor(Math.random() * 5);
    return 20 + Math.floor(Math.random() * 16);
  }

  function generateDigPatch() {
    digTiles = [];
    for (let i = 0; i < DIG_TILE_COUNT; i++) {
      digTiles.push({ value: rollDigValue(), dug: false });
    }
    lastDigPatchTime = Date.now();
  }

  function renderDigGrid() {
    digGridEl.innerHTML = '';
    digTiles.forEach((tile, idx) => {
      const btn = document.createElement('button');
      btn.className = 'digTile' + (tile.dug ? ' dug' : '') + (tile.dug && tile.value >= 20 ? ' jackpot' : '');
      btn.textContent = tile.dug ? '+' + tile.value : '?';
      btn.disabled = tile.dug;
      if (!tile.dug) btn.addEventListener('click', () => digAt(idx));
      digGridEl.appendChild(btn);
    });
  }

  function digAt(idx) {
    const tile = digTiles[idx];
    if (!tile || tile.dug) return;
    tile.dug = true;
    addDiamondsToBalance(tile.value);
    updateDiamondDisplays();
    renderDigGrid();
  }

  function updateDigNewPatchBtn() {
    const remaining = DIG_PATCH_COOLDOWN - (Date.now() - lastDigPatchTime);
    if (remaining > 0) {
      digNewPatchBtn.disabled = true;
      digNewPatchBtn.textContent = 'NEW PATCH (' + Math.ceil(remaining / 1000) + 's)';
    } else {
      digNewPatchBtn.disabled = false;
      digNewPatchBtn.textContent = 'NEW PATCH';
    }
  }

  function requestNewDigPatch() {
    if (Date.now() - lastDigPatchTime < DIG_PATCH_COOLDOWN) return;
    generateDigPatch();
    renderDigGrid();
    updateDigNewPatchBtn();
  }

  function openDigScreen() {
    updateDiamondDisplays();
    if (!digTiles.length) generateDigPatch();
    renderDigGrid();
    updateDigNewPatchBtn();
    hideAllScreens();
    digScreen.classList.remove('hidden');
    if (digCooldownInterval) clearInterval(digCooldownInterval);
    digCooldownInterval = setInterval(updateDigNewPatchBtn, 500);
  }

  function closeDigScreen() {
    if (digCooldownInterval) {
      clearInterval(digCooldownInterval);
      digCooldownInterval = null;
    }
    goToMenu();
  }

  function renderLevelPacks() {
    levelPackListEl.innerHTML = '';
    const completed = getCompleted();
    const claimed = getClaimedPacks();
    LEVEL_PACKS.forEach(pack => {
      const doneCount = pack.levelIds.filter(id => completed.includes(id)).length;
      const isClaimed = claimed.includes(pack.id);
      const isReady = doneCount === pack.levelIds.length;

      const row = document.createElement('div');
      row.className = 'customLevelRow';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'customLevelName';
      nameSpan.textContent = pack.name + ' (' + doneCount + '/' + pack.levelIds.length + ')';
      row.appendChild(nameSpan);

      const btn = document.createElement('button');
      btn.className = 'menuBtnSmall tiny';
      if (isClaimed) {
        btn.textContent = 'CLAIMED';
        btn.disabled = true;
      } else if (isReady) {
        btn.textContent = 'CLAIM REWARD';
        btn.addEventListener('click', () => claimPackReward(pack));
      } else {
        btn.textContent = 'LOCKED';
        btn.disabled = true;
      }
      row.appendChild(btn);

      levelPackListEl.appendChild(row);
    });
  }

  function claimPackReward(pack) {
    const claimed = getClaimedPacks();
    if (claimed.includes(pack.id)) return;
    const completedIds = getCompleted();
    if (!pack.levelIds.every(id => completedIds.includes(id))) return;

    const cat = Math.random() < 0.5 ? 'skin' : 'ship';
    const info = COSMETIC_CATEGORIES[cat];
    const eligible = info.items.filter(s => s.rarity !== 'ultimate' && s.rarity !== 'mythic');
    const unlocked = getUnlockedCosmetics(cat);
    const lockedAll = eligible.filter(s => !unlocked.includes(s.id) && s.rarity !== 'common');
    const lockedAny = lockedAll.length ? lockedAll : eligible.filter(s => !unlocked.includes(s.id));
    const won = pick(lockedAny.length ? lockedAny : eligible);
    const isNew = !unlocked.includes(won.id);
    if (isNew) {
      setUnlockedCosmetics(cat, [...unlocked, won.id]);
      setEquippedCosmeticId(cat, won.id);
    }

    claimed.push(pack.id);
    setClaimedPacks(claimed);

    const rarityInfo = RARITY_INFO[won.rarity];
    chestRevealTitle.textContent = 'PACK COMPLETE';
    chestRevealSwatch.style.background = `linear-gradient(135deg, ${won.c1}, ${won.c2})`;
    chestRevealSwatch.style.borderColor = rarityInfo.color;
    chestRevealSwatch.style.boxShadow = `0 0 30px ${rarityInfo.color}`;
    chestRevealName.textContent = won.name;
    chestRevealName.style.color = rarityInfo.color;
    chestRevealSub.textContent = rarityInfo.label + ' ' + info.label + ' — ' + (isNew ? 'NEW ' + info.label + ' UNLOCKED & EQUIPPED' : 'DUPLICATE, ALREADY OWNED');
    renderCollectionButton();
    hideAllScreens();
    chestRevealScreen.classList.remove('hidden');
  }

  function renderGauntlets() {
    gauntletListEl.innerHTML = '';
    const completed = getCompleted();
    const claimed = getClaimedGauntlets();
    GAUNTLETS.forEach(gauntlet => {
      const doneCount = gauntlet.levelIds.filter(id => completed.includes(id)).length;
      const isClaimed = claimed.includes(gauntlet.id);
      const isReady = doneCount === gauntlet.levelIds.length;

      const row = document.createElement('div');
      row.className = 'customLevelRow gauntletRow';
      row.style.borderLeftColor = gauntlet.color;

      const nameSpan = document.createElement('span');
      nameSpan.className = 'customLevelName gauntletName';
      nameSpan.style.color = gauntlet.color;
      nameSpan.textContent = gauntlet.name + ' (' + doneCount + '/' + gauntlet.levelIds.length + ')';
      row.appendChild(nameSpan);

      const btn = document.createElement('button');
      btn.className = 'menuBtnSmall tiny';
      if (isClaimed) {
        btn.textContent = 'CLAIMED';
        btn.disabled = true;
      } else if (isReady) {
        btn.textContent = '+' + gauntlet.diamondReward + ' DIAMONDS';
        btn.addEventListener('click', () => claimGauntletReward(gauntlet));
      } else {
        btn.textContent = 'LOCKED';
        btn.disabled = true;
      }
      row.appendChild(btn);

      gauntletListEl.appendChild(row);
    });
  }

  function claimGauntletReward(gauntlet) {
    const claimed = getClaimedGauntlets();
    if (claimed.includes(gauntlet.id)) return;
    const completedIds = getCompleted();
    if (!gauntlet.levelIds.every(id => completedIds.includes(id))) return;

    addDiamondsToBalance(gauntlet.diamondReward);
    claimed.push(gauntlet.id);
    setClaimedGauntlets(claimed);

    chestRevealTitle.textContent = 'GAUNTLET CLEARED';
    chestRevealSwatch.style.background = gauntlet.color;
    chestRevealSwatch.style.borderColor = gauntlet.color;
    chestRevealSwatch.style.boxShadow = `0 0 30px ${gauntlet.color}`;
    chestRevealName.textContent = gauntlet.name;
    chestRevealName.style.color = gauntlet.color;
    chestRevealSub.textContent = '+' + gauntlet.diamondReward + ' DIAMONDS';
    updateDiamondDisplays();
    renderGauntlets();
    hideAllScreens();
    chestRevealScreen.classList.remove('hidden');
  }

  function openChest() {
    if (!isChestAvailable()) return;
    localStorage.setItem(LAST_CHEST_KEY, todayStr());
    chestRevealTitle.textContent = 'CHEST OPENED';
    const cat = Math.random() < 0.5 ? 'skin' : 'ship';
    const info = COSMETIC_CATEGORIES[cat];
    const eligible = info.items.filter(s => s.rarity !== 'ultimate' && s.rarity !== 'mythic');
    const unlocked = getUnlockedCosmetics(cat);
    const lockedAll = eligible.filter(s => !unlocked.includes(s.id));
    let pool = eligible;
    if (lockedAll.length) {
      const rarity = rollRarity();
      const byRarity = lockedAll.filter(s => s.rarity === rarity);
      pool = byRarity.length ? byRarity : lockedAll;
    }
    const won = pick(pool);
    const isNew = !unlocked.includes(won.id);
    if (isNew) {
      setUnlockedCosmetics(cat, [...unlocked, won.id]);
      setEquippedCosmeticId(cat, won.id);
    }
    const rarityInfo = RARITY_INFO[won.rarity];
    chestRevealSwatch.style.background = `linear-gradient(135deg, ${won.c1}, ${won.c2})`;
    chestRevealSwatch.style.borderColor = rarityInfo.color;
    chestRevealSwatch.style.boxShadow = `0 0 30px ${rarityInfo.color}`;
    chestRevealName.textContent = won.name;
    chestRevealName.style.color = rarityInfo.color;
    chestRevealSub.textContent = rarityInfo.label + ' ' + info.label + ' — ' + (isNew ? 'NEW ' + info.label + ' UNLOCKED & EQUIPPED' : 'DUPLICATE, ALREADY OWNED');
    renderChest();
    renderCollectionButton();
    hideAllScreens();
    chestRevealScreen.classList.remove('hidden');
  }

  function renderCustomLevels() {
    const list = getCustomLevels();
    customLevelListEl.innerHTML = '';
    if (list.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'hint';
      empty.style.opacity = '0.6';
      empty.textContent = 'NO CUSTOM LEVELS YET';
      customLevelListEl.appendChild(empty);
      return;
    }
    list.forEach(level => {
      const row = document.createElement('div');
      row.className = 'customLevelRow';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'customLevelName';
      nameSpan.textContent = level.name;
      row.appendChild(nameSpan);

      const playBtn = document.createElement('button');
      playBtn.className = 'menuBtnSmall tiny';
      playBtn.textContent = 'PLAY';
      playBtn.addEventListener('click', () => startLevel(level));
      row.appendChild(playBtn);

      const editBtn = document.createElement('button');
      editBtn.className = 'menuBtnSmall tiny';
      editBtn.textContent = 'EDIT';
      editBtn.addEventListener('click', () => openEditLevel(level));
      row.appendChild(editBtn);

      const delBtn = document.createElement('button');
      delBtn.className = 'menuBtnSmall tiny danger';
      delBtn.textContent = 'DELETE';
      delBtn.addEventListener('click', () => {
        if (!confirm('Delete "' + level.name + '"?')) return;
        setCustomLevels(getCustomLevels().filter(l => l.id !== level.id));
        renderCustomLevels();
      });
      row.appendChild(delBtn);

      customLevelListEl.appendChild(row);
    });
  }

  function setHudForRun() {
    if (mode === 'level') {
      scoreEl.classList.add('hidden');
      bestEl.classList.add('hidden');
      modeLabelEl.classList.add('hidden');
      levelProgressWrap.classList.remove('hidden');
    } else {
      levelProgressWrap.classList.add('hidden');
      practiceTagEl.classList.add('hidden');
      checkpointBtnEl.classList.add('hidden');
      levelTimerEl.classList.add('hidden');
      levelCoinRowEl.classList.add('hidden');
      scoreEl.classList.remove('hidden');
      bestEl.classList.remove('hidden');
      if (mode === 'hardcore' || mode === 'ship' || mode === 'ball') {
        modeLabelEl.textContent = mode.toUpperCase();
        modeLabelEl.classList.remove('hidden');
      } else {
        modeLabelEl.classList.add('hidden');
      }
    }
  }

  function renderLevelCoinRow() {
    const coinObs = obstacles.filter(o => o.type === 'coin').sort((a, b) => a.coinIndex - b.coinIndex);
    if (!coinObs.length) {
      levelCoinRowEl.classList.add('hidden');
      return;
    }
    levelCoinRowEl.classList.remove('hidden');
    levelCoinRowEl.innerHTML = '';
    coinObs.forEach(o => {
      const dot = document.createElement('span');
      dot.className = 'levelCoinDot' + (o.collected ? ' got' : '');
      levelCoinRowEl.appendChild(dot);
    });
  }

  function collectCoins() {
    if (mode !== 'level') return;
    const p = playerRect(-6);
    for (const o of obstacles) {
      if (o.type !== 'coin' || o.collected) continue;
      const cx = o.worldX - distance;
      const cy = (o.side === 'ceil') ? CEIL_Y + o.height : GROUND_Y - o.height;
      if (circleRectOverlap(cx, cy, o.radius, p)) {
        o.collected = true;
        bursts.push(makeBurst(cx, cy, '#ffc72c'));
        if (levelPlayMode !== 'practice' && !editorTestActive) {
          setLevelCoinCollected(currentLevel.id, o.coinIndex);
          addCoinsToBalance(1);
          updateCoinDisplays();
        }
        renderLevelCoinRow();
      }
    }
  }

  function goToMenu() {
    state = 'menu';
    hideAllScreens();
    menuScreen.classList.remove('hidden');
    renderMenu();
    scoreEl.classList.remove('hidden');
    bestEl.classList.remove('hidden');
    modeLabelEl.classList.add('hidden');
    levelProgressWrap.classList.add('hidden');
    moveLeftBtn.classList.add('hidden');
    moveRightBtn.classList.add('hidden');
    moveLeft = false;
    moveRight = false;
    playMusic(window.NeonAudio ? NeonAudio.THEMES.menu : null);
  }

  function commonReset() {
    distance = 0;
    trail = [];
    bursts = [];
    levelElapsed = 0;
    spawnGravitySide = 'floor';
    resetPlayer();
  }

  function startEndless() {
    mode = 'endless';
    currentLevel = null;
    const cfg = ENDLESS_CONFIGS.endless;
    speed = cfg.baseSpeed;
    obstacles = [];
    lastObstacleWorldX = W * 0.9;
    commonReset();
    for (let i = 0; i < 4; i++) spawnObstacleEndless(cfg);

    bestEl.textContent = 'BEST ' + bestScores.endless;
    setHudForRun();
    hideAllScreens();
    state = 'playing';
    playMusic(window.NeonAudio ? NeonAudio.THEMES.endless : null);
  }

  function startHardcore() {
    mode = 'hardcore';
    currentLevel = null;
    const cfg = ENDLESS_CONFIGS.hardcore;
    speed = cfg.baseSpeed;
    obstacles = [];
    lastObstacleWorldX = W * 0.9;
    commonReset();
    for (let i = 0; i < 4; i++) spawnObstacleEndless(cfg);

    bestEl.textContent = 'BEST ' + bestScores.hardcore;
    setHudForRun();
    hideAllScreens();
    state = 'playing';
    playMusic(window.NeonAudio ? NeonAudio.THEMES.hardcore : null);
  }

  function startShip() {
    mode = 'ship';
    currentLevel = null;
    const cfg = ENDLESS_CONFIGS.ship;
    speed = cfg.baseSpeed;
    obstacles = [];
    lastObstacleWorldX = W * 0.9;
    commonReset();
    player.y = GROUND_Y / 2 - PLAYER_SIZE / 2;
    player.vy = 0;
    for (let i = 0; i < 3; i++) spawnPipeObstacle(cfg);

    bestEl.textContent = 'BEST ' + bestScores.ship;
    setHudForRun();
    hideAllScreens();
    state = 'playing';
    playMusic(window.NeonAudio ? NeonAudio.THEMES.ship : null);
  }

  function startBall() {
    mode = 'ball';
    currentLevel = null;
    const cfg = ENDLESS_CONFIGS.ball;
    speed = cfg.baseSpeed;
    obstacles = [];
    lastObstacleWorldX = W * 0.9;
    commonReset();
    player.y = GROUND_Y / 2 - PLAYER_SIZE / 2;
    player.vy = 0;
    ballDir = 0;
    for (let i = 0; i < 3; i++) spawnBallObstacle(cfg);

    bestEl.textContent = 'BEST ' + bestScores.ball;
    setHudForRun();
    hideAllScreens();
    state = 'playing';
    playMusic(window.NeonAudio ? NeonAudio.THEMES.ball : null);
  }

  function startLevel(level) {
    mode = 'level';
    currentLevel = level;
    speed = level.speed;
    obstacles = level.custom ? level.obstacles.map(o => ({ ...o })) : generateLevelObstacles(level);
    commonReset();
    practiceCheckpoint = null;
    levelPhysics = 'cube';
    ballDir = 0;
    moveLeft = false;
    moveRight = false;

    const savedCoins = getLevelCoins(level.id);
    let coinCounter = 0;
    obstacles.forEach(o => {
      if (o.type === 'coin') {
        o.coinIndex = coinCounter;
        o.collected = !!savedCoins[coinCounter];
        coinCounter++;
      }
    });
    renderLevelCoinRow();

    setHudForRun();
    levelNameEl.textContent = level.name;
    progressBarFill.style.width = '0%';

    if (levelPlayMode === 'practice') {
      practiceTagEl.classList.remove('hidden');
      checkpointBtnEl.classList.remove('hidden');
    } else {
      practiceTagEl.classList.add('hidden');
      checkpointBtnEl.classList.add('hidden');
    }
    if (levelPlayMode === 'timetrial') {
      levelTimerEl.classList.remove('hidden');
      levelTimerEl.textContent = '0.0s';
    } else {
      levelTimerEl.classList.add('hidden');
    }
    if (levelPlayMode === 'platformer') {
      moveLeftBtn.classList.remove('hidden');
      moveRightBtn.classList.remove('hidden');
    } else {
      moveLeftBtn.classList.add('hidden');
      moveRightBtn.classList.add('hidden');
    }

    hideAllScreens();
    state = 'playing';
    const theme = level.custom
      ? (window.NeonAudio ? NeonAudio.THEMES.custom : null)
      : (window.NeonAudio ? NeonAudio.THEMES.levels[level.id - 1] : null);
    playMusic(theme);
  }

  function effectivePhysics() {
    if (mode === 'level') return levelPhysics;
    if (mode === 'ship' || mode === 'ball') return mode;
    return 'cube';
  }

  function switchLevelPhysics(newPhysics) {
    if (levelPhysics === newPhysics) return;
    levelPhysics = newPhysics;
    player.vy = 0;
    ballDir = 0;
    const color = newPhysics === 'ship' ? '#4ff2ff' : newPhysics === 'ball' ? '#39ff8a' : '#ff3df0';
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, color));
  }

  function checkModePortals() {
    if (mode !== 'level') return;
    for (const o of obstacles) {
      if (o.passed) continue;
      if (o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal') {
        if (distance + PLAYER_X >= o.worldX) {
          o.passed = true;
          switchLevelPhysics(o.type === 'shipPortal' ? 'ship' : o.type === 'ballPortal' ? 'ball' : 'cube');
        }
      }
    }
  }

  function jump() {
    if (state !== 'playing') return;
    const orb = findActiveOrb();
    if (orb) {
      orb.used = true;
      player.vy = ORB_VELOCITY * gravityDir;
      player.onGround = false;
      player.squash = 1;
      bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, '#ffe14f'));
      return;
    }
    if (player.onGround) {
      player.vy = JUMP_VELOCITY * gravityDir;
      player.onGround = false;
      player.squash = 1;
    }
  }

  function placeCheckpoint() {
    if (mode === 'level' && levelPlayMode === 'practice' && state === 'playing' && player.onGround) {
      practiceCheckpoint = { distance, levelPhysics };
      bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, '#ffe14f'));
    }
  }

  function respawnAtCheckpoint() {
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2));
    distance = practiceCheckpoint.distance;
    levelPhysics = practiceCheckpoint.levelPhysics;
    ballDir = 0;
    obstacles.forEach(o => {
      if ((o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal') && o.worldX >= distance) {
        o.passed = false;
      }
    });
    resetPlayer();
  }

  function retrySame() {
    if (mode === 'level' && currentLevel) startLevel(currentLevel);
    else if (mode === 'hardcore') startHardcore();
    else if (mode === 'ship') startShip();
    else if (mode === 'ball') startBall();
    else startEndless();
  }

  function getEditorLength() { return clamp(parseInt(editorLengthInput.value, 10) || 4000, 500, 20000); }
  function getEditorSpeed() { return clamp(parseInt(editorSpeedInput.value, 10) || 380, 150, 900); }

  function buildGhostObstacles(tool, worldX) {
    const side = editorSide;
    if (tool === 'spike') return [{ type: 'spike', worldX, width: 40, height: 44, side }];
    if (tool === 'double') return [
      { type: 'spike', worldX, width: 34, height: 40, side },
      { type: 'spike', worldX: worldX + 40, width: 34, height: 40, side }
    ];
    if (tool === 'triple') return [
      { type: 'spike', worldX, width: 30, height: 38, side },
      { type: 'spike', worldX: worldX + 34, width: 30, height: 38, side },
      { type: 'spike', worldX: worldX + 68, width: 30, height: 38, side }
    ];
    if (tool === 'block') return [{ type: 'block', worldX, width: 50, height: 60, side }];
    if (tool === 'blockStructure') {
      const list = [];
      pushBlockStructure(list, worldX, side, rand);
      return list;
    }
    if (tool === 'orb') return [{ type: 'orb', worldX, height: 110, radius: ORB_RADIUS, side }];
    if (tool === 'coin') return [{ type: 'coin', worldX, height: 110, radius: 14, side }];
    if (tool === 'pad') return [{ type: 'pad', worldX, width: 46, height: 14, side }];
    if (tool === 'miniPortal') return [{ type: 'portal', worldX, mini: true }];
    if (tool === 'normalPortal') return [{ type: 'portal', worldX, mini: false }];
    if (tool === 'gravityPortal') return [{ type: 'gravityPortal', worldX }];
    if (tool === 'shipPortal') return [{ type: 'shipPortal', worldX }];
    if (tool === 'ballPortal') return [{ type: 'ballPortal', worldX }];
    if (tool === 'cubePortal') return [{ type: 'cubePortal', worldX }];
    if (tool === 'movingSpike') return [{ type: 'movingSpike', worldX, baseY: (CEIL_Y + GROUND_Y) / 2, amplitude: 60, size: 26 }];
    return [];
  }

  function handleEditorClick(clientX, clientY) {
    const worldX = Math.round((clientX + editorScroll) / 10) * 10;

    if (editorTool === 'erase') {
      const idx = obstacles.findIndex(o => {
        const sx = o.worldX - editorScroll;
        if (o.type === 'orb' || o.type === 'coin') {
          const cy = (o.side === 'ceil') ? CEIL_Y + o.height : GROUND_Y - o.height;
          const dx = clientX - sx, dy = clientY - cy;
          return dx * dx + dy * dy <= (o.radius + 10) * (o.radius + 10);
        }
        if (o.type === 'movingSpike') {
          const cy = movingSpikeY(o);
          const dx = clientX - sx, dy = clientY - cy;
          return dx * dx + dy * dy <= (o.size + 10) * (o.size + 10);
        }
        if (o.type === 'portal' || o.type === 'gravityPortal' || o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal') {
          return clientX >= sx - 10 && clientX <= sx + 10 && clientY >= -10 && clientY <= GROUND_Y + 10;
        }
        const ceil = o.side === 'ceil';
        const topY = o.type === 'pipe' ? 0 : (ceil ? CEIL_Y : GROUND_Y - o.height);
        const botY = o.type === 'pipe' ? GROUND_Y : (ceil ? CEIL_Y + o.height : GROUND_Y);
        return clientX >= sx - 6 && clientX <= sx + o.width + 6 && clientY >= topY - 10 && clientY <= botY + 10;
      });
      if (idx !== -1) obstacles.splice(idx, 1);
      return;
    }

    if (worldX < 20 || worldX > getEditorLength() - 20) return;
    obstacles.push(...buildGhostObstacles(editorTool, worldX));
  }

  function openCreateLevel() {
    editingCustomId = null;
    obstacles = [];
    editorScroll = 0;
    editorNameInput.value = '';
    editorLengthInput.value = 4000;
    editorSpeedInput.value = 380;
    enterEditor();
  }

  function openEditLevel(level) {
    editingCustomId = level.id;
    obstacles = level.obstacles.map(o => ({ ...o }));
    editorScroll = 0;
    editorNameInput.value = level.name;
    editorLengthInput.value = level.length;
    editorSpeedInput.value = level.speed;
    enterEditor();
  }

  function enterEditor() {
    state = 'editor';
    obstacles.forEach(o => {
      if (o.type === 'orb') o.used = false;
      if (o.type === 'coin') o.collected = false;
      if (o.type === 'pad') o.triggered = false;
      if (o.type === 'portal' || o.type === 'gravityPortal' || o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal') o.passed = false;
    });
    hideAllScreens();
    editorPanel.classList.remove('hidden');
    scoreEl.classList.add('hidden');
    bestEl.classList.add('hidden');
    modeLabelEl.classList.add('hidden');
    levelProgressWrap.classList.add('hidden');
    checkpointBtnEl.classList.add('hidden');
    playMusic(window.NeonAudio ? NeonAudio.THEMES.menu : null);
  }

  function testPlayLevel() {
    const testLevel = {
      id: 'editor-test',
      name: editorNameInput.value.trim() || 'TEST LEVEL',
      length: getEditorLength(),
      speed: getEditorSpeed(),
      custom: true,
      obstacles: obstacles.slice()
    };
    editorTestActive = true;
    startLevel(testLevel);
  }

  function saveCustomLevel() {
    const name = editorNameInput.value.trim() || 'UNTITLED LEVEL';
    const length = getEditorLength();
    const speedVal = getEditorSpeed();
    const list = getCustomLevels();
    const savedObstacles = obstacles.map(o => ({ ...o }));

    if (editingCustomId) {
      const idx = list.findIndex(l => l.id === editingCustomId);
      const updated = { id: editingCustomId, name, length, speed: speedVal, custom: true, obstacles: savedObstacles };
      if (idx !== -1) list[idx] = updated; else list.push(updated);
    } else {
      editingCustomId = 'custom-' + Date.now();
      list.push({ id: editingCustomId, name, length, speed: speedVal, custom: true, obstacles: savedObstacles });
    }
    setCustomLevels(list);
    alert('Level saved!');
  }

  function endGame() {
    state = 'gameover';
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2));

    if (mode === 'level') {
      const pct = Math.min(100, Math.floor((distance / currentLevel.length) * 100));
      gameOverStat1.textContent = currentLevel.name + (levelPlayMode === 'practice' ? ' (PRACTICE)' : '');
      gameOverStat2.textContent = 'REACHED ' + pct + '%';
      gameOverRewardEl.textContent = '';
    } else {
      const finalScore = Math.floor(distance / 10);
      if (finalScore > bestScores[mode]) {
        bestScores[mode] = finalScore;
        localStorage.setItem(BEST_KEYS[mode], String(finalScore));
      }
      gameOverStat1.textContent = 'SCORE: ' + finalScore;
      gameOverStat2.textContent = 'BEST: ' + bestScores[mode];

      const coinReward = Math.max(1, Math.floor(finalScore / 5));
      const diamondReward = Math.max(1, Math.floor(finalScore / 25));
      addCoinsToBalance(coinReward);
      addDiamondsToBalance(diamondReward);
      updateCoinDisplays();
      updateDiamondDisplays();
      gameOverRewardEl.textContent = '+' + coinReward + ' COINS   +' + diamondReward + ' DIAMONDS';
    }

    gameOverMenuBtn.textContent = editorTestActive ? 'BACK TO EDITOR' : 'MENU';
    hideAllScreens();
    gameOverScreen.classList.remove('hidden');
  }

  function getNextLevel(level) {
    if (!level || level.custom) return null;
    const idx = LEVELS.findIndex(l => l.id === level.id);
    return idx === -1 ? null : LEVELS[idx + 1] || null;
  }

  function levelComplete() {
    state = 'levelcomplete';
    const isPractice = levelPlayMode === 'practice';
    const isCustom = !!currentLevel.custom;
    const isEphemeralTest = currentLevel.id === 'editor-test';
    const bestTimes = getBestTimes();
    let bestTime = bestTimes[currentLevel.id];
    let isNewBest = false;

    if (!isPractice && !isCustom) markCompleted(currentLevel.id);
    if (!isPractice && !isEphemeralTest) {
      if (bestTime === undefined || levelElapsed < bestTime) {
        isNewBest = true;
        bestTime = levelElapsed;
        setBestTime(currentLevel.id, bestTime);
      }
    }

    completeLevelName.textContent = currentLevel.name;
    completeTime.textContent = (isPractice ? 'PRACTICE TIME: ' : 'TIME: ') + levelElapsed.toFixed(1) + 's';
    completeBestTime.textContent = isPractice
      ? 'PRACTICE RUNS ARE NOT SAVED'
      : (isEphemeralTest ? 'TEST RUN' : (isNewBest ? 'NEW BEST TIME!' : 'BEST: ' + bestTime.toFixed(1) + 's'));

    if (!isPractice && !isEphemeralTest) {
      const levelNum = typeof currentLevel.id === 'number' ? currentLevel.id : 1;
      const coinReward = 8 + levelNum;
      const diamondReward = 3 + Math.floor(levelNum / 2) + (isNewBest ? 10 : 0);
      addCoinsToBalance(coinReward);
      addDiamondsToBalance(diamondReward);
      updateCoinDisplays();
      updateDiamondDisplays();
      completeRewardEl.textContent = '+' + coinReward + ' COINS   +' + diamondReward + ' DIAMONDS';
    } else {
      completeRewardEl.textContent = '';
    }

    const next = getNextLevel(currentLevel);
    if (next && isUnlocked(next)) {
      nextLevelBtn.disabled = false;
      nextLevelBtn.onclick = () => startLevel(next);
    } else {
      nextLevelBtn.disabled = true;
      nextLevelBtn.onclick = null;
    }

    completeMenuBtn.textContent = editorTestActive ? 'BACK TO EDITOR' : 'MENU';
    hideAllScreens();
    levelCompleteScreen.classList.remove('hidden');
  }

  function makeBurst(x, y, colorOverride) {
    const parts = [];
    for (let i = 0; i < 26; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(80, 420);
      parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, color: colorOverride || (Math.random() > 0.5 ? '#4ff2ff' : '#ff3df0') });
    }
    return parts;
  }

  function updateMuteBtn() {
    if (!window.NeonAudio) return;
    muteBtn.classList.toggle('muted', NeonAudio.isMuted());
  }

  muteBtn.addEventListener('click', () => {
    if (window.NeonAudio) {
      NeonAudio.init();
      NeonAudio.toggleMute();
      updateMuteBtn();
    }
  });
  checkpointBtnEl.addEventListener('click', placeCheckpoint);

  moveLeftBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); moveLeft = true; });
  moveLeftBtn.addEventListener('pointerup', () => { moveLeft = false; });
  moveLeftBtn.addEventListener('pointercancel', () => { moveLeft = false; });
  moveLeftBtn.addEventListener('pointerleave', () => { moveLeft = false; });
  moveRightBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); moveRight = true; });
  moveRightBtn.addEventListener('pointerup', () => { moveRight = false; });
  moveRightBtn.addEventListener('pointercancel', () => { moveRight = false; });
  moveRightBtn.addEventListener('pointerleave', () => { moveRight = false; });

  document.querySelectorAll('#playModeRow .playModePill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#playModeRow .playModePill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      levelPlayMode = btn.dataset.playMode;
    });
  });

  const miniModeToggleBtn = document.getElementById('miniModeToggle');
  let miniModeSelected = false;
  miniModeToggleBtn.addEventListener('click', () => {
    miniModeSelected = !miniModeSelected;
    miniModeToggleBtn.classList.toggle('active', miniModeSelected);
  });

  dailyChestBtn.addEventListener('click', openChest);
  chestRevealBtn.addEventListener('click', goToMenu);
  collectionBtn.addEventListener('click', openCollection);
  collectionBackBtn.addEventListener('click', goToMenu);
  shopBtn.addEventListener('click', openShop);
  shopBackBtn.addEventListener('click', goToMenu);
  digBtn.addEventListener('click', openDigScreen);
  digBackBtn.addEventListener('click', closeDigScreen);
  digNewPatchBtn.addEventListener('click', requestNewDigPatch);
  diamondShopBtn.addEventListener('click', openDiamondShop);
  slotsBtn.addEventListener('click', openSlots);
  slotsBackBtn.addEventListener('click', closeSlots);
  slotsSpinBtn.addEventListener('click', spinSlots);
  meteorBtn.addEventListener('click', openMeteorCatch);
  meteorBackBtn.addEventListener('click', closeMeteorCatch);
  meteorPlayBtn.addEventListener('click', startMeteorRound);
  meteorCanvas.addEventListener('click', handleMeteorClick);
  minigamesBtn.addEventListener('click', openMinigamesHub);
  minigamesBackBtn.addEventListener('click', goToMenu);
  minigamePlayBackBtn.addEventListener('click', closeMinigame);
  minigamePlayActionBtn.addEventListener('click', mgHandleAction);
  document.querySelectorAll('#diamondShopTabRow .playModePill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#diamondShopTabRow .playModePill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      diamondShopTab = btn.dataset.diamondShopTab;
      renderDiamondShop();
    });
  });
  diamondShopBackBtn.addEventListener('click', goToMenu);
  document.querySelectorAll('#collectionTabRow .playModePill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#collectionTabRow .playModePill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      collectionTab = btn.dataset.collectionTab;
      renderCollectionGrid();
    });
  });
  document.querySelectorAll('#collectionFilterRow .playModePill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#collectionFilterRow .playModePill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      collectionFilter = btn.dataset.collectionFilter;
      renderCollectionGrid();
    });
  });

  endlessBtn.addEventListener('click', startEndless);
  hardcoreBtn.addEventListener('click', startHardcore);
  shipBtn.addEventListener('click', startShip);
  ballBtn.addEventListener('click', startBall);
  retryBtn.addEventListener('click', retrySame);

  function handleMenuOrEditorReturn() {
    if (editorTestActive) { editorTestActive = false; enterEditor(); }
    else goToMenu();
  }
  gameOverMenuBtn.addEventListener('click', handleMenuOrEditorReturn);
  completeMenuBtn.addEventListener('click', handleMenuOrEditorReturn);

  createLevelBtn.addEventListener('click', openCreateLevel);
  document.querySelectorAll('.toolBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toolBtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      editorTool = btn.dataset.tool;
    });
  });
  editorSideToggleBtn.addEventListener('click', () => {
    editorSide = editorSide === 'floor' ? 'ceil' : 'floor';
    editorSideToggleBtn.textContent = editorSide === 'floor' ? 'FLOOR MODE' : 'CEILING MODE';
    editorSideToggleBtn.classList.toggle('danger', editorSide === 'ceil');
  });
  editorScrollLeftBtn.addEventListener('click', () => {
    editorScroll = Math.max(0, editorScroll - 400);
  });
  editorScrollRightBtn.addEventListener('click', () => {
    editorScroll = Math.max(0, Math.min(editorScroll + 400, Math.max(0, getEditorLength() - 200)));
  });
  editorClearBtn.addEventListener('click', () => {
    if (obstacles.length && !confirm('Clear all obstacles?')) return;
    obstacles = [];
  });
  editorTestBtn.addEventListener('click', testPlayLevel);
  editorSaveBtn.addEventListener('click', saveCustomLevel);
  editorBackBtn.addEventListener('click', () => {
    if (!editingCustomId && obstacles.length && !confirm('Discard this unsaved level?')) return;
    goToMenu();
  });

  window.addEventListener('resize', () => {
    resize();
    if (state !== 'playing') resetPlayer();
  });

  function handleNonPlayingPress() {
    if (state === 'gameover') { retrySame(); return; }
    if (state === 'levelcomplete') {
      const next = getNextLevel(currentLevel);
      if (mode === 'level' && next && isUnlocked(next)) startLevel(next);
      else handleMenuOrEditorReturn();
    }
  }

  function onPressStart() {
    inputHeld = true;
    if (window.NeonAudio) NeonAudio.init();
    if (state === 'playing') {
      const phys = effectivePhysics();
      if (phys === 'ship') { /* handled via inputHeld in updateShip */ }
      else if (phys === 'ball') toggleBallDir();
      else jump();
      return;
    }
    if (state === 'gameover' || state === 'levelcomplete') handleNonPlayingPress();
  }
  function onPressEnd() { inputHeld = false; }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      onPressStart();
    } else if (e.code === 'KeyZ') {
      placeCheckpoint();
    } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
      moveLeft = true;
    } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
      moveRight = true;
    }
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') onPressEnd();
    else if (e.code === 'ArrowLeft' || e.code === 'KeyA') moveLeft = false;
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') moveRight = false;
  });
  window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return;
    if (state === 'editor') {
      if (e.target === canvas) handleEditorClick(e.clientX, e.clientY);
      return;
    }
    e.preventDefault();
    onPressStart();
  }, { passive: false });
  window.addEventListener('pointerup', onPressEnd);
  window.addEventListener('pointercancel', onPressEnd);
  window.addEventListener('pointermove', (e) => {
    if (state !== 'editor') return;
    editorHoverX = (e.target === canvas) ? e.clientX : null;
  });
  window.addEventListener('wheel', (e) => {
    if (state !== 'editor') return;
    e.preventDefault();
    editorScroll = clamp(editorScroll + e.deltaY, 0, Math.max(0, getEditorLength() - 200));
  }, { passive: false });

  function playerRect(inset = 0) {
    return { x: PLAYER_X + inset, y: player.y + inset, w: PLAYER_SIZE - inset * 2, h: PLAYER_SIZE - inset * 2 };
  }

  function obstacleScreenRect(o) {
    const screenX = o.worldX - distance;
    if ((o.side || 'floor') === 'ceil') return { x: screenX, y: o.full ? 0 : CEIL_Y, w: o.width, h: o.height };
    return { x: screenX, y: GROUND_Y - o.height, w: o.width, h: o.height };
  }

  function obstacleWidth(o) {
    if (o.type === 'orb') return o.radius * 2;
    if (o.type === 'movingSpike') return o.size * 2;
    if (o.type === 'portal' || o.type === 'gravityPortal') return 10;
    return o.width;
  }

  function orbScreenPos(o) {
    const ceil = (o.side || 'floor') === 'ceil';
    return { x: o.worldX - distance, y: ceil ? CEIL_Y + o.height : GROUND_Y - o.height };
  }

  function movingSpikeY(o) {
    return o.baseY + Math.sin(distance * 0.0022 + o.worldX * 0.01) * o.amplitude;
  }

  function circleRectOverlap(cx, cy, r, rect) {
    const closestX = clamp(cx, rect.x, rect.x + rect.w);
    const closestY = clamp(cy, rect.y, rect.y + rect.h);
    const dx = cx - closestX, dy = cy - closestY;
    return dx * dx + dy * dy <= r * r;
  }

  function findActiveOrb() {
    const p = playerRect(-8);
    for (const o of obstacles) {
      if (o.type !== 'orb' || o.used) continue;
      const pos = orbScreenPos(o);
      if (circleRectOverlap(pos.x, pos.y, o.radius, p)) return o;
    }
    return null;
  }

  function rectsOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function checkCollision() {
    const p = playerRect(6);

    if (effectivePhysics() === 'ship') {
      if (player.y <= 0 || player.y + PLAYER_SIZE >= GROUND_Y) return true;
      for (const o of obstacles) {
        if (o.type === 'pipe') {
          const screenX = o.worldX - distance;
          const topRect = { x: screenX, y: 0, w: o.width, h: o.topHeight };
          const bottomRect = { x: screenX, y: o.bottomY, w: o.width, h: GROUND_Y - o.bottomY };
          if (rectsOverlap(p, topRect) || rectsOverlap(p, bottomRect)) return true;
        } else if (o.type === 'spike') {
          const r = obstacleScreenRect(o);
          const inset = { x: r.x + r.w * 0.28, y: r.y + r.h * 0.35, w: r.w * 0.44, h: r.h * 0.65 };
          if (rectsOverlap(p, inset)) return true;
        } else if (o.type === 'block') {
          const r = obstacleScreenRect(o);
          const inset = { x: r.x + 3, y: r.y + 3, w: r.w - 6, h: r.h - 6 };
          if (rectsOverlap(p, inset)) return true;
        }
      }
      return false;
    }

    for (const o of obstacles) {
      if (o.type === 'orb' || o.type === 'pad' || o.type === 'portal' || o.type === 'gravityPortal' ||
        o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal' || o.type === 'coin') continue;
      if (o.type === 'movingSpike') {
        const screenX = o.worldX - distance;
        const cy = movingSpikeY(o);
        const inset = { x: screenX - o.size * 0.35, y: cy - o.size * 0.5, w: o.size * 0.7, h: o.size };
        if (rectsOverlap(p, inset)) return true;
        continue;
      }
      const r = obstacleScreenRect(o);
      if (o.type === 'spike') {
        const inset = { x: r.x + r.w * 0.28, y: r.y + r.h * 0.35, w: r.w * 0.44, h: r.h * 0.65 };
        if (rectsOverlap(p, inset)) return true;
      } else {
        const inset = { x: r.x + 3, y: r.y + 3, w: r.w - 6, h: r.h - 6 };
        if (rectsOverlap(p, inset)) return true;
      }
    }
    return false;
  }

  let lastTime = performance.now();

  function finishRunFrame(dt, spawnFn, cfg) {
    if (mode === 'ship' || mode === 'ball') {
      while (lastObstacleWorldX - distance < W * 1.3) spawnFn(cfg);
      obstacles = obstacles.filter(o => (o.worldX - distance + o.width) > -50);
    } else {
      progressBarFill.style.width = Math.min(100, (distance / currentLevel.length) * 100) + '%';
      if (levelPlayMode === 'timetrial') levelTimerEl.textContent = levelElapsed.toFixed(1) + 's';
      if (distance >= currentLevel.length) { levelComplete(); hue += dt * 18; return; }
    }

    if (checkCollision()) {
      if (mode === 'level' && levelPlayMode === 'practice' && practiceCheckpoint) {
        respawnAtCheckpoint();
      } else {
        endGame();
      }
      hue += dt * 18;
      return;
    }
    hue += dt * 18;
  }

  function updateShip(dt) {
    const cfg = ENDLESS_CONFIGS.ship;
    if (mode === 'ship') {
      speed = Math.min(cfg.maxSpeed, cfg.baseSpeed + Math.sqrt(distance) * cfg.ramp * 0.15);
    }
    distance += speed * dt;
    if (distance < 0) distance = 0;

    const netAccel = SHIP_GRAVITY + (inputHeld ? SHIP_THRUST : 0);
    player.vy = clamp(player.vy + netAccel * dt, -SHIP_MAX_VY, SHIP_MAX_VY);
    player.y += player.vy * dt;
    player.rot = clamp(player.vy / SHIP_MAX_VY, -1, 1) * 0.5;

    trail.push({ x: PLAYER_X + PLAYER_SIZE / 2, y: player.y + PLAYER_SIZE / 2, life: 1 });
    if (trail.length > 40) trail.shift();
    trail.forEach(t => t.life -= dt * 2.4);
    trail = trail.filter(t => t.life > 0);

    finishRunFrame(dt, spawnPipeObstacle, cfg);
  }

  function toggleBallDir() {
    if (state !== 'playing' || effectivePhysics() !== 'ball') return;
    ballDir = ballDir === -1 ? 1 : -1;
    bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, ballDir === -1 ? '#4ff2ff' : '#ff3df0'));
  }

  function updateBall(dt) {
    const cfg = ENDLESS_CONFIGS.ball;
    if (mode === 'ball') {
      speed = Math.min(cfg.maxSpeed, cfg.baseSpeed + Math.sqrt(distance) * cfg.ramp * 0.15);
    }
    distance += speed * dt;
    if (distance < 0) distance = 0;

    player.vy = speed * ballDir;
    player.y += player.vy * dt;
    if (player.y < 0) player.y = 0;
    if (player.y + PLAYER_SIZE > GROUND_Y) player.y = GROUND_Y - PLAYER_SIZE;
    player.rot = ballDir * 0.5;

    trail.push({ x: PLAYER_X + PLAYER_SIZE / 2, y: player.y + PLAYER_SIZE / 2, life: 1 });
    if (trail.length > 40) trail.shift();
    trail.forEach(t => t.life -= dt * 2.4);
    trail = trail.filter(t => t.life > 0);

    finishRunFrame(dt, spawnBallObstacle, cfg);
  }

  function update(dt) {
    if (state !== 'playing') return;
    levelElapsed += dt;

    if (mode === 'level' && levelPlayMode === 'platformer') {
      let dir = 0;
      if (moveLeft) dir -= 1;
      if (moveRight) dir += 1;
      speed = dir * PLATFORMER_SPEED;
    }

    checkModePortals();
    collectCoins();
    const phys = effectivePhysics();
    if (phys === 'ship') { updateShip(dt); return; }
    if (phys === 'ball') { updateBall(dt); return; }

    if (mode === 'endless' || mode === 'hardcore') {
      const cfg = ENDLESS_CONFIGS[mode];
      speed = Math.min(cfg.maxSpeed, cfg.baseSpeed + Math.sqrt(distance) * cfg.ramp * 0.15);
    }
    distance += speed * dt;
    if (distance < 0) distance = 0;

    for (const o of obstacles) {
      if (o.passed) continue;
      if (o.type === 'portal') {
        if (distance + PLAYER_X >= o.worldX) { o.passed = true; setMiniMode(o.mini); }
      } else if (o.type === 'gravityPortal') {
        if (distance + PLAYER_X >= o.worldX) { o.passed = true; setGravityDir(-gravityDir); }
      }
    }

    player.vy += GRAVITY * gravityDir * dt;
    const prevLeading = gravityDir === 1 ? (player.y + PLAYER_SIZE) : player.y;
    player.y += player.vy * dt;

    let grounded = false;
    const activeSide = gravityDir === 1 ? 'floor' : 'ceil';
    const fallingTowardSurface = gravityDir === 1 ? (player.vy >= 0) : (player.vy <= 0);
    if (fallingTowardSurface) {
      const playerLeft = PLAYER_X, playerRight = PLAYER_X + PLAYER_SIZE;
      for (const o of obstacles) {
        if (o.type !== 'block' || (o.side || 'floor') !== activeSide) continue;
        const screenX = o.worldX - distance;
        if (screenX + o.width <= playerLeft || screenX >= playerRight) continue;
        if (gravityDir === 1) {
          const blockTop = GROUND_Y - o.height;
          if (prevLeading <= blockTop + 0.5 && player.y + PLAYER_SIZE >= blockTop) {
            player.y = blockTop - PLAYER_SIZE;
            player.vy = 0;
            grounded = true;
            break;
          }
        } else {
          const blockBottom = CEIL_Y + o.height;
          if (prevLeading >= blockBottom - 0.5 && player.y <= blockBottom) {
            player.y = blockBottom;
            player.vy = 0;
            grounded = true;
            break;
          }
        }
      }
      if (!grounded) {
        if (gravityDir === 1 && player.y >= GROUND_Y - PLAYER_SIZE) {
          player.y = GROUND_Y - PLAYER_SIZE;
          player.vy = 0;
          grounded = true;
        } else if (gravityDir === -1 && player.y <= CEIL_Y) {
          player.y = CEIL_Y;
          player.vy = 0;
          grounded = true;
        }
      }
    }

    if (grounded) {
      const playerLeft = PLAYER_X, playerRight = PLAYER_X + PLAYER_SIZE;
      for (const o of obstacles) {
        if (o.type !== 'pad' || o.triggered || (o.side || 'floor') !== activeSide) continue;
        const screenX = o.worldX - distance;
        if (screenX + o.width <= playerLeft || screenX >= playerRight) continue;
        o.triggered = true;
        player.vy = PAD_VELOCITY * gravityDir;
        grounded = false;
        bursts.push(makeBurst(PLAYER_X + PLAYER_SIZE / 2, player.y + PLAYER_SIZE / 2, '#39ff8a'));
        break;
      }
    }
    if (grounded && !player.onGround) player.squash = 1;
    player.onGround = grounded;

    if (player.onGround) {
      player.rot = Math.round(player.rot / (Math.PI / 2)) * (Math.PI / 2);
    } else {
      player.rot += dt * 9;
    }
    player.squash = Math.max(0, player.squash - dt * 4);

    trail.push({ x: PLAYER_X + PLAYER_SIZE / 2, y: player.y + PLAYER_SIZE / 2, life: 1 });
    if (trail.length > 40) trail.shift();
    trail.forEach(t => t.life -= dt * 2.4);
    trail = trail.filter(t => t.life > 0);

    if (mode === 'endless' || mode === 'hardcore') {
      const cfg = ENDLESS_CONFIGS[mode];
      while (lastObstacleWorldX - distance < W * 1.3) spawnObstacleEndless(cfg);
      obstacles = obstacles.filter(o => (o.worldX - distance + obstacleWidth(o)) > -50);
    } else {
      progressBarFill.style.width = Math.min(100, (distance / currentLevel.length) * 100) + '%';
      if (levelPlayMode === 'timetrial') levelTimerEl.textContent = levelElapsed.toFixed(1) + 's';
      if (distance >= currentLevel.length) {
        levelComplete();
        hue += dt * 18;
        return;
      }
    }

    if (checkCollision()) {
      if (mode === 'level' && levelPlayMode === 'practice' && practiceCheckpoint) {
        respawnAtCheckpoint();
      } else {
        endGame();
      }
      hue += dt * 18;
      return;
    }

    hue += dt * 18;
  }

  function updateBursts(dt) {
    for (const parts of bursts) {
      for (const p of parts) {
        p.vy += GRAVITY * 0.5 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt * 1.4;
      }
    }
    bursts = bursts.filter(parts => parts.some(p => p.life > 0));
  }

  function drawBackground(dir) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    const h1 = (hue) % 360;
    const h2 = (hue + 60) % 360;
    g.addColorStop(0, `hsl(${h1}, 60%, 8%)`);
    g.addColorStop(1, `hsl(${h2}, 70%, 4%)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.strokeStyle = `hsla(${h1}, 100%, 60%, 0.08)`;
    ctx.lineWidth = 1;
    const spacing = 60;
    const offset = (distance * 0.4) % spacing;
    for (let x = -offset; x < W; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, GROUND_Y);
      ctx.stroke();
    }
    ctx.restore();

    const surfaceY = dir === -1 ? CEIL_Y : GROUND_Y;

    ctx.save();
    ctx.shadowColor = `hsl(${h1}, 100%, 60%)`;
    ctx.shadowBlur = 20;
    ctx.strokeStyle = `hsl(${h1}, 100%, 60%)`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, surfaceY);
    ctx.lineTo(W, surfaceY);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = 'rgba(8,6,18,0.9)';
    ctx.save();
    ctx.strokeStyle = `hsla(${h2}, 100%, 60%, 0.35)`;
    ctx.lineWidth = 2;
    const gSpacing = 46;
    const gOffset = (distance) % gSpacing;
    if (dir === -1) {
      ctx.fillRect(0, 0, W, Math.max(0, CEIL_Y - 2));
      for (let x = -gOffset; x < W; x += gSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, CEIL_Y - 8);
        ctx.lineTo(x + 20, 0);
        ctx.stroke();
      }
    } else {
      ctx.fillRect(0, GROUND_Y + 2, W, H - GROUND_Y);
      for (let x = -gOffset; x < W; x += gSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, GROUND_Y + 8);
        ctx.lineTo(x + 20, H);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawTrail() {
    const cosmetic = getEquippedCosmetic('trail');
    for (const t of trail) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, t.life) * 0.5;
      ctx.fillStyle = cosmetic.c1;
      ctx.shadowColor = cosmetic.c1;
      ctx.shadowBlur = 10;
      const s = PLAYER_SIZE * 0.5 * t.life;
      ctx.fillRect(t.x - s / 2, t.y - s / 2, s, s);
      ctx.restore();
    }
  }

  function drawPlayer() {
    if (state === 'gameover') return;
    const phys = effectivePhysics();
    const skin = getEquippedCosmetic(phys === 'ship' ? 'ship' : 'skin');
    ctx.save();
    const cx = PLAYER_X + PLAYER_SIZE / 2;
    const cy = player.y + PLAYER_SIZE / 2;
    ctx.translate(cx, cy);
    ctx.rotate(player.rot);

    if (phys === 'ship') {
      const w = PLAYER_SIZE * 1.3, h = PLAYER_SIZE * 0.7;
      ctx.shadowColor = skin.c1;
      ctx.shadowBlur = 22;
      const grad = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
      grad.addColorStop(0, skin.c2);
      grad.addColorStop(1, skin.c1);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(-w / 2, 0);
      ctx.lineTo(w / 2 - 8, -h / 2);
      ctx.lineTo(w / 2, 0);
      ctx.lineTo(w / 2 - 8, h / 2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.globalAlpha = 0.7;
      ctx.lineWidth = 2;
      ctx.stroke();
      if (skin.pattern) drawCubePattern(ctx, skin.pattern, PLAYER_SIZE);
    } else if (phys === 'ball') {
      const r = PLAYER_SIZE / 2;
      ctx.shadowColor = skin.c2;
      ctx.shadowBlur = 24;
      const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.15, 0, 0, r);
      grad.addColorStop(0, skin.c1);
      grad.addColorStop(1, skin.c2);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.globalAlpha = 0.7;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      const squash = player.squash;
      const sx = 1 + squash * 0.18;
      const sy = 1 - squash * 0.18;
      ctx.scale(sx, sy);
      ctx.shadowColor = skin.c2;
      ctx.shadowBlur = 24;
      const grad = ctx.createLinearGradient(-PLAYER_SIZE / 2, -PLAYER_SIZE / 2, PLAYER_SIZE / 2, PLAYER_SIZE / 2);
      grad.addColorStop(0, skin.c1);
      grad.addColorStop(1, skin.c2);
      ctx.fillStyle = grad;
      const r = 8;
      const s = PLAYER_SIZE;
      ctx.beginPath();
      ctx.moveTo(-s / 2 + r, -s / 2);
      ctx.arcTo(s / 2, -s / 2, s / 2, s / 2, r);
      ctx.arcTo(s / 2, s / 2, -s / 2, s / 2, r);
      ctx.arcTo(-s / 2, s / 2, -s / 2, -s / 2, r);
      ctx.arcTo(-s / 2, -s / 2, s / 2, -s / 2, r);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.globalAlpha = 0.7;
      ctx.lineWidth = 2;
      ctx.stroke();
      if (skin.pattern) drawCubePattern(ctx, skin.pattern, s);
    }
    ctx.restore();
  }

  function drawCubePattern(targetCtx, pattern, s) {
    targetCtx.save();
    targetCtx.strokeStyle = 'rgba(255,255,255,0.85)';
    targetCtx.fillStyle = 'rgba(255,255,255,0.85)';
    targetCtx.lineWidth = Math.max(1.5, s * 0.045);
    const h = s / 2;
    if (pattern === 'stripes') {
      targetCtx.beginPath();
      for (let i = -2; i <= 2; i++) {
        targetCtx.moveTo(-h, i * (s / 5));
        targetCtx.lineTo(h, i * (s / 5) - s * 0.3);
      }
      targetCtx.stroke();
    } else if (pattern === 'stars') {
      [[-0.4, -0.5], [0.3, -0.2], [-0.1, 0.3], [0.4, 0.4], [-0.5, 0.1]].forEach(([fx, fy]) => {
        targetCtx.beginPath();
        targetCtx.arc(fx * h, fy * h, s * 0.035, 0, Math.PI * 2);
        targetCtx.fill();
      });
    } else if (pattern === 'hex') {
      targetCtx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 3 * i - Math.PI / 2;
        const x = Math.cos(a) * h * 0.55, y = Math.sin(a) * h * 0.55;
        if (i === 0) targetCtx.moveTo(x, y); else targetCtx.lineTo(x, y);
      }
      targetCtx.closePath();
      targetCtx.stroke();
    } else if (pattern === 'circuit') {
      targetCtx.beginPath();
      targetCtx.moveTo(-h * 0.5, -h * 0.5);
      targetCtx.lineTo(-h * 0.1, -h * 0.5);
      targetCtx.lineTo(-h * 0.1, 0);
      targetCtx.lineTo(h * 0.4, 0);
      targetCtx.lineTo(h * 0.4, h * 0.5);
      targetCtx.stroke();
      [[-h * 0.5, -h * 0.5], [h * 0.4, h * 0.5]].forEach(([x, y]) => {
        targetCtx.beginPath();
        targetCtx.arc(x, y, s * 0.045, 0, Math.PI * 2);
        targetCtx.fill();
      });
    } else if (pattern === 'diamond') {
      targetCtx.beginPath();
      targetCtx.moveTo(0, -h * 0.6);
      targetCtx.lineTo(h * 0.5, 0);
      targetCtx.lineTo(0, h * 0.6);
      targetCtx.lineTo(-h * 0.5, 0);
      targetCtx.closePath();
      targetCtx.stroke();
    } else if (pattern === 'glitch') {
      for (let i = 0; i < 4; i++) {
        const y = -h * 0.6 + i * (h * 0.4);
        const off = (i % 2 === 0 ? -1 : 1) * h * 0.15;
        targetCtx.fillRect(-h * 0.5 + off, y, h * 0.7, s * 0.06);
      }
    } else if (pattern === 'rings') {
      [0.25, 0.45].forEach(r => {
        targetCtx.beginPath();
        targetCtx.arc(0, 0, h * r, 0, Math.PI * 2);
        targetCtx.stroke();
      });
    } else if (pattern === 'flame') {
      targetCtx.beginPath();
      targetCtx.moveTo(0, h * 0.5);
      targetCtx.bezierCurveTo(-h * 0.4, h * 0.1, -h * 0.15, -h * 0.2, 0, -h * 0.55);
      targetCtx.bezierCurveTo(h * 0.15, -h * 0.2, h * 0.4, h * 0.1, 0, h * 0.5);
      targetCtx.stroke();
    }
    targetCtx.restore();
  }

  function drawObstacles() {
    for (const o of obstacles) {
      if (o.type === 'pipe') {
        const screenX = o.worldX - distance;
        if (screenX > W + 10 || screenX + o.width < -10) continue;
        ctx.save();
        ctx.shadowColor = '#4ff2ff';
        ctx.shadowBlur = 16;
        const gradTop = ctx.createLinearGradient(0, 0, 0, o.topHeight);
        gradTop.addColorStop(0, '#0f7a86');
        gradTop.addColorStop(1, '#4ff2ff');
        ctx.fillStyle = gradTop;
        ctx.fillRect(screenX, 0, o.width, o.topHeight);
        const gradBot = ctx.createLinearGradient(0, o.bottomY, 0, GROUND_Y);
        gradBot.addColorStop(0, '#4ff2ff');
        gradBot.addColorStop(1, '#0f7a86');
        ctx.fillStyle = gradBot;
        ctx.fillRect(screenX, o.bottomY, o.width, GROUND_Y - o.bottomY);
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(screenX + 1, 1, o.width - 2, Math.max(0, o.topHeight - 2));
        ctx.strokeRect(screenX + 1, o.bottomY + 1, o.width - 2, Math.max(0, GROUND_Y - o.bottomY - 2));
        ctx.restore();
        continue;
      }

      if (o.type === 'portal') {
        const screenX = o.worldX - distance;
        if (screenX > W + 20 || screenX < -20) continue;
        const color = o.mini ? '#7cf9ff' : '#ff9df7';
        ctx.save();
        ctx.globalAlpha = o.passed ? 0.35 : 0.85;
        ctx.shadowColor = color;
        ctx.shadowBlur = 24;
        const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
        grad.addColorStop(0, color);
        grad.addColorStop(1, o.mini ? '#0f4d86' : '#7a0068');
        ctx.fillStyle = grad;
        ctx.fillRect(screenX - 5, 0, 10, GROUND_Y);
        ctx.restore();
        continue;
      }

      if (o.type === 'gravityPortal') {
        const screenX = o.worldX - distance;
        if (screenX > W + 20 || screenX < -20) continue;
        const color = '#39ff8a';
        ctx.save();
        ctx.globalAlpha = o.passed ? 0.35 : 0.85;
        ctx.shadowColor = color;
        ctx.shadowBlur = 24;
        const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
        grad.addColorStop(0, '#ffb347');
        grad.addColorStop(0.5, color);
        grad.addColorStop(1, '#ffb347');
        ctx.fillStyle = grad;
        ctx.fillRect(screenX - 5, 0, 10, GROUND_Y);
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        ctx.lineWidth = 2;
        const midY = GROUND_Y / 2;
        ctx.beginPath();
        ctx.moveTo(screenX - 9, midY - 14);
        ctx.lineTo(screenX, midY - 24);
        ctx.lineTo(screenX + 9, midY - 14);
        ctx.moveTo(screenX - 9, midY + 14);
        ctx.lineTo(screenX, midY + 24);
        ctx.lineTo(screenX + 9, midY + 14);
        ctx.stroke();
        ctx.restore();
        continue;
      }

      if (o.type === 'shipPortal' || o.type === 'ballPortal' || o.type === 'cubePortal') {
        const screenX = o.worldX - distance;
        if (screenX > W + 20 || screenX < -20) continue;
        const color = o.type === 'shipPortal' ? '#4ff2ff' : o.type === 'ballPortal' ? '#39ff8a' : '#ff3df0';
        const label = o.type === 'shipPortal' ? 'S' : o.type === 'ballPortal' ? 'B' : 'C';
        ctx.save();
        ctx.globalAlpha = o.passed ? 0.35 : 0.9;
        ctx.shadowColor = color;
        ctx.shadowBlur = 24;
        const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
        grad.addColorStop(0, color);
        grad.addColorStop(1, '#0a0a12');
        ctx.fillStyle = grad;
        ctx.fillRect(screenX - 6, 0, 12, GROUND_Y);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Orbitron, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, screenX, GROUND_Y / 2 + 6);
        ctx.restore();
        continue;
      }

      if (o.type === 'orb') {
        const pos = orbScreenPos(o);
        if (pos.x > W + 30 || pos.x < -30) continue;
        const pulse = 0.75 + 0.25 * Math.sin(distance * 0.02 + o.worldX * 0.01);
        ctx.save();
        ctx.globalAlpha = o.used ? 0.35 : pulse;
        ctx.shadowColor = '#ffe14f';
        ctx.shadowBlur = 20;
        const grad = ctx.createRadialGradient(pos.x, pos.y, 2, pos.x, pos.y, o.radius);
        grad.addColorStop(0, '#fff8d0');
        grad.addColorStop(1, '#ffe14f');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, o.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
        continue;
      }

      if (o.type === 'coin') {
        if (o.collected) continue;
        const cx = o.worldX - distance;
        const cy = (o.side === 'ceil') ? CEIL_Y + o.height : GROUND_Y - o.height;
        if (cx > W + 30 || cx < -30) continue;
        const pulse = 0.85 + 0.15 * Math.sin(distance * 0.02 + o.worldX * 0.01);
        ctx.save();
        ctx.globalAlpha = pulse;
        ctx.shadowColor = '#ffc72c';
        ctx.shadowBlur = 20;
        const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, o.radius);
        grad.addColorStop(0, '#fff8d0');
        grad.addColorStop(1, '#ffc72c');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, o.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
        continue;
      }

      if (o.type === 'movingSpike') {
        const screenX = o.worldX - distance;
        if (screenX > W + 40 || screenX < -40) continue;
        const cy = movingSpikeY(o);
        const s = o.size;
        ctx.save();
        ctx.shadowColor = '#c04fff';
        ctx.shadowBlur = 22;
        const grad = ctx.createRadialGradient(screenX, cy, 2, screenX, cy, s);
        grad.addColorStop(0, '#eeddff');
        grad.addColorStop(1, '#a020e8');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(screenX, cy - s);
        ctx.lineTo(screenX + s * 0.55, cy);
        ctx.lineTo(screenX, cy + s);
        ctx.lineTo(screenX - s * 0.55, cy);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
        continue;
      }

      const r = obstacleScreenRect(o);
      if (r.x > W + 10 || r.x + r.w < -10) continue;
      ctx.save();
      ctx.shadowColor = '#ff3df0';
      ctx.shadowBlur = 16;
      const ceilSide = (o.side || 'floor') === 'ceil';
      if (o.type === 'spike') {
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.h);
        if (ceilSide) {
          grad.addColorStop(0, '#7a0068');
          grad.addColorStop(0.85, '#ff3df0');
          grad.addColorStop(1, '#fff');
        } else {
          grad.addColorStop(0, '#fff');
          grad.addColorStop(0.15, '#ff3df0');
          grad.addColorStop(1, '#7a0068');
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ceilSide) {
          ctx.moveTo(r.x, r.y);
          ctx.lineTo(r.x + r.w / 2, r.y + r.h);
          ctx.lineTo(r.x + r.w, r.y);
        } else {
          ctx.moveTo(r.x, r.y + r.h);
          ctx.lineTo(r.x + r.w / 2, r.y);
          ctx.lineTo(r.x + r.w, r.y + r.h);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (o.type === 'pad') {
        ctx.shadowColor = '#39ff8a';
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.h);
        grad.addColorStop(0, '#eaffdb');
        grad.addColorStop(1, '#39ff8a');
        ctx.fillStyle = o.triggered ? 'rgba(57,255,138,0.3)' : grad;
        ctx.fillRect(r.x, r.y, r.w, r.h);
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(r.x + 1, r.y + 1, r.w - 2, r.h - 2);
        ctx.beginPath();
        if (ceilSide) {
          ctx.moveTo(r.x + r.w / 2, r.y + r.h + 12);
          ctx.lineTo(r.x + r.w * 0.22, r.y + r.h - 2);
          ctx.lineTo(r.x + r.w * 0.78, r.y + r.h - 2);
        } else {
          ctx.moveTo(r.x + r.w / 2, r.y - 12);
          ctx.lineTo(r.x + r.w * 0.22, r.y + 2);
          ctx.lineTo(r.x + r.w * 0.78, r.y + 2);
        }
        ctx.closePath();
        ctx.fillStyle = o.triggered ? 'rgba(57,255,138,0.3)' : '#39ff8a';
        ctx.fill();
      } else {
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.h);
        grad.addColorStop(0, '#4ff2ff');
        grad.addColorStop(1, '#0f7a86');
        ctx.fillStyle = grad;
        ctx.fillRect(r.x, r.y, r.w, r.h);
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(r.x + 1, r.y + 1, r.w - 2, r.h - 2);
      }
      ctx.restore();
    }
  }

  function drawFinishGate() {
    if (mode !== 'level' || !currentLevel) return;
    const screenX = currentLevel.length - distance;
    if (screenX > W + 20 || screenX < -20) return;
    ctx.save();
    ctx.shadowColor = '#ffe14f';
    ctx.shadowBlur = 26;
    const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
    grad.addColorStop(0, '#ffe14f');
    grad.addColorStop(1, '#ff3df0');
    ctx.fillStyle = grad;
    ctx.fillRect(screenX - 4, 0, 8, GROUND_Y);
    ctx.restore();
  }

  function drawCheckpointMarker() {
    if (mode !== 'level' || levelPlayMode !== 'practice' || !practiceCheckpoint) return;
    const screenX = practiceCheckpoint.distance - distance;
    if (screenX > W + 20 || screenX < -20) return;
    ctx.save();
    ctx.shadowColor = '#ffe14f';
    ctx.shadowBlur = 18;
    ctx.strokeStyle = '#ffe14f';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(screenX, 0);
    ctx.lineTo(screenX, GROUND_Y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawBursts() {
    for (const parts of bursts) {
      for (const p of parts) {
        if (p.life <= 0) continue;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        const s = 6 * p.life;
        ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
        ctx.restore();
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawBackground(effectivePhysics() !== 'cube' ? 1 : gravityDir);
    drawTrail();
    drawFinishGate();
    drawCheckpointMarker();
    drawObstacles();
    drawPlayer();
    drawBursts();
  }

  function renderEditor() {
    distance = editorScroll;
    const lengthVal = getEditorLength();

    ctx.clearRect(0, 0, W, H);
    drawBackground(1);

    const finishX = lengthVal - editorScroll;
    if (finishX > -20 && finishX < W + 20) {
      ctx.save();
      ctx.shadowColor = '#ffe14f';
      ctx.shadowBlur = 26;
      const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
      grad.addColorStop(0, '#ffe14f');
      grad.addColorStop(1, '#ff3df0');
      ctx.fillStyle = grad;
      ctx.fillRect(finishX - 4, 0, 8, GROUND_Y);
      ctx.restore();
    }

    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '11px Orbitron, sans-serif';
    for (let wx = 0; wx <= lengthVal; wx += 200) {
      const sx = wx - editorScroll;
      if (sx < -20 || sx > W + 20) continue;
      ctx.beginPath();
      ctx.moveTo(sx, GROUND_Y - 10);
      ctx.lineTo(sx, GROUND_Y + 10);
      ctx.stroke();
      ctx.fillText(String(wx), sx + 3, GROUND_Y - 14);
    }
    ctx.restore();

    drawObstacles();

    if (editorHoverX !== null && editorTool !== 'erase') {
      const worldX = Math.round((editorHoverX + editorScroll) / 10) * 10;
      const ghosts = buildGhostObstacles(editorTool, worldX);
      const real = obstacles;
      obstacles = ghosts;
      ctx.save();
      ctx.globalAlpha = 0.45;
      drawObstacles();
      ctx.restore();
      obstacles = real;
    }

    ctx.save();
    ctx.fillStyle = '#4ff2ff';
    ctx.font = '14px Orbitron, sans-serif';
    ctx.shadowColor = '#4ff2ff';
    ctx.shadowBlur = 6;
    ctx.fillText('EDITOR - ' + Math.round(editorScroll) + ' / ' + lengthVal, 16, 24);
    ctx.restore();
  }

  function loop(now) {
    let dt = (now - lastTime) / 1000;
    lastTime = now;
    dt = Math.min(dt, 1 / 30);

    if (state === 'editor') {
      renderEditor();
      requestAnimationFrame(loop);
      return;
    }

    update(dt);
    updateBursts(dt);
    render();

    if (state === 'playing' && mode !== 'level') {
      scoreEl.textContent = Math.floor(distance / 10);
    }

    requestAnimationFrame(loop);
  }

  resize();
  resetPlayer();
  renderRarityLegend();
  renderMenu();
  updateMuteBtn();
  if (window.NeonAudio) NeonAudio.setTheme(NeonAudio.THEMES.menu);
  requestAnimationFrame(loop);
})();
