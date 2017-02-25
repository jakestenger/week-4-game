function initialize(){
	// make the p tags and populate them
	$("#page-title").append("<h1>STAR TREK RPG!</h1>")
		.attr({class: "right"});
	$("#your-character-title").append('<p class="title-text">Your Character:</p>');
	$("#enemies-title").append('<p class="title-text">Enemies Available To Attack:</p>');
	$("#fight-title").append('<p class="title-text">Fight Section:</p>');
	$("#defender-title").append('<p class="title-text">Defender:</p>');
	$("#unassigned-characters-title").append(
		'<p class="title-text">Pick a character to play as:</p>'
		);

	//making global variables from within a function using shortcut (not using "var" to declare them)
	opponent = "";
	enemies = [];
	player = ""
	characters = {
		Picard: {
			hp: 0, // hit-points
			ba: 6, // base attack-power
			ap: 0, // attack-points
			ca: 0, // counter-attack
			img: "assets/images/picard.png",
			card: ""
		},
		Borg: {
			hp: 0,
			ba: 6, // base attack-power
			ap: 0,
			ca: 0,
			img: "assets/images/borg.png",
			card: ""
		},
		Klingon: {
			hp: 0,
			ba: 6, // base attack-power
			ap: 0,
			ca: 0,
			img: "assets/images/klingon.png",
			card: ""
		},
		Romulan: {
			hp: 0,
			ba: 6, // base attack-power
			ap: 0,
			ca: 0,
			img: "assets/images/romulan.png",
			card: ""
		}
	};

	// make the character cards and stick them in the staging area
	for (key in characters) {
		for (subkey in characters[key]) {
			if (subkey === "hp") {
				characters[key][subkey] = rollDice(100, 200);
			} else if (subkey === "ba") {
				var value = rollDice(2, 10);
				characters[key][subkey] = value;
				characters[key]["ap"] = value;
			} else if (subkey === "ca") {
				characters[key][subkey] = rollDice(5, 25);
			}
		};
		$("#unassigned-characters").append('\
			<div id="' + key + '" class="character">\
			<p id="' + key + '-name" class="box-text">' + key + '</p>\
			<img src="' + characters[key]["img"] + '" class="avatar" />\
			<p id="' + key + '-hp" class="box-text">' + 
			characters[key]["hp"] + '</p>\
			</div>')
	};
	playerPositions();
};

function rollDice(low, high) {
	return Math.floor(Math.random() * (high - low + 1)) + low;
};

function selectDefender() {
	$(".enemy").on("click", function() {
		opponent = $(this).attr('id');
		$("#"+opponent).remove();
		$("#defender").append('\
			<div id="' + opponent + '" class="character defender">\
			<p id="' + opponent + '-name" class="box-text">' + opponent + '</p>\
			<img src="' + characters[opponent]["img"] + '" class="avatar" />\
			<p id="' + opponent + '-hp" class="box-text">' + 
			characters[opponent]["hp"] + '</p>\
			</div>');
		$("#status-area").html('<p class="status">You\'ve selected ' + opponent + ' as your next opponent...</p>');
	});
};

function playerPositions() {
	$(".character").on("click", function(){
		player = $(this).attr('id');
		$("#unassigned-characters-title").hide();
		$("#unassigned-characters").html("");
		for (key in characters) {
			if (key !== player) {
				enemies.push(key);
				$("#enemies").append('\
					<div id="' + key + '" class="character enemy">\
					<p id="' + key + '-name" class="box-text">' + key + '</p>\
					<img src="' + characters[key]["img"] + '" class="avatar" />\
					<p id="' + key + '-hp" class="box-text">' + 
					characters[key]["hp"] + '</p>\
					</div>');
			} else {
				$("#your-character").append('\
					<div id="' + key + '" class="character">\
					<p id="' + key + '-name" class="box-text">' + key + '</p>\
					<img src="' + characters[key]["img"] + '" class="avatar" />\
					<p id="' + key + '-hp" class="box-text">' + 
					characters[key]["hp"] + '</p>\
					</div>');
			};
		};
		$("#status-area").html("");
		selectDefender();
		return;
	});
};

// buttons function - Attack
$("#attack").click(function(){
	$("#status-area").html("");
	if (opponent === "") {
		if (enemies.length === 0) {
			if ((player !== "") && (characters[player]["hp"] > 0)) {
				$("#status-area").append('<p class="status">HEY! They\'re all dead! Calm down now.</p>');
				$("#status-area").append('<br><button id="reset" class="\
					btn btn-danger">I won!</button>');
			} else if (player === "") {
				$("#status-area").append('<p class="status">C\'mon! are you even trying? You have to pick a character first.</p>');
			};
		} else {
			$("#status-area").append('<p class="status">\
				There is no one here to attack</p>');
		};
	} else {
		characters[opponent]["hp"] -= characters[player]["ap"];
		$("#"+opponent+"-hp").html(characters[opponent]["hp"]);
		$("#status-area").append('<p class="status">You have attacked '
			+ opponent + ' for ' + characters[player]["ap"] + 
			' damage.</p>');
		characters[player]["ap"] += characters[player]["ba"];
		if (characters[opponent]["hp"] > 0){
			characters[player]["hp"] -= characters[opponent]["ca"];
			$("#"+player+"-hp").html(characters[player]["hp"]);
			$("#status-area").append('<p class="status">\
				You have received ' + characters[opponent]["ca"] + 
				' damage as retaliation.</p>');
			if (characters[player]["hp"] <= 0) {
				$("#status-area").append('<p class="status">\
					You have lost</p>');
				$("#status-area").append('<br><button id="reset" class="\
					btn btn-danger">Try Again!</button>');
			};
		} else {
			console.log("you have defeated " + opponent);
			$("#" + opponent).hide();
			var index = enemies.indexOf(opponent);
			if (index > -1) {
				enemies.splice(index, 1);
			};
			$("#status-area").append('<p class="status">You have defeated ' + opponent + '.</p>');
			opponent = "";
			if (enemies.length > 0) {
				$("#status-area").append('<p class="status">Click on a new Character to attack!.</p>');
				selectDefender();
			} else {
				$("#status-area").append('<p class="status">You\'ve won.</p>');
				$("#status-area").append('<br><button id="reset" class="\
					btn btn-danger">I won!</button>');
			}
			
		}
	};
});

$("#status-area").on("click", "#status-area.reset", function() {
	console.log("CLICK");
	initialize();
	$("#status-area").html("");
	return;
});

$(document).ready(function(){
	initialize();
});
