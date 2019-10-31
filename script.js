var message = document.querySelector("#message");
var titulo = document.querySelector("h1");
var gamePanels = document.querySelectorAll(".random-rgb-panel");
var numberOfPanels = 6;

generateRandomColors(numberOfPanels);

var targetColor = document.querySelector("#targetColor");
targetColor.textContent = selectedColor = pickColor();

var newGameButton = document.querySelector("#newGameButton");
newGameButton.addEventListener("click", function() {
    newGame(numberOfPanels);
});

var easyModeButton = document.querySelector("#easyModeBtn");
easyModeButton.addEventListener("click", function() {
    this.classList.add("selectedMode");
    hardModeButton.classList.remove("selectedMode");
    numberOfPanels = 3;

    newGame(numberOfPanels);
});

var hardModeButton = document.querySelector("#hardModeBtn");
hardModeButton.addEventListener("click", function() {
    this.classList.add("selectedMode");
    easyModeButton.classList.remove("selectedMode");
    numberOfPanels = 6;

    newGame(numberOfPanels);
});

startGame();

function startGame() {
    for (let index = 0; index < gamePanels.length; index++) {
        const panel = gamePanels[index];
        
        panel.addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
    
            if (clickedColor == selectedColor) {
                message.textContent = "Correct";
                endGame();
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }    
}

function newGame(difficult) {
    newGameButton.textContent = "New Colors";
    message.textContent = "";

    generateRandomColors(difficult);
    targetColor.textContent = selectedColor = pickColor();
    titulo.style.backgroundColor = "steelblue";
}

function generateRandomColors(numberOfPanels) {
    for (let i = 0; i < numberOfPanels; i++) {
        gamePanels[i].style.backgroundColor =
         "rgb(" + randomTo255() + ", " + randomTo255() + " ," + randomTo255() + ")";
    }

    if (numberOfPanels < gamePanels.length) {
        for (let index = numberOfPanels; index < gamePanels.length; index++) {
            gamePanels[index].style.display = "none";
        }
    } else {
        for (let index = 0; index < gamePanels.length; index++) {
            gamePanels[index].style.display = "block";
        }        
    }
}

function randomTo255() {
    return Math.floor(Math.random() * 255);
}

function pickColor() {
    var randomColor = Math.floor(Math.random() * numberOfPanels);
    return gamePanels[randomColor].style.backgroundColor;
}

function endGame() {
    for (let index = 0; index < gamePanels.length; index++) {
        const panel = gamePanels[index];
        
        panel.style.backgroundColor = selectedColor;
    }

    titulo.style.backgroundColor = selectedColor;
    newGameButton.textContent = "Play again";
}
