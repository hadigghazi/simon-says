const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

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
    checkAnswer();
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

function checkAnswer() {}