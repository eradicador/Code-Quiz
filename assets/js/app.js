//create questions as an object
var questions = [
    {
        title: "Which of the following HTML Elements is used for making any text bold?",
        choices: ["<b>", "<p>", "<i>", "<li"],
        answer: "Choice 1"
    },
    {
        title: "How many heading tags are there in HTML5?",
        choices: ["2", "5", "3", "6"],
        answer: "Choice 4"
    },
    {
        title: "Which of the following attributes is used to add link to any element?",
        choices: ["link", "ref", "href", "newref"],
        answer: "Choice 3"
    },
    {
        title: "Which of the following attributes is used to open an hyperlink in new tab?",
        choices: ["tag", "target", "ref", "href"],
        answer: "Choice 2"
    },
    {
        title: "Using padding clears the area outside:",
        choices: ["Content", "Boreder", "Margin", "All of the above"],
        answer: "Choice 1"
    },
    {
        title: "All Done:",
    },
];
//hook container element
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("middle-screen");
var endScreen = document.getElementById("end-screen");
var choicesEl = document.querySelector("#choices");
//hook timer element
var timerDisplay = document.querySelector(".timer");
//create h1 to show starting heading 
var startText = document.createElement("h1");
//create button to start Quiz
var startBtn = document.getElementById("start-button")
//create p tag to display question
var questionText = document.createElement("p");
var answerText = document.getElementById("answerText")
//variable to store timer number
var timer = 120;
//variable to store current index
var index = 0;
//**FUNCTIONS**
//Function that loads content when page first load
// function openingPage() {
//     //add text to title tag
//     startText.textContent = "Welcome to my Quiz";
//     //add text to button
//     startBtn.textContent = "Start Quiz";
//     //append text to container
//     containerEl.appendChild(startText);
//     //append button to container
//     containerEl.appendChild(startBtn);
// }
//function that shows the question and starts the timer
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
    choicesEl.textContent = "";
    //add current question title to the question display variable
    questionText.textContent = currentQuestion.title;
    //append the question display variable to the container
    choicesEl.appendChild(questionText);
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
        answerBtn.setAttribute("value", currentQuestion.choices[i])
        answerBtn.textContent = currentQuestion.choices[i];
        answerBtn.onclick = checkAnswer;
        answersDiv.appendChild(answerBtn);
    }
    //append div element to the container
    choicesEl.appendChild(answersDiv);
};
//function to check the answer and display to following question
function checkAnswer() {
    console.log(this.value)
    var correct = [];
    if (this.value !== questions[index].answer) {
        // decrease timer
        timer = timer - 10
        console.log("wrong")

        answerText.textContent = "wrong"


    } else {
        correct.push(questions[index])
        var correctNum = correct.length;
        answerText.textContent = "correct"
        console.log(correctNum)
    }
    //check if right or wrong
    //advance to next question
    index++;
    if (index === questions.length) {
        console.log("game over")
    } else {
        //set a time set function after 1 second deletes and goes to the next ?
        nextQuestion()
    }
}
//add event listener to start quiz
startBtn.addEventListener("click", startQuiz);
//add event listener to choice button
// document.addEventListener("click", checkAnswer);
// //call function to show opening page
// openingPage()