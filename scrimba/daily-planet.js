// Assignment - Daily Planet Editor

// You're the new editor of the Daily Planet, and you're committed to bringing the newspaper up to a modern-day standard.
// In order to do this, you're moving the paper online and are teaching all the Planet's writers to code.

// As the editor, each piece of code needs to pass your desk for your approval before being shown to the public.
// Your job is to check for the following issues in every program that comes across your desk:

// Is the writer using variables correctly?
// Is the writer using operators correctly?
// Is the writer spelling things correctly? (Misspelled programs don't just look bad, they can break!)
// Is the writer following best practices with JavaScript code conventions?

/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.
In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
	if (!isThereKryptonite) {
		return "Superman beats " + enemyName + ", of course";
	} else {
		return (
			"Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one."
		);
	}
}

for (var i = 0; i < enemies.length; i++) {
	// var isThereKryptonite:
	if (i % 2 === 0) {
		isThereKryptonite = true;
	} else {
		isThereKryptonite = false;
	}
	console.log(whoWins(isThereKryptonite, enemies[i]));
}

function isLoisAttracted() {
	// 1 is not at all attracted, 10 is "super" attracted...
	return Math.floor(Math.random() * 10 + 1);
}

console.log(isLoisAttracted());

var clarkKent = true;
var superman = false;

while (clarkKent) {
	console.log("I'm just a nerdy columnist");
	var phoneBoothQuickChange = Math.random();
	if (phoneBoothQuickChange > 0.5) {
		clarkKent = false;
		superman = true;
		console.log("Now I'm Superman!");
	}
}
