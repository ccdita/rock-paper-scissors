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

