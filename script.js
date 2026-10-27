// Selecting element
const roles = document.querySelector(".userRole");
const choices = document.querySelector(".picked");
const houseChoice = document.querySelector(".houseChoice");
const score = document.querySelector("#score");
const winandloseDiv = document.querySelector(".win-lose");
const playagainButton = document.querySelector("#playagain")



// Keep the score value
let count = Number(localStorage.getItem("score"));

// TIE function
function tie() {
  if (choices.children[0].children[0].children[1]){
    choices.children[0].children[0].children[1].remove()
  }
}
// Win function
function win() {
  count++;
  score.textContent = count;
  localStorage.setItem("score", count);
  //choices.children[0].removeChild(choices.children[0].children[0].children[1])
  if (choices.children[0].children[0].children[1]){
    choices.children[0].children[0].children[1].remove()
  }
}

// Lose function
function lose() {
  count--;
  score.textContent = count;
  localStorage.setItem("score", count);
  
  if (choices.children[0].children[0].children[1]){
    choices.children[0].children[0].children[1].remove()
  }
}

// Selecting each role
for (index = 0; index < 3; index++) {
  const selectedRole = roles.children[index];

  // Fuction for user picked choice
  function pickedChoice() {
    roles.style.display = "none";
    choices.style.display = "flex";

    // Appears on the screen as what you picked
    const userPicked = choices.children[0].children[0].append(
      selectedRole.cloneNode(true),
    );

    // Picking Random choice
    const randomNum = Math.floor(Math.random() * 3);

    const machineChoice = roles.children[randomNum];
    

    //  Putting the Random selection into place

    // Remove display of the skeleton
    houseChoice.children[1].style.display = "none";

    houseChoice.replaceChild(machineChoice.cloneNode(true), houseChoice.children[1]);

    // Adding rules
    
    // PAPER RULES
    if (
      selectedRole.className == "Paper" &&
      machineChoice.className == "Paper"
    ) {
      winandloseDiv.children[0].innerHTML = "TIE";
      tie()
    }
    if (
      selectedRole.className == "Paper" &&
      machineChoice.className == "Rock"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU WIN";
      win();
    }
    if (
      selectedRole.className == "Paper" &&
      machineChoice.className == "Scissors"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU LOSE";
      lose();
    }

    // SCISSORS RULES
    if (
      selectedRole.className == "Scissors" &&
      machineChoice.className == "Scissors"
    ) {
      winandloseDiv.children[0].innerHTML = "TIE";
      tie()
    }
    if (
      selectedRole.className == "Scissors" &&
      machineChoice.className == "Paper"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU WIN";
      win();
    }
    if (
      selectedRole.className == "Scissors" &&
      machineChoice.className == "Rock"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU LOSE";
      lose();
    }

    // ROCK RULES
    if (selectedRole.className == "Rock" && machineChoice.className == "Rock") {
      winandloseDiv.children[0].innerHTML = "TIE";
      tie()
    }
    if (
      selectedRole.className == "Rock" &&
      machineChoice.className == "Scissors"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU WIN";
      win();
      
      
    }
    if (
      selectedRole.className == "Rock" &&
      machineChoice.className == "Paper"
    ) {
      winandloseDiv.children[0].innerHTML = "YOU LOSE";
      lose();
      
    }
    // Play Again function
    function playAgain() {
      roles.style.display = "flex";
      choices.style.display = "none";
      
    }
  playagainButton.addEventListener("click", playAgain)
    
  }
  
  // eventlistener for any role you pick
  selectedRole.addEventListener("click", pickedChoice);
  
}
