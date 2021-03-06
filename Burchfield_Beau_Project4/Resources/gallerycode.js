var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryImages = imageList.getDirectoryListing();

var painting = Ti.UI.createImageView({
	image: "images/" + galleryImages[0],
	bottom: 200
});

var imageView = function(){
	var currentPainting = imageView;
	var randomPainting = Math.floor(Math.random()*galleryImages.length);
	while(currentPainting === randomPainting){
		var randomPainting = Math.floor(Math.random()*galleryImages.length);
	};
	painting.image = "images/" + galleryImages[randomPainting];
};

var nextButton = Ti.UI.createView({
	backgroundColor: "#FF9E0B",
	height: 80,
	bottom: 5,
	left: 10,
	right: 10,
	borderRadius: 40
});

var nextButtonText = Ti.UI.createLabel({
	color: "#fff",
	text: "View Next Painting",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

var mainWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#0075B2"
	});
	nextButton.add(nextButtonText);
	galleryWindow.add(nextButton, painting);
	navWindow.openWindow(galleryWindow);
};

nextButton.add(nextButtonText);
nextButton.addEventListener("click", imageView);
galleryButton.addEventListener("click", mainWindow);
