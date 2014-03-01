var expect = require("chai").expect;
var hw = require("../lib/homework.js");


describe("hw", function(){
	describe("#squareRT()", function(){
		it("should return the squareRT of numbers entered", function(){
			var args = [64];
			var results = hw.squareRT(args);

			expect(results).to.equal(8);
		});
	});
});
describe("#rootDivision()", function(){
	it("should return Perfect if the squareRT entered is a multiple of 2", function(){
		var args = [144];
		var results = hw.rootDivision(args);

		expect(results).to.have.length(7);
	});
});
describe("#rootCounting()", function(){
	it("should count the numbers from 0 to the squareRT of the number entered", function(){
		var args = [144];
		var results = hw.rootCounting(args);

		expect(results).to.be.within(0,13);
	})
})
describe("#rootNothing()", function(){
	it("should return nothing", function(){
		var results = hw.rootNothing();

		expect(results).to.be.empty;
	})
})
describe("#bar", function(){
	it("should be a variable set to null", function(){
		var results = hw.bar;

		expect(results).to.not.exist;
	})
})

//Test that will be errors

describe("#rootString", function(){
	it("should be a string", function(){

	var results = hw.rootString;

	expect(results).to.equal('string');
	});
})

describe("#rootLogic", function(){
	it("should be false", function(){

	var results = hw.rootLogic;

	expect(results).to.be(false);
	});
})

describe("#rootNum", function(){
	it("should be a number below the value entered", function(){

	var results = hw.rootNum();

	expect(results).to.be.below(95);
	});
})
