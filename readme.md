# Code Quiz Challenge
## Description
This project is an app about a timed code quiz with multiple choice questions, the quiz is about HTML knowledge. This app will run in the browser and features HTML and CSS powered by my JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. the timed code quiz will have a start button on the first screen, when user clicks the start button the first question will be presented as well a timer will start countdown, when the user answer a question the next question will show up, also if the asnwer selected is wrong 15 seconds will be taken from the timer, when all questions are answered or the timer reaches 0 the quiz will be over then a form will come up asking for your initials. i had a hard time storing the score and initials to the Local storage so in the future i want to implements those features into the app.
# screenshot 
<img src ="/assets/images/2020-06-17(5).png" width="300">

# link to deployed app
https://github.com/eradicador/Code-Quiz

# css file
line 2 added a display: none to the cards in the html file so the middle-screen and end-screen cards dont show right away 

line 6 changed the background color to the choice buttons for the answer choices

line 10 changed the font size and bold for the body of html

# html file
line 8 added bootstrap link

line 11 added the css link to css file

line 13 changed the title of the website

line 18 added a card to the start screen, center the text and added padding

line 21 added and changed color to the start button

line 24 added a card to the middle screen

line 26 center the timer

line 28 center the choices for the answers

line 30 added padding and color to text and centered the text

line 33 added a row so i can center the end screen card

line 35 card was centered to middle of screen, padding was added and text was centered

line 43 button color was changed to info

line 49 javascript file was linked to this file

# app.js file

line 2 created questions as an object

line 30 hook container elements

line 37 variable to display timer

line 39 created h1 to show starting heading

line 41 created button to start Quiz

line 43 created p tag to display question

line 46 variable to store timer number

line 48 variable to store current index

line 53 Function that loads content when page first load

line 57 show timer function

line 59 call next question function

line 62 function the handles the timer

line 64 display timer to screen

line 66 created setInterval and store it to a variable

line 75 function that hendles and display the next question

line 77 declare a variable to store current question. assign the current question

line 79 empty container element

line 81 add current question title to the question display variable

line 83 appended the question display variable to the container

line 85 created a div element to wrap the `choices`

line 91 for loop to:
    //-create button elements for each choice
    //-add a class to each button to be used with the event listener
    //-add text to each button from question choices
    //-append buttons to div element created to wrap `choices`

line 100 appended div element to the container

line 103 function to check the answer and display to following question

line 108 decreases timer if wrong answer is selected

line 120 function to show gamer over screen and enter your initials

line 131 function to save your score into local storage

line 142 added event listener to start quiz

line 144 added event listener to submit button

# license
MIT License

Copyright (c) [2020] [Michael Amaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.