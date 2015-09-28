var data = [	
	"Airplane",
	"Bank",
	"Beach",
	"Circus",
	"Party",
	"Army",
	"Casino",
	"Spa",
	"Hospital",
	"Hotel",
	"Cruise Ship",
	"Court House",
	"Movie Studio",
	"Library",
	"Train",
	"Pirate Ship",
	"Space Station",
	"Police Station",
	"Restaurant",
	"School",
	"Gas Station",
	"Submarine",
	"Supermarket",
	"Theater",
	"University"
];
//get input
var playerNumSelector, 
	playerNum, 
	positionNumSelector, 
	positionNum, 
	seed,
	players;

var SECRET_LOCATION;
var SPY = "You are the Spy."

function fieldOp(){
	seed = document.getElementById("seed").value;
	Math.seedrandom(seed);
	var location = data[Math.floor(Math.random() * data.length)];
	alert("Secret location: '"+location+"'.");
}
function getValues(){
	
}

function spy(){
	alert("Objective: Figure out the location!");
}