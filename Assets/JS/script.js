// grabbing elements from HTML
var countdown = document.getElementById("countdown");
var start = document.getElementById("start");
var quizContainer = document.getElementById("quizContainer");
quizContainer.setAttribute(
  "style",
  "margin: 5rem; border: 3px solid black; padding: 2rem; width: 40%; border-radius: 50px; background-color: #ffffc7ff; display: flex; justify-content: center; align-items: center; flex-direction: column;"
);
var h2El = document.getElementById("quizHeader");
var quiz = document.getElementById("quiz");
var answerNotif = document.getElementById("answerNotif");
answerNotif.setAttribute(
  "style",
  "margin-top: 1rem; border: dashed grey 3px; background-color: #ffffc7ff; display: none;"
);
var h2ElQuizHead = document.getElementById("quizHeader");
h2ElQuizHead.textContent = "Welcome! Click below to begin the quiz";

// Creating elements to be used in live quiz
var quizQuestionEl = document.createElement("h3");
var answerContainer = document.createElement("div");
var answerResponse = document.createElement("h3");
var initialEntryForm = document.createElement("form");
initialEntryForm.setAttribute("style", "display: flex; justify-content: space-between; flex-wrap: wrap; align-items: center;")
var firstInitialEntry = document.createElement("input");
firstInitialEntry.setAttribute("placeholder", "First Name");
firstInitialEntry.setAttribute("style", "margin: 1rem;")
var lastInitialEntry = document.createElement("input");
lastInitialEntry.setAttribute("placeholder", "Last Name");
lastInitialEntry.setAttribute("style", "margin: 1rem;")
var submitScoreBtn = document.createElement("button");
submitScoreBtn.textContent = "Save Score"

// creating buttons to select question answers
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
btn1.setAttribute("type", "subimt");
btn2.setAttribute("type", "subimt");
btn3.setAttribute("type", "subimt");
btn4.setAttribute("type", "subimt");

var savedScores = [];
var finalScore = timer.value;
var answerBtns = [btn1, btn2, btn3, btn4];

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
var time;
var user;

function timer() {
  time = setInterval(function () {
    document.getElementById("countdown").innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(time);
    }
  }, 1000);
}

function startQuiz() {
  // start timer
  timer()

  // display first question
  displayQuestion(quizContent[currentIdx])

  answerBtns.forEach(function (button) {
    button.addEventListener("click", displayQuestion)
  })
}

function displayQuestion() {
  // logic to discern whether to display question or save score screen
  answerBtns.forEach(function (button) {
    button.addEventListener("click", answerVerification)
    if (currentIdx == quizContent.length) {
      endQuiz()
      clearInterval(time);
    } else {
      // logic to display the question
      start.remove()
      var nextQuestion = quizContent[currentIdx];
      start.setAttribute("style", "display: none")
      h2ElQuizHead.textContent = quizContent[currentIdx].header;
      quizContainer.appendChild(quizQuestionEl);
      quizQuestionEl.textContent = quizContent[currentIdx].question;
      btn1.textContent = nextQuestion.options[0];
      btn2.textContent = nextQuestion.options[1];
      btn3.textContent = nextQuestion.options[2];
      btn4.textContent = nextQuestion.options[3];
      quizContainer.appendChild(btn1);
      quizContainer.appendChild(btn2);
      quizContainer.appendChild(btn3);
      quizContainer.appendChild(btn4);
      btn1.setAttribute("style", "margin: 1rem;");
      btn2.setAttribute("style", "margin: 1rem;");
      btn3.setAttribute("style", "margin: 1rem;");
      btn4.setAttribute("style", "margin: 1rem;");
    }
  })
}

function endQuiz() {
  h2ElQuizHead.textContent = "Would you like to save your score?"
  quiz.remove();
  quizQuestionEl.remove()
  btn1.remove()
  btn2.remove()
  btn3.remove()
  btn4.remove()
  answerResponse.remove()
  quizContainer.appendChild(initialEntryForm);
  initialEntryForm.appendChild(firstInitialEntry);
  initialEntryForm.appendChild(lastInitialEntry);
  initialEntryForm.appendChild(submitScoreBtn);
}

submitScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var score = {
    firstName: firstInitialEntry.value.trim(),
    lastName: lastInitialEntry.value.trim(),
    yourTime: sec.value
  }
  localStorage.setItem("savedScores", JSON.stringify(score));
  console.log(localStorage.getItem("savedScores", JSON.parse(score)))
});


start.addEventListener("click", startQuiz);

function answerVerification(event) {
  var userAnswer = event.target.textContent;
  if (userAnswer === quizContent[currentIdx].answer) {
    answerNotif.setAttribute("style", "display: flex;");
    answerResponse.textContent = "CORRECT!";
    answerNotif.appendChild(answerResponse);
    console.log(userAnswer);
    console.log(quizContent[currentIdx].answer)
    currentIdx++
  }
  else {
    answerNotif.setAttribute("style", "display: flex;");
    answerResponse.textContent = "INCORRECT";
    answerNotif.appendChild(answerResponse);
    console.log(userAnswer);
    console.log(quizContent[currentIdx].answer)
    sec = sec - 10
    currentIdx++
  }
}

answerResponse.setAttribute("style", "margin-top: 1.5rem;");
