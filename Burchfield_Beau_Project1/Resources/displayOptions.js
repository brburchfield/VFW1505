var quotes = [
"1. “Be there for others, but never leave yourself behind.” -Dodinsky",
"2. “Do what you must, And your friends will adjust.” -Robert Brault",
"3. “Just let awareness have its way with you completely.” -Scott Morrison",
"4. “We must be our own before we can be another’s.” -Ralph Waldo Emerson",
"5. “This above all: to thine own self be true.” -William Shakespeare"
];


var listOptions = function(){
	launchViewText.hide();
	launchButton.hide();
	launchViewText = null;
	launchButton = null;
	
	var arrayNumber = 0;
	
	//Main Text
	var mainViewText = Ti.UI.createLabel({
	text: quotes[arrayNumber],
	color: "#000",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 40,
	left: 30,
	right: 20
		
	});
	
	//Next Button View
	var nextButton = Ti.UI.createView({
	backgroundColor: "#31dd25",
	borderRadius: 20,
	borderWidth: 1,
	top: 370,
	height: 50,
	left: 200,
	right: 20
	});
	
	//Next Button Label
	var nextButtonLabel = Ti.UI.createLabel({
	text: "Next",
	color: "#fff",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 7,
	left: 40,
	});
	
	//Next Button Label Shadow
	var nextButtonLabelShadow = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 9,
	left: 42,
	});
	
	//Back Button View
	var backButton = Ti.UI.createView({
	backgroundColor: "#31dd25",
	borderRadius: 20,
	borderWidth: 1,
	top: 370,
	height: 50,
	left: 20,
	right: 200
	});
	
	//Back Button Label
		var backButtonLabel = Ti.UI.createLabel({
	text: "Back",
	color: "#fff",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 7,
	left: 40,
	});
	
	//Back Button Label Shadow
		var backButtonLabelShadow = Ti.UI.createLabel({
	text: "Back",
	color: "#000",
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	top: 9,
	left: 42,
	});
	
	
	
	backButton.add(backButtonLabelShadow, backButtonLabel);
	nextButton.add(nextButtonLabelShadow, nextButtonLabel);
	launchView.add(mainViewText);
	mainWindow.add(nextButton, backButton);
	
	var nextClick = function(){
		arrayNumber = arrayNumber+1;
		if(arrayNumber>4){
			arrayNumber=0;
		};
		mainViewText.text = quotes[arrayNumber];
		return arrayNumber;
	};
	
		var backClick = function(){
		arrayNumber = arrayNumber-1;
		if(arrayNumber<0){
			arrayNumber=4;
		};
		mainViewText.text = quotes[arrayNumber];
		return arrayNumber;
	};
	
	
	
nextButton.addEventListener("click", nextClick);
backButton.addEventListener("click", backClick);

};



launchButton.addEventListener("click", listOptions);