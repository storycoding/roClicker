const exp = require ('./expFormulas.js');

const duoDecimal = function(number) {
  let factor = Math.pow(10, 2);
  return Math.round(number * factor) / factor;
}

const round = function(number) {
  let factor = Math.pow(10, 0);
  return Math.round(number * factor) / factor;
}

const units = {
  garm : {
    formula: (lvl) =>  (lvl * 5),
    sequence: [ 50, 100, 150, 200, 250 ],
    exp: exp.easy
  },

  archangeling : {
    formula: (lvl) => {
      let val = 0;
      let add = 25;

      for (var i = 1; i <= lvl; i++) {
        val += ( add - Math.floor( i / 10) );
      }

      return val;
    },
    sequence: [ 249, 488, 717, 936, 1145 ],
    exp: exp.easy
  },

  angeling : {
    formula: (lvl) => {
      let val = 0;
      let add = 25;

      for (var i = 1; i <= lvl; i++) {
        val += ( add - Math.floor( i / 10) );
      }
      
      return val;
    },
    sequence: [249, 488, 717, 936, 1145],
    exp: exp.easy
  },

  detale : {
    formula: (lvl) => (lvl * 50),
    sequence: [500, 1000, 1500, 2000, 2500],
    exp: exp.easy
  },

  baphomet : {
    formula: (lvl) => (lvl * 20),
    sequence: [200, 400, 600, 800, 1000],
    exp: exp.easy
  },

  doppelganger : {
    formula: (lvl) => (lvl * 15),
    sequence: [150, 300, 450, 600, 750], 
    exp: exp.easy
  },

  ifrit : {
    formula: (lvl) => (lvl * 2),
    sequence: [20, 40, 60, 80, 100],
    exp: exp.easy
  },

  phreeoni: {
    formula: (lvl) => duoDecimal(lvl * 0.24 - (lvl / 24)),
    sequence: [ 2.37, 4.53, 6.47, 8.24, 9.83 ],
    exp: exp.medium
  },

  eddga: {
    formula: (lvl) => duoDecimal(lvl * 0.16 - (lvl / 10)),
    sequence: [ 0.90, 1.64, 2.25, 2.75, 3.16 ],
    exp: exp.medium
  },

  drake: {
    formula: (lvl) => (lvl * 3.79),
    sequence: [ 37.62, 74.50, 110.64, 146.07, 180.80 ],
    exp: exp.medium
  },

  beelzebub: {
    formula: (lvl) => (lvl * 1.92),
    sequence: [ 17.17, 30.41, 40.61, 48.49, 54.56 ],
    exp: exp.medium
  },

  bacsojin: {
    formula: (lvl) => (lvl * 1),
    sequence: [ 8.64, 14.80, 19.18, 22.30, 24.51 ],
    exp: exp.medium
  },

  moonlight : {
    formula: (lvl) => (lvl * 0.32),
    sequence: [ 3.04, 5.72, 8.07, 10.13, 11.94 ],
    exp: exp.medium
  },

  mistress: {
    formula: (lvl) => (lvl * 1),
    sequence: [ 9.06, 16.48, 22.55, 27.53, 31.60 ],
    exp: exp.medium
  },

   atroce: {
    formula: (lvl) => (lvl * 0.01),
    sequence: [0.10, 0.20, 0.30, 0.40, 0.50],
    exp: exp.medium
  },

  lordOfDeath: {


    formula: (lvl) => {
      let val = 0;
      let add = 5;

      for (var i = 0; i < lvl; i++) {
        let stage = Math.floor( i / 20);
        val += stage < 5 ? (add - stage) : (add - 4);
      }
      
      return val;
    },
    sequence: [50, 100, 140, 180, 210],
    exp: exp.medium
  },

  maya: {
    formula: (lvl) => (lvl * 0.19),
    sequence: [ 1.90, 3.62, 5.18, 6.59, 7.86 ],
    exp: exp.medium
  },

  thanatos: {
    formula: (lvl) => (lvl * 0.99),
    sequence: [ 9.06, 16.48, 22.55, 27.53, 31.60 ],
    exp: exp.medium
  },

  humans: {
    formula: (lvl) => (lvl * 2),
    sequence: [20, 40, 60, 80, 100],
    exp: exp.hard
  }

};

module.exports = {
  units: units
};