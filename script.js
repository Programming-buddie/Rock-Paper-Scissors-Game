// const choice = document.querySelector(".userRole");
// const pickedChoice = document.querySelector(".picked");
// const houseChoice = document.querySelector(".houseChoice");



// for (let index = 0; index < 3; index++) {
//   const userChoice = choice.children[index];

//   function selectedChoice() {
//     pickedChoice.style.display = "flex";
//     choice.style.display = "none";

//     const newChoice = pickedChoice.children[0].appendChild(userChoice);
//     if (newChoice.clientHeight <= 120) {
//       newChoice.style.marginTop = "-12rem";
//     }
//     const place = Math.floor(Math.random()*2)

//     const machineChoice = choice.children[place]
//     console.log(place, machineChoice)
//     houseChoice.children[0].append(machineChoice)
//     console.log(choice)

    
//   }

//   userChoice.addEventListener("click", selectedChoice);
// }

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
  const userPicked = choices.children[0].children[0].append(eachrole)
  

  // Picking Random choice
  const randomNum = Math.floor(Math.random()*3)

   const machineChoice = roles.children[randomNum]
   
  //  Putting the Random selection into place
    houseChoice.replaceChild(machineChoice, houseChoice.children[1])
  }

  // eventlistener for any role you pick
  eachrole.addEventListener("click", pickedChoice)
}

