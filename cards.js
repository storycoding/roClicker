const exp = require ('./expFormulas.js');

const round = function(number) {
  let factor = Math.pow(10, 2);
  return Math.round(number * factor) / factor;
}

const units = {
  garm : {
    formula: (lvl) =>  (lvl * 5),
    sequence: [ 50, 100, 150, 200, 250 ], // * 10
    exp: exp.easy
  },

  archangeling : {
    formula: (lvl) => (lvl * 5),
    sequence: [ 250, 488, 717, 936, 1145 ], // * 10
    exp: exp.easy
  },

  angeling : {
    formula: (lvl) =>  (lvl * 25),
    sequence: [25, 50, 75, 100, 125], // CHECK
    exp: exp.easy
  },

  detale : {
    formula: (lvl) => (lvl * 50),
    sequence: [50, 100, 150, 200, 250], // CHECK
    exp: exp.easy
  },

  baphomet : {
    formula: (lvl) => (lvl * 20),
    sequence: [20, 40, 60, 80, 100], // CHECK
    exp: exp.easy
  },

  doppelganger : {
    formula: (lvl) => (lvl * 15),
    sequence: [15, 30, 45, 60, 75],  // CHECK
    exp: exp.easy
  },

  ifrit : {
    formula: (lvl) => (lvl * 2),
    sequence: [20, 40, 60, 80, 100], // * 10
    exp: exp.easy
  },

  phreeoni: {
    formula: (lvl) => round(lvl * 0.24 - (lvl / 24)),
    sequence: [ 2.37, 4.53, 6.47, 8.24, 9.83 ], // * 10
    exp: exp.medium
  },

  eddga: {
    formula: (lvl) => round(lvl * 0.16 - (lvl / 10)),
    sequence: [ 0.90, 1.64, 2.25, 2.75, 3.16 ], // * 10
    exp: exp.medium
  },

  drake: {
    formula: (lvl) => (lvl * 3.79),
    sequence: [ 37.62, 74.50, 110.64, 146.07, 180.80 ], // * 10
    exp: exp.medium
  },

  beelzebub: {
    formula: (lvl) => (lvl * 1.92),
    sequence: [ 17.17, 30.41, 40.61, 48.49, 54.56 ], // * 10
    exp: exp.medium
  },

  bacsojin: {
    formula: (lvl) => (lvl * 1),
    sequence: [ 8.64, 14.80, 19.18, 22.30, 24.51 ], // * 10
    exp: exp.medium
  },

  moonlight : {
    formula: (lvl) => (lvl * 0.32),
    sequence: [ 3.04, 5.72, 8.07, 10.13, 11.94 ], // * 10
    exp: exp.medium
  },

  mistress: {
    formula: (lvl) => (lvl * 1),
    sequence: [ 9.06, 16.48, 22.55, 27.53, 31.60 ], // * 10
    exp: exp.medium
  },

   atroce: {
    formula: (lvl) => (lvl * 0.01),
    sequence: [0.10, 0.20, 0.30, 0.40, 0.50], // * 10
    exp: exp.medium
  },

  lordOfDeath: {
    formula: (lvl) => (lvl * 5),
    sequence: [50, 100, 140, 180, 210], // * 10
    exp: exp.medium
  },

  maya: {
    formula: (lvl) => (lvl * 0.19),
    sequence: [ 1.90, 3.62, 5.18, 6.59, 7.86 ], // * 10
    exp: exp.medium
  },

  thanatos: {
    formula: (lvl) => (lvl * 0.99),
    sequence: [ 9.06, 16.48, 22.55, 27.53, 31.60 ], // * 10
    exp: exp.medium
  },

  humans: {
    formula: (lvl) => (lvl * 2),
    sequence: [2, 4, 6, 8, 10],
    exp: exp.hard
  }

  };

  module.exports = {
    units: units
  };