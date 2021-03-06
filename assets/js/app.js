//created questions as an object
var questions = [
    {
        title: "Which of the following HTML Elements is used for making any text bold?",
        choices: ["<b>", "<p>", "<i>", "<li"],
        answer: "<b>"
    },
    {
        title: "How many heading tags are there in HTML5?",
        choices: ["2", "5", "3", "6"],
        answer: "6"
    },
    {
        title: "Which of the following attributes is used to add link to any element?",
        choices: ["link", "ref", "href", "newref"],
        answer: "href"
    },
    {
        title: "Which of the following attributes is used to open an hyperlink in new tab?",
        choices: ["tag", "target", "ref", "href"],
        answer: "target"
    },
    {
        title: "Using padding clears the area outside:",
        choices: ["Content", "Boreder", "Margin", "All of the above"],
        answer: "Content"
    }
];
//hook container elements
var initials = document.getElementById("initials")
var submitBtn = document.getElementById("subBtn")
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("middle-screen");
var endScreen = document.getElementById("end-screen");
var choicesEl = document.querySelector("#choices");
//variable to display timer
var timerDisplay = document.querySelector(".timer");
//created h1 to show starting heading 
var startText = document.createElement("h1");
//created button to start Quiz
var startBtn = document.getElementById("start-button")
//created p tag to display question
var questionText = document.createElement("p");
var answerText = document.getElementById("answerText")
//variable to store timer number
var timer = 90;
//variable to store current index
var index = 0;
var timeInterval;

//**FUNCTIONS**
//Function that loads content when page first load
function startQuiz() {
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");
    //show timer function
    showTimer();
    //call next question function
    nextQuestion();
}
//function the handles the timer
function showTimer() {
    //display timer to screen
    timerDisplay.textContent = timer;
    //created setInterval and store it to a variable
    timeInterval = setInterval(function () {
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
    choicesEl.textContent = "";
    //add current question title to the question display variable
    questionText.textContent = currentQuestion.title;
    //appended the question display variable to the container
    choicesEl.appendChild(questionText);
    //created a div element to wrap the `choices`
    var answersDiv = document.createElement("div");
    //for loop to:
    //-create button elements for each choice
    //-add a class to each button to be used with the event listener
    //-add text to each button from question choices
    //-append buttons to div element created to wrap `choices`
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.setAttribute("value", currentQuestion.choices[i])
        answerBtn.textContent = currentQuestion.choices[i];
        answerBtn.onclick = checkAnswer;
        answersDiv.appendChild(answerBtn);
    }
    //appended div element to the container
    choicesEl.appendChild(answersDiv);
};
//function to check the answer and display to following question
function checkAnswer() {
    console.log(this.value)
    var correct = [];
    if (this.value !== questions[index].answer) {
        // decreases timer if wrong answer is selected
        timer = timer - 15
        answerText.textContent = "wrong"
        endQuestions()
    } else {
        correct.push(questions[index])
        var correctNum = correct.length;
        answerText.textContent = "correct"
        console.log(correctNum)
        endQuestions()
    }
}
//function to show gamer over screen and enter your initials
function endQuestions(){
    if (index === questions.length -1) {
        console.log("game over")
        endScreen.classList.remove("hide");
        clearInterval(timeInterval)
    } else {
        index++;
        nextQuestion()
    }
}
//function to save your score into local storage
function saveScore(event){
    event.preventDefault()
    console.log(initials.value)
//   if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("initials", <<VALUE>>)
//     localStorage.setItem("score", <<VALUE>>)
//     // Retrieve
//     document.getElementById("timer").innerHTML = localStorage.getItem("initials");
 }
//added event listener to start quiz
startBtn.addEventListener("click", startQuiz);
//added event listener to submit button
submitBtn.addEventListener("submit", saveScore);