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

function fire(){
	getValues();
	Math.seedrandom(seed);
	var location = data[Math.floor(Math.random() * data.length)];
	var spyPosition = Math.floor(Math.random() * playerNum) + 1;
	if (window.confirm("Are sure you are in position '"+positionNum+"'?")){
		if(positionNum + "" === spyPosition + ""){
			window.confirm(SPY);
		} else {
			window.confirm("Location = '"+location+"'.");
		}
		if(positionNum < playerNum){
			positionNumSelector.selectedIndex = positionNum++;
		} else {
			positionNumSelector.selectedIndex = 0;
		}
		
	}

	console.log(positionNum +""+ spyPosition);

}
function getValues(){
	playerNumSelector = document.getElementById("playerNum");
	playerNum = playerNumSelector.options[playerNumSelector.selectedIndex].value;
	positionNumSelector = document.getElementById("positionNum");
	positionNum = positionNumSelector.options[positionNumSelector.selectedIndex].value;
	seed = document.getElementById("seed").value;	
}

//enable pressing 'Enter' on seed field
document.getElementById('seed').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      fire();
      return false;
    }
};