const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener('keydown', () => {
  if (!started) {
    document.querySelector("#level-title").textContent = `Level ${level}`;
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

function nextSequence() {}

function checkAnswer() {}