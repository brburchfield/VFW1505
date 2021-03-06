//Using a For, in loop to retrieve values in an object

var data = {
	"nouns":{
		"headTitle": "Nouns",
		"footTitle": "English and Spanish",
		"words": [
			{
				"eng": "Desk",
				"esp": "El Escritorio"
			},
			{	
				"eng": "Computer",
				"esp": "La Computadora"
			},
			{
				"eng": "Building",
				"esp": "El Edificio"	
			}
		]
	},
	"verbs": {
		"headTitle": "Verbs",
		"footTitle": "English and Spanish",
		"words": [
			{
				"eng": "to sleep",
				"esp": "dormir"
			},
			{
				"eng": "to wake",
				"esp": "despertar"
			}
		]
	}
};

for(var n in data){
	console.log(data[n]);
	for(var item in data[n]){
		console.log(data[n][item]);
		if(item === "words"){
			for(var i=0; i<data[n][item].length; i++){
				for(var itemWords in data[n][item][i]){
					console.log(data[n][item][i][itemWords]);
				}
			}
		}
	}
}


//Using Modularization to retrieve and send data between files.
var loadFile = require("app2_link");

//Retrieving data from app2_link
console.log(loadFile.myMessage);


//sending data to, then receiving data from, app2_link
loadFile.secondMessage("Second Message");

