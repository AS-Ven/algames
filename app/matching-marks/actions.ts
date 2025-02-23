// Check the value

// Change color

// Reset the grid

let guesses: string[] = []

export function checkGuesses() {
    if (guesses.length != 2)
        return

    if (guesses[0] == guesses[1]) {
        console.log("Well Played !");
    } else {
        console.log("Game Over");
    }
}

export function addGuess(guess: string) {
    guesses.push(guess)
    checkGuesses()
}

export function removeGuess() {
    guesses.pop()
    checkGuesses()
}