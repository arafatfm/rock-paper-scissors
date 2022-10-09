function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}
function playRound(playerSelection = "pS", computerSelection = "cS") {
    let pS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    playerSelection = pS

    if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return
    }

    if (playerSelection === winCase(computerSelection)) {
        console.log("You Win! "+playerSelection+" beats "+computerSelection)
    } else {
        console.log("You Lose! "+computerSelection+" beats "+playerSelection)
    }
}

function winCase(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return "Paper"
        case "Paper":
            return "Scissors"
        default:
            return "Rock"
    }
}


const playerSelection = prompt("Enter Choice: ")
const computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)