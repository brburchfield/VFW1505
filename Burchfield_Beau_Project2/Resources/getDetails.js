

//Begin getDetail Function
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});

		var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 20, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10,
		textAlign: "center"
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 18, fontFamily: "Arial"}, 
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
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	
	navWindow.openWindow(detailWindow);
};
//End getDetail Function


for(var i=0, j=painters.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: painters[i].title,
		desc:  painters[i].description,
		hasChild: true
	});
	paintersSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

for(var i=0, j=composers.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: composers[i].title,
		desc:  composers[i].description,
		hasChild: true
	});

	composersSection.add(theRow);
	theRow.addEventListener("click", getDetail);

}


var mastersSections = [paintersSection, composersSection];

masterView.setData(mastersSections);//goes back in named place