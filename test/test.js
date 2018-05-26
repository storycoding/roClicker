const assert = require('assert');
const cards = require('../cards.js').units;

describe('cards', function() {

	for (let key in cards) {

		describe(key, function() {
		  it('The formula should return the same values as the sequence', function() {
		  		let seq = cards[key].sequence
		  		for (var i = 0; i < seq.length; i++) {
		  			assert.equal(cards[key].formula(i+1), seq[i]);
		  		}
		  });
		});
	}

});