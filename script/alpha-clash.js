// function play() {
//   // hide the home screen by adding hidden class
//   // show the playground
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play");
//   playSection.classList.remove("hidden");
// }
function continueGame() {
  // generate a random alphabet
  const alphabet = getRandomAlphabet();
  //   display the random alphabet
  const currentAlphabetId = document.getElementById("current-alphabet");
  currentAlphabetId.innerText = alphabet;
}

function play() {
  hideElementById("home");
  showElementById("play");
  continueGame();
}
