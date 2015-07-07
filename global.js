// Questions as alerts, answers in prompts
// 1.
alert("Translate to German: 'please'\nA) Verzeihung\nB) Bitte\nC) Danke\nD) Tschau");
var Please = prompt("Answer (A, B, C, or D)", "");
// Convert string to lowercase
var PleaseAnswer = toLowerCase(Please)
// Build in validity to Answer
while (PleaseAnswer != a || PleaseAnswer != b || PleaseAnswer != c || PleaseAnswer != d) {
  var Please = prompt("Answer (A, B, C, or D)", "");
}

// As an Object
// Create the Array to store Questions
var Questions = new.Array();

// First question
var DasIsPlease = new.Object("Translate to German: 'please'\nA) Verzeihung\nB) Bitte\nC) Danke\nD) Tschau");
DasIsPlease.answer = "bitte";
DasIsPlease.choices = ["verzeihung", "bitte", "danke", "tschau"];
// Push the question to the Array
Questions.push(DasIsPlease);
