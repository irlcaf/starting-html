let DEBUG = true;
const multipleChoiceQuestions = [
  {
    question: "What is the name for the Jewish New Year?",
    options: ["Hannukah", "Yom Kippur", "Kwanza", "Rosh Hashanah"],
    correctAnswer: 0,
  },
  {
    question: "How many blue stripes are there on the U/S flag??",
    options: ["6", "7", "13", "0"],
    correctAnswer: 3,
  },
  {
    question: "Which one of these character is not friends with Harry Potter?",
    options: [
      "Ron Weasley",
      "Neville Longbottom",
      "Draco Malfoy",
      "Hermione Granger",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the color of Donald Duck's bowtie?",
    options: ["Red", "Yellow", "Blue", "White"],
    correctAnswer: 0,
  },
  {
    question: "Which animal does not appear in the Chinese Zodiac?",
    options: ["Dragon", "Rabbit", "Dog", "Hummingbird"],
    correctAnswer: 3,
  },
  {
    question: "Which country held the 2016 Summer Olympics?",
    options: ["China", "Ireland", "Brazil", "Italy"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is the hottest?",
    options: ["Venus", "Saturn", "Mercury", "Mars"],
    correctAnswer: 0,
  },
  {
    question: "Who was the only U.S President ot resign?",
    options: [
      "Herbet Hoover",
      "Richard Nixon",
      "George W. Bush",
      "Barack Obama",
    ],
    correctAnswer: 1,
  },
  {
    question: "In wat city you can find the Liberty Bell?",
    options: ["Washington D.C", "Boston", "Philadelphia", "Manhattan"],
    correctAnswer: 2,
  },
];

let questionNumber = 0;
localStorage.setItem("totalScore", 0);
localStorage.setItem("length", multipleChoiceQuestions.length);

let getElement = (e) => {
  uncheckRadios();
  e.preventDefault();
  checkAnswer(questionNumber);
  questionNumber++;
  if (questionNumber < multipleChoiceQuestions.length) {
    loadText(questionNumber);
  } else {
    window.location.href = "./results.html";
    if (DEBUG) {
      console.log("No more questions");
      console.log("Total score is: " + totalScore);
    }
  }
};

function uncheckRadios() {
  let radios = document.querySelectorAll('input[name="radios"]');
  for (i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}
(function loadFirstQuestion() {
  uncheckRadios();
  loadText(questionNumber);
})();

function loadText(questionNumber) {
  var question = document.getElementById("question");
  question.innerText = multipleChoiceQuestions[questionNumber].question;
  const options = document.querySelectorAll('label[name="options"]');

  for (i = 0; i < options.length; i++) {
    options[i].innerHTML = multipleChoiceQuestions[questionNumber].options[i];
  }
}

function checkAnswer(questionNumber) {
  const radios = document.querySelectorAll('input[name="radios"]');
  const correctAnswer = multipleChoiceQuestions[questionNumber].correctAnswer;
  if (radios[correctAnswer].checked === true) {
    totalScore = localStorage.getItem("totalScore");
    totalScore++;
    localStorage.setItem("totalScore", totalScore);
    if (DEBUG === true) {
      console.log(
        "Correct answer for question #" +
          questionNumber +
          " is: " +
          multipleChoiceQuestions[questionNumber].options[correctAnswer]
      );
      console.log("Current score: " + totalScore);
    }
  } else {
    if (DEBUG) {
      console.log("Incorrect answer!");
    }
  }
}
