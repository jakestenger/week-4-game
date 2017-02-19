var player = "";
var challenger = "";
var vanquished = 0;
var position = [hidden, selection_bar, player, opponent]
var characters = {
	picard: {
		hp: 0, // hit-points
		ap: 0, // attack-points
		ca: 0, // counter-attack
		vm: 10, // vulnerability multiplier
		vul: "Force to interact with a child!",
		status: "".
		position: ""
	},
	Q: {
		hp: 100000,
		ap: 0,
		ca: 100000,
		vm: 100000,
		vul: "Ignore!",
		status: "".
		position: ""
	},
	borg: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Cycle phase variance!",
		status: "".
		position: ""
	},
	Lore: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Overload with emotion!",
		status: "".
		position: ""
	},
	Klingon: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Insult honor!",
		status: "".
		position: ""
	},
	Romulan: {
		hp: 0,
		ap: 0,
		ca: 0,
		vm: 10,
		vul: "Compare to a Vulcan",
		status: "".
		position: ""
	}

}

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

