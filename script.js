//This code block defines several variables
let question = document.querySelector("#question");
let choiceContainers = Array.from(
  document.querySelectorAll(".choice-container")
);
let choices = document.querySelectorAll(".choice-text");
let progressText = document.querySelector("#progressText");
let scoreText = document.querySelector("#score");
let playButton = document.querySelector(".btn");
let startGame = document.querySelector(".start");
let quiz = document.querySelector(".quiz");
let correctAnswer = document.querySelector(".correctAnswer");
let restart = document.querySelector(".restart");
let correctHold;
console.log(startGame);

//The second code block defines four variables that will be used to keep track of the user's progress and score in the game. The variables are initialized to 0 and will be updated as the user progresses through the quiz.
let score = 0;
let questionCounter = 0;
let previousIndex = 0;
let numCorrectAnswers = 0;
console.log(choices);

//This line of code selects an HTML element with the class "choice-container" to retrieve an answer choice for a quiz question.
let choice = document.querySelector(".choice-container");


//This code block adds an event listener to the "playButton" element that triggers a function which hides the "startGame" button, shows the "quiz" element, resets the user's score to 0, updates the score display, and retrieves a new quiz question.
playButton.addEventListener("click", function () {
  startGame.classList.add("hidden");
  quiz.classList.remove("hidden");
  score = 0;
  scoreText.textContent = `Score: ${score}`;
  getNewQuestion();
});

//This code defines an array of objects called "questions" which contains a set of quiz questions, their answer choices, and the correct answer.
let questions = [
  {
    question: "Who is the protagonist in this film?",
    choices: [{ choice: "Bodhi" }, { choice: "Utah" }, { choice: "Trey" }],
    answer: "Utah",
  },
  {
    question: "How did Utah's friend die in this film?",
    choices: [
      { choice: "Car crash" },
      { choice: "Surfing accident" },
      { choice: "Dirtbike crash" },
    ],
    answer: "Dirtbike crash",
  },
  {
    question: "What agency did Utah work for?",
    choices: [{ choice: "FBI" }, { choice: "DEA" }, { choice: "CIA" }],
    answer: "FBI",
  },
  {
    question: "Who was Bodhi being chased by?",
    choices: [{ choice: "Samsara" }, { choice: "Utah" }, { choice: "Jake" }],
    answer: "Utah",
  },
  {
    question: "How many heists did the crew need to complete?",
    choices: [{ choice: "10" }, { choice: "2" }, { choice: "5" }],
    answer: "10",
  },
];


//This code creates a function called "next" that is used to move the user to the next question in the quiz when they click a button.
function next(evt) {
  console.log("this is next");
  evt.preventDefault();

  previousIndex = currentquestionIndex;
  currentquetionIndex++;
  console.log(q[currentquestionIndex]);
  q[previousIndex].style.display = "none";
  q[currentIndex].style.display = "block";
  
}

//This block of code creates an event listener for each answer choice in a quiz game. When the user clicks an answer choice, the function checks whether the clicked choice matches the correct answer for the current question.
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function () {
        questionCounter += 1;
        
        //Check if clicked choice matches the correct answer
        if (choices[i].textContent === correctHold.answer) {
            console.log("Correct answer!");
            score += 1;
            scoreText.textContent = `Score: ${score}`;
            
            //Call get new question here-
            getNewQuestion();
        } else {
            console.log("Wrong answer.");
            scoreText.textContent = `Score: ${score}`;
            getNewQuestion();
        }
        
        console.log(score);
    });
}

//This block of code creates an event listener for each answer choice in a quiz game.When the user clicks an answer choice, the function checks whether the clicked choice matches the correct answer for the current question
function getNewQuestion() {
    if (questionCounter === 5) {
        // RESET PAGE
        return window.location.assign("/end.html");
    }
    const questionIndex = Math.floor(Math.random() * questions.length);
    
    let newQuestion = questions[questionIndex];
    correctHold = newQuestion;
    question.textContent = newQuestion.question;
    
    for (let i = 0; i < choices.length; i++) {
        choices[i].textContent = newQuestion.choices[i].choice;
    }
    console.log(newQuestion);
    return newQuestion;
}


//This block of code defines a function called "calculateQuizResults" that loops through the questions in a quiz and checks whether the user's selected answers match the correct answers.
function calculateQuizResults() {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        
        const selectedAnswer = choiceContainers[i].querySelector("input:checked");
        if (selectedAnswer) {
            const selectedChoice = selectedAnswer.nextElementSibling;
            if (selectedChoice.textContent === question.answer) {
                numCorrectAnswers++;
            }
        }
    }
}  
    


