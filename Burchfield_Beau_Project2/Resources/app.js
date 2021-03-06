Titanium.UI.setBackgroundColor('#000');


var painters = [
	{title: "Leonardo Da Vinci", description: "Leonardo di ser Piero da Vinci was an Italian polymath, painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived."},
	{title: "Michaelango", description: "Michelangelo di Lodovico Buonarroti Simoni was an Italian sculptor, painter, architect, poet, and engineer of the High Renaissance who exerted an unparalleled influence on the development of Western art. Considered as the greatest living artist in his lifetime, he has since been held as one of the greatest artists of all time."},
	{title: "Donatello", description: "Donato di Niccolò di Betto Bardi was an early Renaissance sculptor from Florence. He is, in part, known for his work in bas-relief, a form of shallow relief sculpture that, in Donatello's case, incorporated significant 15th-century developments in perspectival illusionism."},
	{title: "Raphael", description: "Raffaello Sanzio da Urbino was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur."}
];

var composers = [
	{title: "Thomas Tallis", description: "Thomas Tallis, an English composer, flourished as a church musician, and is considered one of the church's best early composers. Tallis served under four English Monarchs and was treated very well. Queen Elisabeth granted him and his pupil, William Boyd, exclusive rights to use England's printing press to publish music; a first of its time."},
	{title: "Josquin Des Prez", description: "Widely recognized by just his first name, Josquin Des Prez was Europe's most sought after musician during his lifetime. His popularity, no doubt, was a result of combining many contemporary styles of music, his originality, and his ability to unveil the meaning and emotions of a text through music."},
	{title: "Pierre de La Rue", description: "Pierre de La Rue wrote many styles of music, almost as much as Josquin. La Rue's repertoire consists entirely of vocal music. His style of voicing shows that he preferred low voices, often composing C's and B flats below the bass clef. His most popular work, the Requiem, and one of the earliest surviving Requiem masses, emphasizes the lower voices."},
	{title: "Claudio Monteverdi", description: "Linking the Renaissance to the Baroque, Claudio Monteverdi's revolutionary music included the first dramatic opera, Orfeo. Much of Monteverdi's early years were spent composing madrigals; nine books in total. These books clearly mark the change in thinking and compositional style between the two periods."}
];



var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});


var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Renaissance Masters",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	textAlign: "center"
});

var masterView = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	masterView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var paintersSection = Ti.UI.createTableViewSection({
	headerTitle: "Painters",
	footerTitle: "Masters of the Brush"
});

var composersSection = Ti.UI.createTableViewSection({
	headerTitle: "Composers",
	footerTitle: "Masters of the Note"
});

var loadFile = require("getDetails");
titleView.add(titleLabel);
mainWindow.add(titleView, border, masterView);
navWindow.open();
