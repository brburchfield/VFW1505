Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#6b3939"
});

//Main Title View
var launchView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 5,
	borderwidth: 1,
	height: 250,
	top: 100,
	left: 20,
	right: 20
});

//Main Title Label
var launchViewText = Ti.UI.createLabel({
	text: " Five Great Quotes from Five Great Minds",
	color: "#000",
	font: {fontSize: 42, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 40,
	left: 30,
	right: 20
});

//Main Title Button
var launchButton = Ti.UI.createView({
	backgroundColor: "#31dd25",
	borderRadius: 20,
	borderWidth: 1,
	top: 370,
	height: 50,
	left: 20,
	right: 20
});

//Main Title Button Label
var launchButtonText = Ti.UI.createLabel({
	text: "Let's Get Started",
	color: "#fff",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 7,
	left: 50,
});

//Label Drop-Shadow
var launchButtonTextShadow = Ti.UI.createLabel({
	text: "Let's Get Started",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 9,
	left: 52,
});

var LoadFile = require("displayOptions");

launchView.add(launchViewText);
launchButton.add(launchButtonTextShadow, launchButtonText);
mainWindow.add(launchView, launchButton);
mainWindow.open();

