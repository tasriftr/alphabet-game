// function play() {
//   // hide the home screen by adding hidden class
//   // show the playground
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play");
//   playSection.classList.remove("hidden");
// }
function handleKeyPress(event) {
  console.log(event);
  const playerPressed = event.key;
  //   get the expected press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  //   check if matched or not
  if (playerPressed === expectedAlphabet) {
    // const point = document.getElementById();

    // update score
    // 1.get the current score
    const currentScoreElement = document.getElementById("score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // 2.increase the score by 1
    const newScore = currentScore + 1;
    // 3.show the updated score
    currentScoreElement.innerText = newScore;
    // start a new round
    continueGame();
    removeBackgroundColorById(expectedAlphabet);
    playSound();
  } else {
    console.log("thik hoy nai");
    playSoundError();
  }
}
// capture what key get pressed
document.addEventListener("keyup", handleKeyPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getRandomAlphabet();
  //   display the random alphabet
  const currentAlphabetId = document.getElementById("current-alphabet");
  currentAlphabetId.innerText = alphabet;

  //   add background color
  setBackgroundColorById(alphabet);
}

function playButton() {
  hideElementById("home");
  showElementById("play");
  continueGame();
}

function playSound() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio();
  audio.src = "score.mp3";

  // Play the sound
  audio.play();
}
function playSoundError() {
  // Create an Audio object with the path to your sound file
  var audio = new Audio();
  audio.src = "error.mp3";

  // Play the sound
  audio.play();
}
