
//Slider 1
var explanation = Ti.UI.createLabel({
	text: "Change the color of the Mona Lisa's frame. Try moving the sliders around until the frame is a color you like.",
	top: 20,
	color: "#FF9E0B",
	left: 10,
	right: 10,
	font: {fontSize: 15, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

var explanationshadow = Ti.UI.createLabel({
	text: "Change the color of the Mona Lisa's frame. Try moving the sliders around until the frame is a color you like.",
	top: 21,
	color: "#000",
	left: 11,
	right: 10,
	font: {fontSize: 15, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

var frame = Ti.UI.createView({
	backgroundColor: "#000",
	top: 280,
	bottom: 20,
	left: 80,
	right: 80,
	borderRadius: 20
});

var picture = Ti.UI.createImageView({
	image: "images/704mona-lisa.jpg.pagespeed.ce.j6VF0Ngg30AuSZPnjcYM.jpg",
	top: 300,
	left: 30,
	right: 30,
	bottom: 40,
	borderRadius: 20
});

var slider1 = Titanium.UI.createSlider({
    top: 130,
    min: 1,
    max: 9.9,
    width: '75%',
    value: 1
    });

var label = Ti.UI.createLabel({
    text: slider1.value,
    width: '10%',
    top: slider1.top - 20,
    left: Ti.UI.ALIGNMENT_CENTER,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    backgroundColor: "#fff",
    borderRadius: 10 
    });

slider1.addEventListener('change', function(e) {
    label.text = String.format("%3.1f", e.value);
    var textNumber = label.text*10;
    var textNumber2 = label2.text*10;
    var textNumber3 = label3.text*10;
    frame.backgroundColor = "" + textNumber + textNumber2 + textNumber3 + "";
});

//Slider2
var slider2 = Titanium.UI.createSlider({
    top: 180,
    min: 1,
    max: 9.9,
    width: '75%',
    value: 1
    });

var label2 = Ti.UI.createLabel({
    text: slider2.value,
    width: '10%',
    top: slider2.top - 20,
    left: Ti.UI.ALIGNMENT_CENTER,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    backgroundColor: "#fff",
    borderRadius: 10
    });

slider2.addEventListener('change', function(e) {
    label2.text = String.format("%3.1f", e.value);
    var textNumber = label.text*10;
    var textNumber2 = label2.text*10;
    var textNumber3 = label3.text*10;
    frame.backgroundColor = "" + textNumber + textNumber2 + textNumber3 + "";
});

//Slider3
var slider3 = Titanium.UI.createSlider({
    top: 230,
    min: 1,
    max: 9.9,
    width: '75%',
    value: 1
    });

var label3 = Ti.UI.createLabel({
    text: slider3.value,
    width: '10%',
    top: slider3.top - 20,
    left: Ti.UI.ALIGNMENT_CENTER,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    backgroundColor: "#fff",
    borderRadius: 10
    });

slider3.addEventListener('change', function(e) {
    label3.text = String.format("%3.1f", e.value);
    var textNumber = label.text*10;
    var textNumber2 = label2.text*10;
    var textNumber3 = label3.text*10;
    frame.backgroundColor = "" + textNumber + textNumber2 + textNumber3 + "";
});

var mainWindow = function(){
	var customWindow = Ti.UI.createWindow({
		title: "Frame Changer",
		backgroundColor: "#0075B2"
	});
	customWindow.add(explanationshadow, explanation, slider1, label, slider2, label2, slider3, label3, frame, picture);
	navWindow.openWindow(customWindow);
};
customButton.addEventListener("click", mainWindow);