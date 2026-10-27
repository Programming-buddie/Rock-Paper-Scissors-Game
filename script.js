// Selecting element
const roles = document.querySelector(".userRole");
const choices = document.querySelector(".picked");
const houseChoice = document.querySelector(".houseChoice");
const score = document.querySelector("#score");
const winandloseDiv = document.querySelector(".win-lose");
const playagainButton = document.querySelector("#playagain")



// Keep the score value
let count = Number(localStorage.getItem("score"));

// Win function
function win() {
  count++;
  score.textContent = count;
  localStorage.setItem("score", count);
}

// Lose function
function lose() {
  count--;
  score.textContent = count;
  localStorage.setItem("score", count);
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
    console.log(roles.children[0], roles.children[1], roles.children[2]);

    //  Putting the Random selection into place

    // Remove display of the skeleton
    houseChoice.children[1].style.display = "none";

    houseChoice.replaceChild(machineChoice, houseChoice.children[1]);

    // Adding rules
    localStorage.setItem("score", 12);
    // PAPER RULES
    if (
      selectedRole.className == "Paper" &&
      machineChoice.className == "Paper"
    ) {
      winandloseDiv.children[0].innerHTML = "TIE";
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

    console.log(localStorage.getItem("score"));
  }

  // eventlistener for any role you pick
  selectedRole.addEventListener("click", pickedChoice);
  
}
playagainButton.addEventListener("click", ()=>{
  let hcount = Number(localStorage.getItem("score"))
  score.textContent = hcount;
  window.location.assign("./index.html") 

})