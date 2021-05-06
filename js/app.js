let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-bard");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You Win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You Lose!`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${userChoice} equals ${computerChoice}. Its a Draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("Player: " + userChoice + "\nComputer: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })

    paper_div.addEventListener('click', function() {
        game("Paper");
    })

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    })
}

main();