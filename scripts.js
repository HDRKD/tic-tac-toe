console.log('hello!')

let currentPlayer = 1

var boxesAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function handleClickBox(boxNumber) {
    console.log("box clicked", boxNumber)


    if (currentPlayer === 1) {

        // Put an cross in right box
        var cross = document.getElementById("cross-" + boxNumber)
        cross.style.display = "flex"

        // Changes the boxes available
        boxesAvailable = boxesAvailable.filter(x => x !== boxNumber)
        
        // Changes the player
        currentPlayer = 2

        // chamges the player text
        var textBox = document.getElementById("player-turn-box")
        textBox.textContent = "Player 2 turn"
    } else {

        // Put an nought in right box
        var nought = document.getElementById("nought-" + boxNumber)
        nought.style.display = "flex"

        // Changes the boxes available
        boxesAvailable = boxesAvailable.filter(x => x !== boxNumber)
        
        // Changes the player
        currentPlayer = 1

        // chamges the player text
        var textBox = document.getElementById("player-turn-box")
        textBox.textContent = "Player 1 turn"
        
        
    }


}

