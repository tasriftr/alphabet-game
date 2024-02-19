function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function getRandomAlphabet() {
  // create alphabet array
  const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabets = alphabetString.split("");
  //   get a random index number between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}
