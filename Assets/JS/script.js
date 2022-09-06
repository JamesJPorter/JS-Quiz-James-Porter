// grabbing elements from HTML
var countdown = document.getElementById("countdown");
var start = document.getElementById("start");
var quizContainer = document.getElementById("quizContainer");
var h2El = document.getElementById("quizHeader");
var quiz = document.getElementById("quiz");
var answerNotif = document.getElementById("answerNotif");
var h2ElQuizHead = document.getElementById("quizHeader");

// Creating elements to be used in live quiz
var quizQuestionEl = document.createElement("h3");
var answerContainer = document.createElement("div");
var answerResponse = document.createElement("h3");
var initialEntryForm = document.createElement("form");
var firstInitialEntry = document.createElement("input");
var lastInitialEntry = document.createElement("input");

// creating buttons to select question answers
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
btn1.setAttribute("type", "subimt");
btn2.setAttribute("type", "subimt");
btn3.setAttribute("type", "subimt");
btn4.setAttribute("type", "subimt");

// storing questions as objects
var questionsAndAnswers = {
  questions: [
    "What is the purpose of a function in JavaScript?",
    "Where in an HTML file is it best to link to script.js?",
    "What is the DOM?",
  ],
  incorrectAnswers: [
    "to contain a string",
    "to contain an array",
    "to interact with the DOM",
    "within the head",
    "between the head and the body",
    "in the footer",
    "The Document Object Model",
    "An outline of all page contents",
    "Door Open Message",
  ],
  correctAnswers: [
    "to contain code which runs when the function is invoked",
    "At the bottom of the body",
    "A web API",
  ],
};

console.log(questionsAndAnswers.questions[1]);

var questionBtns = (btn1, btn2, btn3, btn4);

var timer;

// adding text & styles to elements created and in index
h2ElQuizHead.textContent = "Welcome! Click below to begin the quiz";
quizContainer.setAttribute(
  "style",
  "margin: 5rem; border: 3px solid black; padding: 2rem; width: 40%; border-radius: 50px; background-color: #ffffc7ff; display: flex; justify-content: center; align-items: center; flex-direction: column;"
);

answerNotif.setAttribute(
  "style",
  "margin-top: 1rem; border: dashed grey 3px; background-color: #ffffc7ff; display: none;"
);

answerResponse.setAttribute("style", "margin-top: 1.5rem;");

function answerCorrect() {
  answerNotif.setAttribute("style", "display: flex;");
  answerResponse.textContent = "CORRECT!";
  answerNotif.appendChild(answerResponse);
}

function answerIncorrect() {
  answerNotif.setAttribute("style", "display: flex;");
  answerResponse.textContent = "INCORRECT";
  answerNotif.appendChild(answerResponse);
}

function runQuizQ1() {
  // start.preventDefault();
  h2ElQuizHead.textContent = "Quiz Question #1";
  quizContainer.appendChild(quizQuestionEl);
  quizQuestionEl.textContent = questionsAndAnswers.questions[0];
  btn1.textContent = questionsAndAnswers.incorrectAnswers[0];
  btn2.textContent = questionsAndAnswers.incorrectAnswers[1];
  btn3.textContent = questionsAndAnswers.incorrectAnswers[2];
  btn4.textContent = questionsAndAnswers.correctAnswers[0];
  btn1.setAttribute("style", "margin: 1rem;");
  btn2.setAttribute("style", "margin: 1rem;");
  btn3.setAttribute("style", "margin: 1rem;");
  btn4.setAttribute("style", "margin: 1rem;");
  quizContainer.appendChild(btn1);
  quizContainer.appendChild(btn2);
  quizContainer.appendChild(btn3);
  quizContainer.appendChild(btn4);
  if (btn4.addEventListener("click", answerCorrect)) {
  } else {
    answerIncorrect;
  }
  btn1.addEventListener("click", runQuizQ2);
  btn2.addEventListener("click", runQuizQ2);
  btn3.addEventListener("click", runQuizQ2);
  btn4.addEventListener("click", runQuizQ2);
  console.log(answerResponse);
}

// function saveAnswerQ1() {
//   if (btn1) {
//     localStorage.setItem("Answer1", btn1.textContent);
//   }
//   if (btn2) {
//     localStorage.setItem("Answer1", btn2.textContent);
//   }
//   if (btn3) {
//     localStorage.setItem("Answer1", btn3.textContent);
//   }
//   if (btn4) {
//     localStorage.setItem("Answer1", btn4.textContent);
//   }
//     return;
// }

function runQuizQ2() {
  // start.preventDefault();
  h2ElQuizHead.textContent = "Quiz Question #2";
  quizContainer.appendChild(quizQuestionEl);
  quizQuestionEl.textContent = questionsAndAnswers.questions[1];
  btn1.textContent = questionsAndAnswers.correctAnswers[1];
  btn2.textContent = questionsAndAnswers.incorrectAnswers[4];
  btn3.textContent = questionsAndAnswers.incorrectAnswers[5];
  btn4.textContent = questionsAndAnswers.incorrectAnswers[3];
  btn1.setAttribute("style", "margin: 1rem;");
  btn2.setAttribute("style", "margin: 1rem;");
  btn3.setAttribute("style", "margin: 1rem;");
  btn4.setAttribute("style", "margin: 1rem;");
  quizContainer.appendChild(btn1);
  quizContainer.appendChild(btn2);
  quizContainer.appendChild(btn3);
  quizContainer.appendChild(btn4);
  if (btn3.addEventListener("click", answerCorrect)) {
  } else {
    answerIncorrect;
  }
  btn1.addEventListener("click", runQuizQ3);
  btn2.addEventListener("click", runQuizQ3);
  btn3.addEventListener("click", runQuizQ3);
  btn4.addEventListener("click", runQuizQ3);
}

// event listener for all quizQ2 answers to move to quizQ3

function runQuizQ3() {
  // start.preventDefault();
  h2ElQuizHead.textContent = "Quiz Question #3";
  quizContainer.appendChild(quizQuestionEl);
  quizQuestionEl.textContent = questionsAndAnswers.questions[2];
  btn1.textContent = questionsAndAnswers.incorrectAnswers[6];
  btn2.textContent = questionsAndAnswers.correctAnswers[2];
  btn3.textContent = questionsAndAnswers.incorrectAnswers[8];
  btn4.textContent = questionsAndAnswers.incorrectAnswers[7];
  btn1.setAttribute("style", "margin: 1rem;");
  btn2.setAttribute("style", "margin: 1rem;");
  btn3.setAttribute("style", "margin: 1rem;");
  btn4.setAttribute("style", "margin: 1rem;");
  quizContainer.appendChild(btn1);
  quizContainer.appendChild(btn2);
  quizContainer.appendChild(btn3);
  quizContainer.appendChild(btn4);
  btn1.addEventListener("click", showResults);
  btn2.addEventListener("click", showResults);
  btn3.addEventListener("click", showResults);
  btn4.addEventListener("click", showResults);
}

function showResults() {
    quiz.setAttribute("style", "display: none;")
    h2ElQuizHead.textContent = "Quiz Results";
    quizContainer.appendChild(quizQuestionEl);
    btn1.setAttribute("style", "display: none;")
    btn2.setAttribute("style", "display: none;")
    btn3.setAttribute("style", "display: none;")
    btn4.setAttribute("style", "display: none;")
}

start.addEventListener("click", runQuizQ1);
