let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate a random number (0, 1, 2)
    // Math.floor rounds the generated float down to the nearest integer
    let i = Math.floor(Math.random() * 3);

    // Switch block to return computer's play based on random number
    switch (i) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getHumanChoice() {
    const q = "Enter your play: (rock, paper, scissors)";
    const plays = ["rock", "paper", "scissors"];
    // Prompt the player for their play 
    let humanChoice = prompt(q).toLowerCase();
    // If the player does not enter a valid play, keep re-prompting them until they do so
    while (!plays.includes(humanChoice)) {
        humanChoice = prompt(q).toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let winner; 
    // Switch block to determine the winner of the round
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    winner = "draw";
                    break;
                case "paper":
                    winner = "computer";
                    break;
                case "scissors":
                    winner = "human";
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    winner = "human";
                    break;
                case "paper":
                    winner = "draw";
                    break;
                case "scissors":
                    winner = "computer";
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    winner = "computer";
                    break;
                case "paper":
                    winner = "human";
                    break;
                case "scissors":
                    winner = "draw";
                    break;
            }
            break;
    }

    if (winner == "human") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore = ++humanScore;
    } else if (winner == "computer") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore = ++computerScore;
    } else {
        console.log(`Tie! You both chose ${humanChoice}.`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
