let attempts = 0;
let firstCode = 4703;

const guess = document.getElementById("guess");

const enter = document.getElementById("enter");

const hint = document.getElementById("hint");

enter.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  if (userValue === firstCode) {
   hint.textContent = "Access Granted.  https://sites.google.com/view/welcometouniseon/accessed-documents-archive";
  } else {
   hint.textContent = "Access Denied.";
  }
}