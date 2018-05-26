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

module.exports = {
  easy: easy,
  medium: medium,
  hard: hard,
  costToLvl : costToLvl
};