try {
  var assert = require('assert');
	var cards = require('../src/cards.js').units;
	var exp = require('../src/expFormulas.js');
}
catch(error) {
	console.log("running tests on the browser")
}


describe('exp formulas', () => {
	describe('exp easy', () => {
		it(
			'The function should return the same value',
			() => assert.equal( exp.easy(99), 100)
		);	
	});

	describe('exp medium', () => {
		it(
			'The function should return the same value',
			() => assert.equal( exp.medium(99), 9801)
		);		
	});

	describe('exp hard', () => {
		it(
			'The function should return the same value',
			() => assert.equal( exp.hard(30), 1073741824)
		);
	});
});


describe('cards', () => {

	for (let key in cards) {
		let seq = cards[key].sequence;
		
		describe(key, () => {

			for (let i = 0; i < seq.length; i++) {
			  it( `${key} lvl ${(i+1) * 10}: function should return same value`,
			  	() => assert.equal(cards[key].formula((i+1) * 10), seq[i]));
			}	

		});
	}

});