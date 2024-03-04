let userScore = 0;
let compScore = 0;
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const getCompChoice = () => {
  const opts = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return opts[ranIdx];
};

const drawGame = (userChoice, compChoice) => {
  msg.innerText = `Game was a Draw !\nYou Chose - ${userChoice}\nComp Chose - ${compChoice}`;
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Win !\nYou Chose- ${userChoice}\nComp Chose - ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++
    comp.innerText = compScore;
    msg.innerText = `You Lose !\nYou Chose - ${userChoice}\nComp Chose - ${compChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "yellow";
  }
};

let playGame = (userChoice) => {
  const compChoice = getCompChoice();
  if(userChoice === compChoice) {
    // Draw game
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if(userChoice === "rock") {
      // paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
      // scissor, rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // paper, rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});