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
//function the handles the timer
function showTimer() {
    //display timer to screen
    timerDisplay.textContent = timer;
    //create setInterval and store it to a variable
    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)
}
//function that hendles and display the next question
function nextQuestion() {
    //declare a variable to store current question. assign the current question
    var currentQuestion = questions[index];
    //empty container element
    containerEl.textContent = "";
    //add current question title to the question display variable
    questionText.textContent = currentQuestion.title;
    //append the question display variable to the container
    containerEl.appendChild(questionText);
    //create a div element to wrap the `choices`
    var answersDiv = document.createElement("div");
//for loop to:
//-create button elements for each choice
//-add a class to each button to be used with the event listener
//-add text to each button from question choices
//-append buttons to div element created to wrap `choices`
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        answersDiv.appendChild(answerBtn);
    }
    //append div element to the container
    containerEl.appendChild(answersDiv);
};
//function to check the answer and display to following question
function checkAnswer(event) {
    //if event.target.matches(--choice button class--)
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