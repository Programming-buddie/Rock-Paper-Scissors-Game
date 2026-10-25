// Selecting element
const roles = document.querySelector(".userRole")
const choices = document.querySelector(".picked");
const houseChoice = document.querySelector(".houseChoice")
const score = document.querySelector("#score")

const initalscore = (Number(score.textContent))

// Selecting each role
for (index = 0; index < 3; index++){
 const selectedRole = roles.children[index]

  // Fuction for user picked choice
  function pickedChoice() {
  roles.style.display = "none";
  choices.style.display = "flex";

  // Appears on the screen as what you picked
  const userPicked = choices.children[0].children[0].append(selectedRole.cloneNode(true))
  

  // Picking Random choice
  const randomNum = Math.floor(Math.random()*3)

  const machineChoice = roles.children[randomNum]
  console.log(roles.children[0], roles.children[1], roles.children[2])
   
  //  Putting the Random selection into place

    // Remove display of the skeleton
     houseChoice.children[1].style.display = "none"
  
  houseChoice.replaceChild(machineChoice, houseChoice.children[1])


  // Adding rules

  // PAPER RULES 
  if (selectedRole.className == "Paper" && machineChoice.className == "Paper") {
    console.log("Tie")
  }
  if (selectedRole.className == "Paper" && machineChoice.className == "Rock") {
    console.log("Win")
    score.textContent = initalscore+1
  }
  if (selectedRole.className == "Paper" && machineChoice.className == "Scissors") {
    console.log("Lose")
    score.textContent = initalscore-1
  }

  // SCISSORS RULES
  if (selectedRole.className == "Scissors" && machineChoice.className == "Scissors") {
    console.log("Tie")
  }
  if (selectedRole.className == "Scissors" && machineChoice.className == "Paper") {
    console.log("Win")
    score.textContent = initalscore+1
  }
  if (selectedRole.className == "Scissors" && machineChoice.className == "Rock") {
    console.log("Lose")
    score.textContent = initalscore-1
  }

  // ROCK RULES
  if (selectedRole.className == "Rock" && machineChoice.className == "Rock") {
    console.log("Tie")
  }
  if (selectedRole.className == "Rock" && machineChoice.className == "Scissors") {
    console.log("Win")
    score.textContent = initalscore+1
  }
  if (selectedRole.className == "Rock" && machineChoice.className == "Paper") {
    console.log("Lose")
    score.textContent = initalscore-1
  }
  
  }

  // eventlistener for any role you pick
  selectedRole.addEventListener("click", pickedChoice)
  
}

