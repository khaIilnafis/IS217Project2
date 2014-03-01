exports = module.exports = {};

exports.squareRT = function(num){
	return Math.sqrt(num);
}

exports.rootDivision = function(num){
	var temp = this.squareRT(num);
	if(temp%2 ==0 ){
		return "Perfect";
	}else{
		return "Try again";
	}
}

exports.rootCounting = function(num){
	var temp = this.squareRT(num);

	for(var i = 0; i<=temp; i++){
		var counter = i;
	}

	return counter;
}
exports.rootNothing = function(){
	var root = new Array();
	return root;
}
exports.rootNum = function(){
	return 96;
}

var bar = null;

var rootString = 'Hellloooooo';

var rootLogic = true; 