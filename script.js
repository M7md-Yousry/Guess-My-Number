'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayStyle = function (style) {
  document.querySelector('.number').style.width = style;
};
const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

// document.querySelector('.number').textContent = number;

// Section 6
// Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  displayBody('#222');
  displayStyle('15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (number === guess) {
    displayMessage('🎉 Correct Number');
    displayBody('#60b347');
    displayStyle('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (number !== guess) {
    if (score > 1) {
      displayMessage(guess > number ? 'Try Lower ⬇️' : 'Try Higher ⬆️');
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost 💥');
      displayScore(0);
    }
  }
  // } else if (number < guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Try Lower ⬇️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (number > guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Try Higher ⬆️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
