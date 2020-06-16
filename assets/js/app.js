//create questions as an object
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
//hook container element
var containerEl = document.querySelector(".container");
//hook timer element
var timerDisplay = document.querySelector(".timer");
//create h1 to show starting heading 
var startText = document.createElement("h1");
//create button to start Quiz
var startBtn = document.createElement("button");
//create p tag to display question
var questionText = document.createElement("p");
//variable to store timer number
var timer = 80;
//variable to store current index
var index = 0;
//**FUNCTIONS**
//Function that loads content when page first load
function openingPage() {
    //add text to title tag
    startText.textContent = "Welcome to my Quiz";
    //add text to button
    startBtn.textContent = "Start Quiz";
    //append text to container
    containerEl.appendChild(startText);
    //append button to container
    containerEl.appendChild(startBtn);
}
//function that shows the question and starts the timer
function startQuiz() {
    //show timer function
    showTimer();
    //call next question function
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
}
function nextQuestion() {
    var currentQuestion = questions[index];
    containerEl.textContent = "";
    questionText.textContent = currentQuestion.title;
    containerEl.appendChild(questionText);
    var answersDiv = document.createElement("div");

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        answersDiv.appendChild(answerBtn);
    }
    containerEl.appendChild(answersDiv);
};

function checkAnswer(event) {
    if (event.target.matches(".choiceBtn")) {
    }
    index++;
    nextQuestion()
    startBtn.addEventListener("click", startQuiz)
}
//add event listener to start quiz
startBtn.addEventListener("click", startQuiz);
//add event listener to choice button
document.addEventListener("click", checkAnswer);
//call function to show opening page
openingPage()