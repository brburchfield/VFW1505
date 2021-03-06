var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryImages = imageList.getDirectoryListing();

var painting = [
	{title: "Fresco", description: "Fresco is a technique of mural painting executed upon freshly-laid, or wet lime plaster. Water is used as the vehicle for the pigment to merge with the plaster, and with the setting of the plaster, the painting becomes an integral part of the wall.", picture: "images/zzz1.jpg"},
	{title: "Egg Tempera", description: "The egg tempera painting technique was the main method of applying paint to panel throughout the early renaissance. As the title suggests the pigment is mixed with egg, using the white of the egg or the yolk results in different effects, the mixture is fast drying and permanent.", picture: "images/zzz2.jpg"},
	{title: "Oil Painting", description: "The oil painting technique was to become dominant in the 15th and 16th centuries, it has remained as the artists favorite medium only being challenged in the latter years of the twentieth century by the advent of acrylic paint." +
	" Artists working in tempera found that their colours lacked the covering power of oils while the fresco painter was unable to make alterations to his work.", picture: "images/zzz3.jpg"}
];

var masterView = Ti.UI.createTableView({
	top: 10,
	bottom: 10,
});

if(Ti.Platform.name === "iPhone OS"){
	masterView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

var paintingSection = Ti.UI.createTableViewSection({
	headerTitle: "Types of Paint Styles",
	footerTitle: "http://www.italian-renaissance-art.com/"
});

var mainWindow = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "Data",
		backgroundColor: "#0075B2"
	});


	masterView.add(paintingSection);
	dataWindow.add(masterView);
	navWindow.openWindow(dataWindow);
};
//Begin getDetail Function
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#0075B2"
	});

		var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#0075B2",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		textAlign: "center"
	});
	
	var detailPicture = Ti.UI.createImageView({
		image: this.picture,
		left: 10,
		right: 10
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 20, fontFamily: "Helvetica"},
		color: "#fff",
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10,
		bottom: -150,
		textAlign: "center"
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#FF9E0B",
		color: "#fff",
		height: 50,
		font: {fontSize: 18, fontFamily: "Helvetica"}, 
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});

	var closeWindow = function(){
		//detailWindow.close();
		navWindow.closeWindow(detailWindow);
	};

	closeButton.addEventListener("click", closeWindow);

	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton, detailPicture);
	
	navWindow.openWindow(detailWindow);
};
//End getDetail Function


for(var i=0, j=painting.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: painting[i].title,
		desc:  painting[i].description,
		hasChild: true
	});
	paintingSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

var firstSection = [paintingSection];

masterView.setData(firstSection);
dataButton.addEventListener("click", mainWindow);
