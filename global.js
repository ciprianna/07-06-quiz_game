// Score counter
var Correct = 0;

// Create the Array to store Questions
var Questions = new Array();

// Prompts the question alert
//
// GermanWord - JavaScript Object for the word to Translate
//
// Returns an alert to the user if they got the question correct or not
function AskAQuestion(GermanWord) {
  alert(GermanWord["question"]);
  var FirstAnswer = GetUserAnswer(GermanWord);
  Answer = ValidAnswer(GermanWord, FirstAnswer);
  AnswerCheck(GermanWord, Answer);
}

// Function to ensure choice entered is valid
//
// GermanWord - JavaScript Object for the word to Translate
// Answer - String for the user's answer to the question
//
// Returns the user's answer - String
function ValidAnswer(GermanWord, Answer) {
  while (GermanWord.choices.indexOf(Answer) == -1) {
    Answer = GetUserAnswer(GermanWord);
  }
  return Answer;
}

// Get a User's answer
//
// GermanWord - JavaScript Object for the word to Translate
//
// Returns the user's answer - String
function GetUserAnswer(GermanWord) {
  var UserAnswer = prompt("Type your answer (" + GermanWord.choices + ")");
  var Answer = UserAnswer.toLowerCase();
  return Answer;
}

// Check if the user's answer is correct
//
// GermanWord - JavaScript Object for the word to Translate
// Answer - String for the user's answer to the question
//
// Returns an alert if the user got the right answer or not
function AnswerCheck(GermanWord, Answer) {
  if (Answer === GermanWord["answer"]) {
    alert("Good job!");
    Correct++;
  } else {
    alert("Sorry, the correct answer was: " + GermanWord["answer"]);
  }
}

// Calculates percentage of correct answers
//
// Correct - Integer for the number of  correct answers from the user
// Questions - Array of GermanWord Objects
//
// Returns the percentage of answers
function PercentRight(Correct, Questions) {
  var UserScore = Correct / parseFloat(Questions.length);
  if (UserScore == 1) {
    alert("You got " + Correct + " out of " + Questions.length + " quesitons correct: " + UserScore + "00%");
  } else {
    alert("You got " + Correct + " out of " + Questions.length + " quesitons correct: " + UserScore + "%");
  }
}

// First question
var DasIsPlease = new Object();
DasIsPlease.question = "Translate to German: 'please'\nVerzeihung\nBitte\nDanke\nTschau";
DasIsPlease.answer = "bitte";
DasIsPlease.choices = ["verzeihung", "bitte", "danke", "tschau"];
// Push the question to the Array
Questions.push(DasIsPlease);

// Second question
var DasIsI = new Object();
DasIsI.question = "Translate to German: 'I'\nIch\nWir\nSie\nihr";
DasIsI.answer = "ich";
DasIsI.choices = ["ich", "wir", "sie", "ihr"];
Questions.push(DasIsI);

// Third question
var DasIsAirport = new Object();
DasIsAirport.question = "Translate to German: 'Airport'\nBahn\nBusbahnhof\nBahnhof\nFlughafen";
DasIsAirport.answer = "flughafen";
DasIsAirport.choices = ["bahn", "busbahnhof", "bahnhof", "flughafen"];
Questions.push(DasIsAirport);

// Fourth question
var DasIsPotato = new Object();
DasIsPotato.question = "Translate to German: 'Potato'\nFisch\nFleisch\nKartoffel\nBrot";
DasIsPotato.answer = "kartoffel";
DasIsPotato.choices = ["fisch", "fleisch", "kartoffel", "brot"];
Questions.push(DasIsPotato);

// Fifth question
var DasIsThursday = new Object();
DasIsThursday.question = "Translate to German: 'Thursday'\nDeinstag\nSamstag\nDonnerstag\nMittwoch";
DasIsThursday.answer = "donnerstag";
DasIsThursday.choices = ["deinstag", "samstag", "donnerstag", "mittwoch"];
Questions.push(DasIsThursday);

var index;
// Run the program
for (Questions, index = 0; index < Questions.length; index++) {
  AskAQuestion(Questions[index]);
}

PercentRight(Correct, Questions);
