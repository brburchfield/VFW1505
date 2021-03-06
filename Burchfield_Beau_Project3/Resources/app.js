Ti.UI.setBackgroundColor("#000");

//Intro Window
var introWindow = Ti.UI.createWindow({
	backgroundColor: "#16471f"
});

//Welcome View
var welcome = Ti.UI.createView({
	backgroundColor: "#4f4f4f",
	height: 500,
	width: "100%",
	top: 20
});

//Title Label

var titleText = Ti.UI.createLabel({
	text: "Morihei Ueshiba",
	color: "#fff",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	top: 25
});

//Welcome Label
var welcomeText = Ti.UI.createLabel({
	
	text: "Morihei Ueshiba (植芝 盛平, December 14, 1883–April 26, 1969) was" +
	" a famous Japanese martial artist and founder of Aikido. He is often" +
	"  referred to as Kaiso (開祖, founder), or Ōsensei (大先生/翁先生, Great Teacher)." +
	" After working as an instructor for the japanese army, O Sensei founded" +
	" the Kobukan Dojo in 1931, in Tokyo, where he created the art of Aikido." +
	" He is also known for writing 'The Art of Peace', a book written to" +
	" detail and teach morality and a peaceful lifestyle. \n \n As an Aikido" +
	" practitioner and instructor, I look up to this man a great deal. For this" +
	" reason, I chose to use him as the focus of this gallery.",
	
	
	color: "#fff",
	font: {fontSize: 12, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	left: 20,
	right: 20,
	top: 85
});

//Intro Button View
var introButton = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	width: 300,
	borderRadius: 50,
	//top: welcome.top + welcome.height + 20
	bottom: 30
});

//Intro Button Label
var buttonText = Ti.UI.createLabel({
	text: "View Gallery",
	color: "#000",
	font: {fontSize: 40, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

//Loading gallerycode.js
var loadFile = require("gallerycode");

welcome.add(titleText, welcomeText);
introWindow.add(welcome, introButton);
introButton.add(buttonText);
introWindow.open();
