let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector("#buttonContainer");
// "Bubble" up to the parent container and add event listers to each child
buttonContainer.addEventListener("click", (e) => {
    // Get the event target's (button) id
    const targetId = e.target.id;
    let humanChoice = "";
    // Set the humanChoice depending on the button that was clicked
    switch (targetId) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break; 
    }
    // Call playRound() with the humanChoice
    playGame(playRound(humanChoice, getComputerChoice()));
});

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

// function getHumanChoice() {
//     const q = "Enter your play: (rock, paper, scissors)";
//     const plays = ["rock", "paper", "scissors"];
//     // Prompt the player for their play 
//     let humanChoice = prompt(q).toLowerCase();
//     // If the player does not enter a valid play, keep re-prompting them until they do so
//     while (!plays.includes(humanChoice)) {
//         humanChoice = prompt(q).toLowerCase();
//     }
//     return humanChoice;
// }

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

    return [winner, humanChoice, computerChoice];
}

function playGame(winnerArr) {
    const winner = winnerArr[0];
    const humanChoice = winnerArr[1];
    const computerChoice = winnerArr[2];
    // Determine the winner of the current round and increment the appropriate score
    const resultsContainer = document.querySelector("#resultsContainer");
    if (winner == "human") {
        humanScore = ++humanScore;
        resultsContainer.textContent = `You win! ${humanChoice} beats ${computerChoice}.
        Your score: ${humanScore} | Computer's score: ${computerScore}`;
    } else if (winner == "computer") {
        computerScore = ++computerScore;
        resultsContainer.textContent = `You lose! ${computerChoice} beats ${humanChoice}.
        Your score: ${humanScore} | Computer's score: ${computerScore}`;
    } else {
        resultsContainer.textContent = `Tie! You both chose ${humanChoice}.
        Your score: ${humanScore} | Computer's score: ${computerScore}`;
    }
    // }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultsContainer.textContent = `You win! Your score: ${humanScore} | Computer's score: ${computerScore}`;
        } else if (humanScore < computerScore) {
            resultsContainer.textContent = `You lose! Your score: ${humanScore} | Computer's score: ${computerScore}`;
        } else {
            resultsContainer.textContent = `Tie! Your score: ${humanScore} | Computer's score: ${computerScore}`;
        }
    }
};