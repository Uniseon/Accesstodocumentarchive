let attempts = 0;
let firstCode = 4703;
let secondCode = 18525121291514;

const guess = document.getElementById("guess");

const enter = document.getElementById("enter");

const hintOne = document.getElementById("hintOne");

const hintTwo = document.getElementById("hintTwo");

enter.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  if (userValue === firstCode) {
   hintOne.textContent = "Access Granted.  https://sites.google.com/view/welcometouniseon/accessed-documents-archive";
  } else {
   hintOne.textContent = "Access Denied.";
  }
  if (userValue === secondCode) {
   hintOne.textContent = "Access Granted.  DO NOT TELL ANYONE.  https://sites.google.com/view/welcometouniseon/you-made-it";
  } 

}
