// Selecting element
const roles = document.querySelector(".userRole")
const choices = document.querySelector(".picked");
const houseChoice = document.querySelector(".houseChoice")

// Selecting each role
for (index = 0; index < 3; index++){
 const eachrole = roles.children[index]

  // Fuction for user picked choice
  function pickedChoice() {
  roles.style.display = "none";
  choices.style.display = "flex";

  // Appears on the screen as what you picked
  const userPicked = choices.children[0].children[0].append(eachrole.cloneNode(true))
  

  // Picking Random choice
  const randomNum = Math.floor(Math.random()*3)

  const machineChoice = roles.children[randomNum]
  console.log(roles.children[0], roles.children[1], roles.children[2])
   
  //  Putting the Random selection into place

    // Remove display of the skeleton
     houseChoice.children[1].style.display = "none"
  
  houseChoice.replaceChild(machineChoice, houseChoice.children[1])
  }

  // eventlistener for any role you pick
  eachrole.addEventListener("click", pickedChoice)
}

