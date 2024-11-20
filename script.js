let attempts = 0;
let firstCode = 4703;
let secondCode = 18525121291514

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

  if (userValue === secondCode) {
   hint.textContent = "Access Granted.  DO NOT TELL ANYONE.  https://sites.google.com/view/welcometouniseon/you-made-it";
  } else {
   hint.textContent = "Access Denied.";
  }

}
