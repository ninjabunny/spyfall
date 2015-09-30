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

var 	loc;

window.onload = function(){
	restart();
}

function newGame(){
	if (window.confirm("Are sure you want start a new game?")){
		restart();
	}
}

function fieldOp(){
	alert("Secret location: '"+loc+"'.");
}

function spy(){
	alert("Objective: Figure out the location!");
}

function restart(){
	 loc = data[Math.floor(Math.random() * data.length)];
}