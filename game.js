const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.querySelector("#level-title").textContent = "Press A Key to Start";

document.addEventListener('keydown', () => {
  if (!started) {
    start();
    started = true;
  }
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function () {
    const userColor = this.id;
    userClickedPattern.push(userColor);
    const audio = new Audio(`sounds/${userColor}.mp3`);
    audio.play();
    button.classList.add('pressed');
    setTimeout(() => button.classList.remove('pressed'), 100);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function start() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  nextSequence();
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.querySelector("#level-title").textContent = `Level ${level}`;

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  const newColorIndex = gamePattern.length - 1;
  const audio = new Audio(`sounds/${gamePattern[newColorIndex]}.mp3`);
  audio.play();
  const button = document.querySelector(`#${gamePattern[newColorIndex]}`);
  button.classList.add('pressed');
  setTimeout(() => button.classList.remove('pressed'), 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    const audio = new Audio(`sounds/wrong.mp3`);
    audio.play();
    document.querySelector('body').classList.add('game-over');
    document.querySelector("#level-title").textContent = `Game Over, Press Any Key to Restart`;

    setTimeout(() => {
      document.querySelector('body').classList.remove('game-over');
    }, 200);

    reset();
  }
}

function reset() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
