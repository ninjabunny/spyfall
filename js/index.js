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
var playerNumSelector = document.getElementById("playerNum");
var playerNum = playerNumSelector.options[playerNumSelector.selectedIndex].value;
var positionNumSelector = document.getElementById("positionNum");
var positionNum = playerNumSelector.options[playerNumSelector.selectedIndex].value;
var seed = document.getElementById("seed").value;

function fire(){

	
	//set random seed
	Math.seedrandom(seed);

}