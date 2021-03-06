//Intro Window
var launchWindow = Ti.UI.createWindow({
	title: "Renaissance: Revisited",
	backgroundColor: "#0075B2"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: launchWindow
});

//Title View
var title = Ti.UI.createView({
	backgroundColor: "#FF9E0B",
	height: 50,
	width: "100%",
	top: 20
});

//Name Label
var nameLabel = Ti.UI.createLabel({
	text: "VFW1505-01, Beau Burchfield",
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	top: 100
});

//Title Label

var titleText = Ti.UI.createLabel({
	text: "Renaissance: Revisited",
	color: "#fff",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});
var titleTextShadow = Ti.UI.createLabel({
	text: "Renaissance: Revisited",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 10,
	left: 21
});


//Gallery View
var galleryButton = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	width: 300,
	borderRadius: 50,
	//top: welcome.top + welcome.height + 20
	bottom: 30
});

//Gallery Button Label
var gallerybuttonText = Ti.UI.createLabel({
	text: "View Gallery",
	color: "#000",
	font: {fontSize: 40, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

//Data View
var dataButton = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	width: 300,
	borderRadius: 50,
	//top: welcome.top + welcome.height + 20
	bottom: galleryButton.bottom + galleryButton.height + 30
});

//Data Button Label
var dataButtonText = Ti.UI.createLabel({
	text: "View Data",
	color: "#000",
	font: {fontSize: 40, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

//Custom View
var customButton = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	width: 300,
	borderRadius: 50,
	//top: welcome.top + welcome.height + 20
	bottom: (galleryButton.bottom + galleryButton.height)*2 + 30
});

//Custom Button Label
var customButtonText = Ti.UI.createLabel({
	text: "Frame Changer",
	color: "#000",
	font: {fontSize: 35, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

//Loading additional JS files
var loadGalleryCode = require("gallerycode");
var loadDataCode = require("datacode");
var loadCustomCode = require("customcode");

title.add(titleTextShadow, titleText);
customButton.add(customButtonText);
dataButton.add(dataButtonText);
galleryButton.add(gallerybuttonText);
launchWindow.add(nameLabel, title, galleryButton, dataButton, customButton);
navWindow.open();
