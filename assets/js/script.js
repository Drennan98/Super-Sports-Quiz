// Array of questions to be used for the quiz
const questions = [
    {
        question: "Tiger Woods won his first major in over a decade at which tournament in 2019?",
        options: ["The US Open", "The Masters", "The Open", "The US PGA Championship"],
        answer: 1,
    },
    {
        question: "Who won the World Cup in 2022?",
        options: ["France", "Poland", "Spain", "Argentina"],
        answer: 3,
    },
    {
        question: "How many doubles are there on a dart board?",
        options: ["12", "8", "20", "16"],
        answer: 2,
    },
    {
        question: "What is the maximum break you can get in snooker?",
        options: ["145", "147", "143", "141"],
        answer: 1,
    },
    {
        question:
            "How many Formula 1 World Championships does Lewis Hamilton have?",
        options: ["3", "8", "7", "5"],
        answer: 2,
    },
];

// Declaring variables
const intro = document.getElementById("preamble");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const points = document.getElementById("points");
const gameArea = document.getElementById("gameArea");
const currentScore = document.getElementById("value");
const endGameArea = document.getElementById("endGameDiv");
let currentQuestion = 0; // Question the player is currently on 
let score = 0; // Player score

endGameArea.style.visibility = "hidden";
gameArea.style.visibility = "hidden";

// Functions to be used for the quiz 
function startGame() {
    intro.style.visibility = "hidden";
    gameArea.style.visibility = "visible";
    inGameLoop();
}


function displayScore() {
    currentScore.innerText = score.toString();
}

function checkAnswer(choice) {
    if (choice === question[currentQuestion].answer) {
    score = score +1;
    displayScore();
    }
    currentQuestion = currentQuestion + 1;
    inGameLoop();
}

function loadQuestion() {
    question.innerText = questions[currentQuestion].question;
}

function loadAnswers(currentQuestion) {
    answer0.innerText = questions[currentQuestion].options[0];
    answer1.innerText = questions[currentQuestion].options[1];
    answer2.innerText = questions[currentQuestion].options[2];
    answer3.innerText = questions[currentQuestion].options[3];
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score = score + 1;
        displayScore();
    }
    currentQuestion = currentQuestion + 1;

    inGameLoop();
}
function inGameLoop() {
    // check if end of game...
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
        loadAnswers(currentQuestion);
    } else {
        endGame();
    }
}

    function endGame() {
        points.innerText = score.toString();
        gameArea.style.visibility = "hidden";
        endGameArea.style.visibilty = "visible"
        console.log("End of game! Thanks for playing!");
    }

    function byeBye() {
        endGameArea.innerHTML = "<h2>Thanks for playing!</h2>"
    }
