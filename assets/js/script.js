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

let currentQuestion = 0;

function startGame() {
  const nextQuestion = questions[currentQuestion];
  const question = document.getElementById("question");
  question.innerHTML = nextQuestion.question;
  console.log(currentQuestion);
  currentQuestion++;
}

function showQuestion() {
  const question = document.getElementById("quiz-main");
  for (let i = 0; i < questions.length; i++) {
    console.log(showQuestion());
  }
}

showQuestion();

function checkResponse() {}

function nextQuestion() {
  const nextQuestion = questions[currentQuestion];
  const question = document.getElementById("question");
  question.innerHTML = nextQuestion.question;
  console.log(currentQuestion);
  currentQuestion++;
}

function showResults() {}
