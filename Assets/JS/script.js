// grabbing elements from HTML
var countdown = document.getElementById("countdown");
var start = document.getElementById("start");
var quizContainer = document.getElementById("quizContainer");
var h2El = document.getElementById("quizHeader");
var quiz = document.getElementById("quiz");

// Creating elements to be used in live quiz
var h2El = document.getElementById("quizHeader");
var quizQuestionEl = document.createElement("h3");
var listeEl = document.createElement("ol");

// creating buttons to select question answers
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

var list =(btn1, btn2, btn3, btn4);

btn1.value = "";

var timer;

// adding text & styles to elements
h2El.textContent = "Welcome! Click below to begin the quiz";
quizContainer.setAttribute("style", "margin: 5rem; border: 3px solid black; padding: 2rem; width: 40%; max-height: 50%; border-radius: 50px; background-color: #ffffc7ff; display: flex; justify-content: center; align-items: center; flex-direction: column;")

function runQuiz() {
    // start.preventDefault();
    quizContainer.appendChild(quizQuestionEl)
    quizQuestionEl.textContent = "What is the purpose of a function in JavaScript?"
}

start.addEventListener("click", runQuiz);
