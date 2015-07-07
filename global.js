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
