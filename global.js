// Score counter
var correct = 0;

// Create the Array to store Questions
var questions = new Array();

// Prompts the question alert
//
// german_word - JavaScript Object for the word to Translate
//
// Returns an alert to the user if they got the question correct or not
function ask_a_question(german_word) {
  alert(german_word["question"]);
  var first_answer = get_user_answer(german_word);
  answer = valid_answer(german_word, first_answer);
  answer_check(german_word, answer);
}

// Function to ensure choice entered is valid
//
// german_word - JavaScript Object for the word to Translate
// answer - String for the user's answer to the question
//
// Returns the user's answer - String
function valid_answer(german_word, answer) {
  while (german_word.choices.indexOf(answer) == -1) {
    answer = get_user_answer(german_word);
  }
  return answer;
}

// Get a User's answer
//
// german_word - JavaScript Object for the word to Translate
//
// Returns the user's answer - String
function get_user_answer(german_word) {
  var user_answer = prompt("Type your answer (" + german_word.choices + ")");
  var answer = user_answer.toLowerCase();
  return answer;
}

// Check if the user's answer is correct
//
// german_word - JavaScript Object for the word to Translate
// answer - String for the user's answer to the question
//
// Returns an alert if the user got the right answer or not
function answer_check(german_word, answer) {
  if (answer === german_word["answer"]) {
    alert("Good job!");
    Correct++;
  } else {
    alert("Sorry, the correct answer was: " + german_word["answer"]);
  }
}

// Calculates percentage of correct answers
//
// correct - Integer for the number of  correct answers from the user
// questions - Array of GermanWord Objects
//
// Returns the percentage of answers
function percent_right(correct, questions) {
  var user_score = correct / parseFloat(questions.length);

  alert("You got " + correct + " out of " + questions.length + " quesitons correct: " + (user_score * 100) + "%");
}

// First question
var das_is_please = new Object();
das_is_please.question = "Translate to German: 'please'\nVerzeihung\nBitte\nDanke\nTschau";
das_is_please.answer = "bitte";
das_is_please.choices = ["verzeihung", "bitte", "danke", "tschau"];
// Push the question to the Array
questions.push(das_is_please);

// Second question
var das_is_i = new Object();
das_is_i.question = "Translate to German: 'I'\nIch\nWir\nSie\nihr";
das_is_i.answer = "ich";
das_is_i.choices = ["ich", "wir", "sie", "ihr"];
questions.push(das_is_i);

// Third question
var das_is_airport = new Object();
das_is_airport.question = "Translate to German: 'Airport'\nBahn\nBusbahnhof\nBahnhof\nFlughafen";
das_is_airport.answer = "flughafen";
das_is_airport.choices = ["bahn", "busbahnhof", "bahnhof", "flughafen"];
questions.push(das_is_airport);

// Fourth question
var das_is_potato = new Object();
das_is_potato.question = "Translate to German: 'Potato'\nFisch\nFleisch\nKartoffel\nBrot";
das_is_potato.answer = "kartoffel";
das_is_potato.choices = ["fisch", "fleisch", "kartoffel", "brot"];
questions.push(das_is_potato);

// Fifth question
var das_is_thursday = new Object();
das_is_thursday.question = "Translate to German: 'Thursday'\nDeinstag\nSamstag\nDonnerstag\nMittwoch";
das_is_thursday.answer = "donnerstag";
das_is_thursday.choices = ["deinstag", "samstag", "donnerstag", "mittwoch"];
questions.push(das_is_thursday);

var index;
// Run the program
for (questions, index = 0; index < questions.length; index++) {
  ask_a_question(questions[index]);
}

percent_right(correct, questions);
