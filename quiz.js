const multipleChoiceQuestions = [
  {
    question: "What is the name for the Jewish New Year?",
    options: ["Hannukah","Yom Kippur", "Kwanza", "Rosh Hashanah"],
    correctAnswer: 0,
  },
  {
    question: "How many blue stripes are there on the U/S flag??",
    options: ["6","7", "13", "0"],
    correctAnswer: 3,
  },
  {
    question: "Which one of these character is not friends with Harry Potter?",
    options: ["Ron Weasley","Neville Longbottom", "Draco Malfoy", "Hermione Granger"],
    correctAnswer: 2,
  },
  {
    question: "What is the color of Donald Duck's bowtie?",
    options: ["Red","Yellow", "Blue", "White"],
    correctAnswer: 0,
  },
  {
    question: "Which animal does not appear in the Chinese Zodiac?",
    options: ["Dragon","Rabbit", "Dog", "Hummingbird"],
    correctAnswer: 3,
  },
  {
    question: "Which country held the 2016 Summer Olympics?",
    options: ["China","Ireland", "Brazil", "Italy"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is the hottest?",
    options: ["Venus","Saturn", "Mercury", "Mars"],
    correctAnswer: 0,
  },
  {
    question: "Who was the only U.S President ot resign?",
    options: ["Herbet Hoover","Richard Nixon", "George W. Bush", "Barack Obama"],
    correctAnswer: 1,
  },
  {
    question: "In wat city you can find the Liberty Bell?",
    options: ["Washington D.C","Boston", "Philadelphia", "Manhattan"],
    correctAnswer: 2,
  },
];

let getElement = (e) => {
  e.preventDefault();
  console.log(document.getElementById("question"));
};

(function loadFirstQuestion(){
    var question = document.getElementById("question");
    question.innerText = multipleChoiceQuestions[0].question;

    var [option_1, option_2, option_3, option_4] = [document.getElementById("option-1"), document.getElementById("option-2"), document.getElementById("option-3"),document.getElementById("option-4")];
    option_1.innerHTML = multipleChoiceQuestions[0].options[0];
    option_2.innerHTML = multipleChoiceQuestions[0].options[1];
    option_3.innerText = multipleChoiceQuestions[0].options[2];
    option_4.innerText = multipleChoiceQuestions[0].options[3];

})();
