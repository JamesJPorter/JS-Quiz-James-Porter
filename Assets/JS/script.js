// grabbing elements from HTML
var countdown = document.getElementById("countdown");
var start = document.getElementById("start");
var quizContainer = document.getElementById("quizContainer");
var h2El = document.getElementById("quizHeader");
var quiz = document.getElementById("quiz");
var answerNotif = document.getElementById("answerNotif");

// Creating elements to be used in live quiz
var h2ElQuizHead = document.getElementById("quizHeader");
var quizQuestionEl = document.createElement("h3");
var answerContainer = document.createElement("div");
var answerResponse = document.createElement("h3");

// creating buttons to select question answers
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
btn1.setAttribute("type", "subimt");
btn2.setAttribute("type", "subimt");
btn3.setAttribute("type", "subimt");
btn4.setAttribute("type", "subimt");

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
  quizQuestionEl.textContent =
    "What is the purpose of a function in JavaScript?";
  btn1.textContent = "to contain an array";
  btn2.textContent = "to contain a string";
  btn3.textContent = "to interact with the DOM";
  btn4.textContent = "to contain code which runs when the function is invoked";
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
  quizQuestionEl.textContent =
    "Where in an HTML file is it best to link to script.js?";
  btn1.textContent = "within the head";
  btn2.textContent = "between the head and the body";
  btn3.textContent = "At the bottom of the body";
  btn4.textContent = "in the footer";
  btn1.setAttribute("style", "margin: 1rem;");
  btn2.setAttribute("style", "margin: 1rem;");
  btn3.setAttribute("style", "margin: 1rem;");
  btn4.setAttribute("style", "margin: 1rem;");
  quizContainer.appendChild(btn1);
  quizContainer.appendChild(btn2);
  quizContainer.appendChild(btn3);
  quizContainer.appendChild(btn4);
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
  quizQuestionEl.textContent = "What is the DOM?";
  btn1.textContent = "A web API";
  btn2.textContent = "The Document Object Model";
  btn3.textContent = "An outline of all page contents";
  btn4.textContent = "Door Open Message";
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

function showResults() {}

start.addEventListener("click", runQuizQ1);
