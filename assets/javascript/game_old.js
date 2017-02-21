var player = "";
var challenger = "";
var vanquished = 0;
var characters = {
	picard: {
		hp: 0, // hit-points
		ap: 0, // attack-points
		ca: 0, // counter-attack
		vm: 10, // vulnerability multiplier
		vul: "Force to interact with a child!",
		status: "",
		bg: "assets/images/enterprise-bridge.jpg"
		img: "assets/images/picard.jpg"
	},
	Q: {
		hp: 100000,
		ap: 0,
		ca: 100000,
		vm: 100000,
		vul: "Ignore!",
		status: "",
		bg: "assets/images/sunset.png"
		img: "assets/images/picard.jpg"
	},
	borg: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Cycle phase variance!",
		status: "",
		bg: "assets/images/borg_ship.jpg"
		img: "assets/images/borg.jpg"
	},
	Lore: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Overload with emotion!",
		status: "",
		bg: "assets/images/alien_planet.png"
		img: "assets/images/lore.jpg"
	},
	Klingon: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Insult honor!",
		status: "",
		bg: "assets/images/klingon_bridge.jpg"
		img: "assets/images/picard.jpg"
	},
	Romulan: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Compare to a Vulcan",
		status: "",
		bg: "alien_planet_night.png"
		img: "assets/images/picard.jpg"
	}

}

$(".character").draggable();
// $("#droppable").droppable({
//  	drop: function(event, ui) {
// 		$(this)
// 			.addClass("ui-state-highlight")
// 			.find("p")
// 			.html("Dropped!");
// 	}
// });

function characterStats() {
	// This function generates stats for the active players

}

function randomCharacterAvailability() {
	// This function chooses which characters are available to play
}

function changeCharacterStat(character, stat, newVal){
	// This function just changes the obj's attribute
	checkGameConditions()
	return newStat;
} 

function checkGameConditions() {
	// this function checks to see if the challenger has been defeated, if the
	// player has been defeated, and if the game has been won/lost

}

function displayStatInfoBox() {
	// this function shows the character's vital stats on hover
}

function attack(type) {

}



function putCharacterInDiv(char, pos) {
	if (pos === "player") {
		$("#sprite-left").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
	} else if (pos === "opponent") {
		$("#bench").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
		$("#bg").css('background-image', characters[char]["bg"]).fadein(slow);
	} else if (pos === "bench-1") {
		$("#bench-1").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
	} else if (pos === "bench-2") {
		$("#bench-2").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
	}  else if (pos === "bench-3") {
		$("#bench-3").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
	}  else if (pos === "bench-4") {
		$("#bench-4").prepend('<div class="character img-responsive"><img src="' + characters[char]["img"] + '" class="img" /></div>');
	} else {
		console.log("unexpected value");
	}
}
putCharacterInDiv("lore", "opponent")
putCharacterInDiv("picard", "player");
