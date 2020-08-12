// Assignment - Social JS

// Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

var chefs = {
	name: "Jacques Pepin",
	age: 78,
	nationality: "French",
	channel: "PBS",
	specialDishes: ["omelet", "ratatouille", "steak frites"],
	catchPhrase: "happy cooking!",
	sayPhrase: function () {
		return "I am " + this.name + " " + this.catchPhrase;
	},
	friends: [
		{
			name: "Julia Child",
			age: "92",
			nationality: "American",
			channel: "PBS",
			specialDishes: ["steak au poivre", "rack of lamb", "beef wellington"],
			catchPhrase: "bon apetit!",
			sayPhrase: function () {
				return "This is " + this.name + " " + this.catchPhrase;
			}
		},
		{
			name: "Gordon Ramsay",
			age: "48",
			nationality: "English",
			channel: "FOX",
			specialDishes: ["hamburger", "fish and chips", "curry"],
			catchPhrase: "Bloody Hell!",
			sayPhrase: function () {
				return this.catchPhrase;
			}
		},
		{
			name: "Martin Yan",
			age: "75",
			nationality: "Chinese",
			channel: "PBS",
			specialDishes: ["peking duck", "kung pao chicken", "hot and sour soup"],
			catchPhrase: "If Yan can cook so can you!",
			sayPhrase: function () {
				return this.catchPhrase;
			}
		}
	]
};

// add properties to object
chefs.onYouTube = "yes";
chefs.employer = "Howard Johnson";

// add items to array
chefs.specialDishes.push("crepes suzette", "pommes puree");

// add items to array
chefs.friends[0].specialDishes.push("roasted chicken");

console.log(chefs);
