const compScorePara = document.getElementById("comp-score");
const userScorePara = document.getElementById("user-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


let userScore= 0;
let compScore = 0;

// Get Random Computer Choice
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//Game draw
const drawGame = () => {
  console.log("Draw Game");
  msg.innerText = "Draw Game";
};

// Update Scores and Message
const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin=true) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log(`You Win `);
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
    
  } 
  else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer Win");
    msg.innerText = `You lose, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    
    
  }
  //console.log("User Score:", userScore, "Computer Score:", compScore);
};

// Play Game Function
const playGame = (userChoice) => {
  console.log("user choice ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event Listeners for Choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


const reset=document.querySelector("#reset-btn")

reset.addEventListener("click", () => {
  reset.classList.add("rotate");

  // Reset Scores
  userScore = 0;
  compScore = 0;

  // Reset UI
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;

  // Clear the messagev
  msg.innerText = "Play your move";
  msg.style.backgroundColor = ""; // Reset background color

  // Remove rotation animation after 500ms
  setTimeout(() => reset.classList.remove("rotate"), 500);
});
