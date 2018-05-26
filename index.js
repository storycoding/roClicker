const easy = (lvl) => 1 + lvl;

const medium = function(lvl) {
  let cost = 0;
  let accumulator = 0;

  for(let i = 0; i < lvl; i++) {
    cost += accumulator;
    accumulator += 2;
  }
  return cost + lvl;}

const hard = function(lvl) {
  let cost = 1;
  
  for(let i = 0; i < lvl; i++) {
    cost = cost * 2;
  }

  return cost;}

const costToLvl = function(lvl, expType) {
  let total = 0;

  for(let i = 0; i < lvl; i++) {
    total += expType(i);
  }

  return total;}

const units = {
  garm : {
    formula: (lvl) =>  (lvl * 5),
    sequence: [5, 10, 15, 20, 25],
    exp: easy
  },

  archangeling : {
    formula: (lvl) =>  (lvl * 5),
    sequence: [5, 10, 15, 20, 25],
    exp: easy
  },

  angeling : {
    formula: (lvl) =>  (lvl * 25),
    sequence: [25, 50, 75, 100, 125],
    exp: easy
  },

  detale : {
    formula: (lvl) => (lvl * 50),
    sequence: [50, 100, 150, 200, 250],
    exp: easy
  },

  ifrit : {
    formula: (lvl) => (lvl * 2),
    sequence: [2, 4, 6, 8, 10],
    exp: easy
  },

  baphomet : {
    formula: (lvl) => (lvl * 20),
    sequence: [20, 40, 60, 80, 100],
    exp: easy
  },

  doppelganger : {
    formula: (lvl) => (lvl * 15),
    sequence: [15, 30, 45, 60, 75],
    exp: easy
  },

  moonlight : {
    formula: (lvl) => (lvl * 0.32),
    sequence: [32, 64, 95, 126, 157],
    exp: medium
  },

  mistress: {
    formula: (lvl) => (lvl * 1),
    sequence: [99, 196, 291, 384, 475],
    exp: medium
  },

  eddga: {
    formula: (lvl) => (lvl * 0.9),
    sequence: [9, 19, 29, 38, 47],
    exp: medium
  },

  thanatos: {
    formula: (lvl) => (lvl * 3.05),
    sequence: [305, 398, 489, 579, 666],
    exp: medium
  },

  phreeoni: {
    formula: (lvl) => (lvl * 0.85),
    sequence: [85, 109, 132, 156, 179],
    exp: medium
  },

  bacsojin: {
    formula: (lvl) => (lvl * 1),
    sequence: [100, 197, 290, 381, 469],
    exp: medium
  },

  maya: {
    formula: (lvl) => (lvl * 64),
    sequence: [64, 83, 103, 121, 140],
    exp: medium
  },

  drake: {
    formula: (lvl) => (lvl * 3.79),
    sequence: [379, 758, 1136, 1513, 1890],
    exp: medium
  },

  atroce: {
    formula: (lvl) => (lvl * 0.01),
    sequence: [0.01, 0.02, 0.03, 0.04, 0.05],
    exp: medium
  },

  atroce: {
    formula: (lvl) => (lvl * 0.01),
    sequence: [0.01, 0.02, 0.03, 0.04, 0.05],
    exp: medium
  },

  lordOfDeath: {
    formula: (lvl) => (lvl * 25.10),
    sequence: [2510, 3010, 3510, 4010, 4510],
    exp: medium
  },

  humans: {
    formula: (lvl) => (lvl * 2),
    sequence: [2, 4, 6, 8, 10],
    exp: hard
  }};