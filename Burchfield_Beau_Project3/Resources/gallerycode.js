//Platform Size and Thumbnail Spacing
var pWidth = Ti.Platform.displayCaps.platformWidth,
	pHeight = Ti.Platform.displayCaps.platformHeight,
	itemCount = 30,
	rowCount = 4,
	margin = 10,
	canvasWidth = pWidth - margin * (rowCount+1),
	size = canvasWidth / rowCount;
	
//Accessing Images
var images = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images"),
	imageList = images.getDirectoryListing();
	console.log(imageList);

//Create New Window
var newWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		backgroundColor: "#16471f"
	});

	//Title Bar
	var titleBar = Ti.UI.createView({
		backgroundColor: "#333333",
		top: 20,
		height: 50
	});
	
	//Title Bar Text
	var titleText = Ti.UI.createLabel({
		text: "Morihei Ueshiba",
		color: "#fff",
		textAlign: "center",
		font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"}
	});
	
	//Border
	var border = Ti.UI.createView({
		backgroundColor: "#000",
		top: titleBar.top + titleBar.height,
		height: 1
	});
	
	//Back Button
	var backButton = Ti.UI.createLabel({
		backgroundColor: "#fff",
		text: "Back",
		color: "#000",
		height: 50,
		font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
		bottom: 0,
		width: "50%",
		borderRadius: 25,
		textAlign: "center"
	});
	
	//Container
	var container = Ti.UI.createScrollView({
		width: pWidth,
		contentWidth: pWidth,
		top: titleBar.top + titleBar.height + border.height,
		height: pHeight + titleBar.top - titleBar.height - backButton.height,
		showVerticalScrollIndicator: true,
		backgroundColor: "#5e5639",
		layout: "horizontal"
	});
	
	//Create Thumbnails
	for (var i = 0; i < imageList.length; i++){
		var thumbNail = Ti.UI.createView({
			backgroundColor: "#000",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderRadius: 10
		});
		
		//Image View for Thumbnails
		var newImage = Ti.UI.createImageView({
			image: "images/" + imageList[i],
			top: 0,
			width: thumbNail.width*2,
			height: thumbNail.width*2,
			borderRadius: 10
		});
		
		thumbNail.add(newImage);
		container.add(thumbNail);
	};
	
	//Event Propagation
	container.addEventListener("click", function(event){
		getPicture(event.source.image);
	});
	
	//Closes Window
	var exitWindow = function(){
		galleryWindow.close();
	};
	
	//Code
	backButton.addEventListener("click", exitWindow);
	
	titleBar.add(titleText);
	galleryWindow.add(titleBar, border, container, backButton);
	galleryWindow.open();
};

//Open Picture Window
var getPicture = function(dataSource){
	var pictureWindow = Ti.UI.createWindow({
		backgroundColor: "#16471f"
	});
	
	//Title Bar
	var titleBar = Ti.UI.createView({
		backgroundColor: "333333",
		top: 20,
		height: 50
	});
	
	//Title Bar Text
	var titleText = Ti.UI.createLabel({
		text: "Morihei Ueshiba",
		color: "#fff",
		textAlign: "center",
		font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"}
		});
		
		//Picture View
		var newImage = Ti.UI.createImageView({
			image: dataSource,
			top: 80,
			bottom: 100,
			left: 10,
			right: 10,
			borderRadius: 10
		});
		
		//Picture Label
		var pictureLabel = Ti.UI.createLabel({
			backgroundColor: "#333333",
			text: dataSource,
			color: "#fff",
			font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
			bottom: 70,
			width: "100%",
			textAlign: "center"
		});
		
		//Border
		var border = Ti.UI.createView({
			backgroundColor: "#000",
			top: titleBar.top + titleBar.height,
			height: 1
		});
		
		//Close Button
		var closeButton = Ti.UI.createLabel({
			backgroundColor: "#fff",
			text: "Close",
			color: "#000",
			height: 50,
			font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
			bottom: 0,
			width: "50%",
			borderRadius: 25,
			textAlign: "center"
		});
		
		//Close Window
		var exitWindow = function(){
			pictureWindow.close();
		};
		
		//Code
		closeButton.addEventListener("click", exitWindow);
		titleBar.add(titleText);
		pictureWindow.add(titleBar, border, closeButton, pictureLabel, newImage);
		pictureWindow.open();
};

introButton.addEventListener("click", newWindow);
