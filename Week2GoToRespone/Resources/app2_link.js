var msg = "hello";

exports.myMessage = msg;

var func = function(msg2){
	console.log(msg2);
};

exports.secondMessage = func;