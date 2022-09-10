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
var quizContent = [
  {
    header: "Quiz Question #1",
    question: "What is the purpose of a function in JavaScript?",
    options: [
      "to contain a string",
      "to contain an array",
      "to interact with the DOM", "to contain code which runs when the function is invoked"
    ],
    answer: "to contain code which runs when the function is invoked"
  },
  {
    header: "Quiz Question #2",
    question: "Where in an HTML file is it best to link to script.js?",
    options: [
      "within the head",
      "between the head and the body",
      "in the footer", "At the bottom of the body",
    ],
    answer: "At the bottom of the body"
  },
  {
    header: "Quiz Question #3",
    question: "What is the DOM?",
    options: [
      "The Document Object Model",
      "An outline of all page contents",
      "Door Open Message", "A web API"
    ],
    answer: "A web API"
  },
]
var currentIdx = 0;

var sec = 60;

function timer() {
  var timer = setInterval(function () {
    document.getElementById("countdown").innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function startQuiz() {
  // start timer
  timer()

  // display first question
  displayQuestion(quizContent[currentIdx])
}

function displayQuestion(nextQuestion) {
  // console.log('nextQuestion', nextQuestion);
  // logic to display the question
  h2ElQuizHead.textContent = quizContent[currentIdx].header;
  quizContainer.appendChild(quizQuestionEl);
  quizQuestionEl.textContent = quizContent[currentIdx].question;
  btn1.textContent = quizContent[currentIdx].options[0];
  btn2.textContent = quizContent[currentIdx].options[1];
  btn3.textContent = quizContent[currentIdx].options[2];
  btn4.textContent = quizContent[currentIdx].options[3];
  quizContainer.appendChild(btn1);
  quizContainer.appendChild(btn2);
  quizContainer.appendChild(btn3);
  quizContainer.appendChild(btn4);
  btn1.setAttribute("style", "margin: 1rem;");
  btn2.setAttribute("style", "margin: 1rem;");
  btn3.setAttribute("style", "margin: 1rem;");
  btn4.setAttribute("style", "margin: 1rem;");

  // increment currentIdx
  if (btn1.addEventListener("click", displayQuestion(quizContent[currentIdx]))){
    for (let i = 0; i < quizContent.length; i++) {
      currentIdx.value += i;
      return quizContent[currentIdx]
    }
  } else {
    return
  }
}

start.addEventListener("click", startQuiz);

var questionBtns = (btn1, btn2, btn3, btn4);

// adding text & styles to elements created in JS and in index
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

// function runQuizQ1() {
//   // start.preventDefault();
//   h2ElQuizHead.textContent = "Quiz Question #1";
//   quizContainer.appendChild(quizQuestionEl);
//   quizQuestionEl.textContent = questionsAndAnswers.questions[0];
//   btn1.textContent = questionsAndAnswers.incorrectAnswers[0];
//   btn2.textContent = questionsAndAnswers.incorrectAnswers[1];
//   btn3.textContent = questionsAndAnswers.incorrectAnswers[2];
//   btn4.textContent = questionsAndAnswers.correctAnswers[0];
//   btn1.setAttribute("style", "margin: 1rem;");
//   btn2.setAttribute("style", "margin: 1rem;");
//   btn3.setAttribute("style", "margin: 1rem;");
//   btn4.setAttribute("style", "margin: 1rem;");
//   quizContainer.appendChild(btn1);
//   quizContainer.appendChild(btn2);
//   quizContainer.appendChild(btn3);
//   quizContainer.appendChild(btn4);
//   if (btn4.addEventListener("click", answerCorrect)) {
//   } else {
//     answerIncorrect;
//   }
//   btn1.addEventListener("click", runQuizQ2);
//   btn2.addEventListener("click", runQuizQ2);
//   btn3.addEventListener("click", runQuizQ2);
//   btn4.addEventListener("click", runQuizQ2);
//   console.log(answerResponse);
// }

// function runQuizQ2() {
//   // start.preventDefault();
//   h2ElQuizHead.textContent = "Quiz Question #2";
//   quizContainer.appendChild(quizQuestionEl);
//   quizQuestionEl.textContent = questionsAndAnswers.questions[1];
//   btn1.textContent = questionsAndAnswers.correctAnswers[1];
//   btn2.textContent = questionsAndAnswers.incorrectAnswers[4];
//   btn3.textContent = questionsAndAnswers.incorrectAnswers[5];
//   btn4.textContent = questionsAndAnswers.incorrectAnswers[3];
//   btn1.setAttribute("style", "margin: 1rem;");
//   btn2.setAttribute("style", "margin: 1rem;");
//   btn3.setAttribute("style", "margin: 1rem;");
//   btn4.setAttribute("style", "margin: 1rem;");
//   quizContainer.appendChild(btn1);
//   quizContainer.appendChild(btn2);
//   quizContainer.appendChild(btn3);
//   quizContainer.appendChild(btn4);
//   if (btn3.addEventListener("click", answerCorrect)) {
//   } else {
//     answerIncorrect;
//   }
//   btn1.addEventListener("click", runQuizQ3);
//   btn2.addEventListener("click", runQuizQ3);
//   btn3.addEventListener("click", runQuizQ3);
//   btn4.addEventListener("click", runQuizQ3);
// }

// event listener for all quizQ2 answers to move to quizQ3

// function runQuizQ3() {
//   // start.preventDefault();
//   h2ElQuizHead.textContent = "Quiz Question #3";
//   quizContainer.appendChild(quizQuestionEl);
//   quizQuestionEl.textContent = questionsAndAnswers.questions[2];
//   btn1.textContent = questionsAndAnswers.incorrectAnswers[6];
//   btn2.textContent = questionsAndAnswers.correctAnswers[2];
//   btn3.textContent = questionsAndAnswers.incorrectAnswers[8];
//   btn4.textContent = questionsAndAnswers.incorrectAnswers[7];
//   btn1.setAttribute("style", "margin: 1rem;");
//   btn2.setAttribute("style", "margin: 1rem;");
//   btn3.setAttribute("style", "margin: 1rem;");
//   btn4.setAttribute("style", "margin: 1rem;");
//   quizContainer.appendChild(btn1);
//   quizContainer.appendChild(btn2);
//   quizContainer.appendChild(btn3);
//   quizContainer.appendChild(btn4);
//   btn1.addEventListener("click", showResults);
//   btn2.addEventListener("click", showResults);
//   btn3.addEventListener("click", showResults);
//   btn4.addEventListener("click", showResults);
// }
