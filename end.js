//This block of code selects two HTML elements on the page: one with the class
let container = document.querySelector(".container");
let mostRecentScore = document.querySelector(".mostRecentScore");


//This block of code defines a function, which checks the user's answers to the quiz questions and calculates the number of correct answers. It then displays an alert with the user's score and updates the "mostRecentScore" element with the score message.
function showfinalScore() {
  let numCorrectAnswers = 0;
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

  const scoreMessage = `You scored ${numCorrectAnswers} out of ${questions.length}!`;
  alert(scoreMessage);

  // Update the most recent score element with the user's score
  mostRecentScore.textContent = scoreMessage;
}

// // Add an event listener to the submit button to show the final score
// const submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", showfinalScore);
