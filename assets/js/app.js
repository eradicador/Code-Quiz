var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  }
];
var containerEl = document.querySelector(".container")

var timer = document.querySelector(".timer")

var startText = document.createElement("h1");

var startBtn = document.createElement("button");

var questionText = document.createElement("p");

var startBtn = document.createElement("button");

var questionText = document.createElement("p");

var timer = 80;

var Index = 0;

openingPage()

function openingPage() {

  startText.textContent = "Welcome to my Quiz";

  startBtn.textContent = "Start Quiz";

  containerEl.appendChild(startText);

  containerEl.appendChild(startBtn);
}

function startQuiz() {
  showTimer();
  nextQuestion();
}



function showTimer() {

  timerDisplay.textContent = timer;

  var timeInterval = setInterval(function () {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      clearInterval(timeInterval)
    }

  }, 1000)
  function nextQuestion() {

    var currentQuestion = questions[index];

    containerE1.textContent = "";

    questionText.textContent = currentQuestion.title;

    containerEl.appendChild(questionText);

    var answersDiv = document.createElement("div");

    for (let 1 = 0; 1 < currentQuestion.choices.length; 1++) {
      var answerBtn = document.createElement("button");
      answerBtn.classList.add("choiceBtn");
      answerBtn.textContent = currentQuestion.choices[i];
      answerDiv.appendChild(answerBtn);
    }

    containerEl.appendChild(answersDiv);
  }
};

function checkAnswer(event) {
  if (event.target.matches(".choiceBtn")) {
  }

  startBtn.addEventListener("click", startQuiz())

  openingPage()
