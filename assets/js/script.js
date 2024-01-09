// Array of questions to be used for the quiz
const questions = [
    {
        question:
            "Tiger Woods won his first major in over a decade at which tournament in 2019?",
        options: ["The US Open, The Masters, The Open, The US PGA Championship"],
        answer: "The Masters",
    },
    {
        question: "Who won the World Cup in 2022?",
        options: ["France, Poland, Spain, Argentina"],
        answer: "Argentina",
    },
    {
        question: "How many doubles are there on a dart board?",
        options: ["12", "8", "20", "16"],
        answer: "20",
    },
    {
        question: "What is the maximum break you can get in snooker?",
        options: ["145", "147", "143", "141"],
        answer: "147",
    },
    {
        question:
            "How many Formula 1 World Championships does Lewis Hamilton have?",
        options: ["3", "8", "7", "5"],
        answer: "7",
    },
];

// Declaring variables

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

const quizContainer = document.getElementById("quiz");
const questionsElement = document.getElementById("questions");
const resultElement = document.getElementById("show-result");
const submitButton = document.getElementById("submit");

// Functions to be used for the quiz 

function startGame() {

}

function showQuestion() {
    const questionData = quizData[currentQuestion];



}

function checkAnswer(event) {
    // check the innerHTML of the chosen option with the questions[currentQuestion].answer and the currentQuestion index number
    // if its correct, increase the users score
    // increase the current question index
    currentQuestion++;
    // call the nextQuestion function only if the currentQuestion number is less than the size of the question array
    // if the number is bigger than the size of the array, then the game is over
}

// Jason from CI helped me with this function.
function nextQuestion() {

    // important: clear the container that holds the questions and options here
    for (let i = 0; i < questions.length; i++);
    const currentQuestion = questions[currentQuestion].options;
    const question = document.getElementById("question");
    question.innerHTML = nextQuestion.question;
    console.log(currentQuestion);


    // select the DOM elements for the options

    // loop over array of options ... questions[currentQuestion].options
    // add current option to DOM element for the option using the index of this loop

    // add event listener to options using a loop again currentQuestion++;

    function displayScore() {

    }
