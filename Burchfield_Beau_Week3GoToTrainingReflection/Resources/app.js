var platformWidth = Ti.Platform.displayCaps.platformWidth;
console.log(platformWidth);

var win = Ti.UI.createWindow({
	backgroundColor: "white",
	backgroundImage: "EGYPT-C-PATTERN.png",
	orientationModes: [
	Ti.UI.PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,
	Ti.UI.UPSIDE_PORTRAIT
	],
	layout: "vertical"
});

//var images = ["mononoke.jpg", "nausicaa.jpg", "spiritedaway.jpg", "poppyhill.jpg"]; 

var images = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageList = images.getDirectoryListing();
console.log(imageList);

for(var i = 0; i < imageList.length; i++){
	var image = Ti.UI.createImageView({
		image: "images/" +imageList[i],
		top: 20
	});
	win.add(image);
};

win.open();