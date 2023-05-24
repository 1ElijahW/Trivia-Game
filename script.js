document.addEventListener("DOMContentLoaded", function() {
let result = document.querySelector('.result');
let correct = document.querySelectorAll('.correct');
let startButton = document.querySelector('.start');
let option = document.querySelectorAll('.option');
let q = document.querySelectorAll('.q');
let directions = document.querySelector('.directions');
let restart = document.querySelector('.restart');

let currentQIndex = 0;
let previousQIndex = 0;
let score = 0;


function startTrivia() {
  q[currentQIndex].style.display = 'block';
  console.log('current', q[currentQIndex]);
  directions.style.display = 'none';
}

startButton.addEventListener('click', startTrivia);

option.forEach((button) => {
  button.addEventListener('click', next);
});

function next(evt) {
  console.log('this is next');
  evt.preventDefault();
  previousQIndex = currentQIndex;
  currentQIndex++;
  console.log(q[currentQIndex]);
  q[previousQIndex].style.display = 'none';
  q[currentQIndex].style.display = 'block';
}

function updateScore() {
  // let score = 0;
  score++;
  if (score === 5) {
    result.textContent = '100% Great job!';
  } else if (score === 4) {
    result.textContent = '80% Watch movie again!';
  } else if (score === 3) {
    result.textContent = '60% Watch movie again!';
  } else if (score === 2) {
    result.textContent = '40% Watch movie again!';
  } else if (score === 1) {
    result.textContent = '20% Watch movie again!';
  } else if (score === 0) {
    result.textContent = '0% Watch movie again!';
  }
}

correct.forEach((item) => {
  item.addEventListener('click', correctAnswer);
  console.log('correct');
});

function correctAnswer(evt) {
  console.log('evt target', evt.target);
  if (evt.target.classList.contains('correct')) {
    console.log('this is correct');
    updateScore();
  }
}

restart.addEventListener('click', restartTrivia);

function restartTrivia() {
  window.location.reload(true);
}

})