let currentPlayer = 1

var boxesAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var player1Boxes = []
var player2Boxes = []

var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
]

var gameOver = false


function findWinningCombination(playerBoxes) {

    for (combination of winningCombinations) {

        let matches = 0;

        for (let number of combination) {
            if (playerBoxes.includes(number)) {
                matches = matches + 1;
            }
        }

        if (matches === 3) {
            return combination;
        }
    }

    return;
}


function handleClickBox(boxNumber) {

    console.log(boxesAvailable)
    console.log(boxNumber)

    if (!boxesAvailable.includes(boxNumber)) {
        return
    }

    if (gameOver === true) {
        return;
    }

    if (currentPlayer === 1) {

        // Put an cross in right box
        var cross = document.getElementById("cross-" + boxNumber)
        cross.style.display = "flex"

        // Changes the boxes available
        boxesAvailable = boxesAvailable.filter(x => x !== boxNumber)

        // Add to player 1 boxes
        player1Boxes.push(boxNumber)

        var winningCombination = findWinningCombination(player1Boxes);

        // If there is a winning combination
        // Write some text in the box saying the player has won:
        if (winningCombination !== undefined) {
            var textBox = document.getElementById("player-turn-box")
            textBox.textContent = "Player 1 wins!"
            gameOver = true
            return;
        }
        
        // Changes the player
        currentPlayer = 2

        // Changes the player text
        var textBox = document.getElementById("player-turn-box")
        textBox.textContent = "Player 2 turn"

    } else {

        // Put an nought in right box
        var nought = document.getElementById("nought-" + boxNumber)
        nought.style.display = "flex"

        // Changes the boxes available
        boxesAvailable = boxesAvailable.filter(x => x !== boxNumber)

        // Add to player 2 boxes
        player2Boxes.push(boxNumber)

        var winningCombination = findWinningCombination(player2Boxes);

        // If there is a winning combination
        // Write some text in the box saying the player has won:
        if (winningCombination !== undefined) {
            var textBox = document.getElementById("player-turn-box")
            textBox.textContent = "Player 2 wins!"

            gameOver = true
            return;
        }
        
        // Changes the player
        currentPlayer = 1

        // Changes the player text
        var textBox = document.getElementById("player-turn-box")
        textBox.textContent = "Player 1 turn"
        
    }

}

