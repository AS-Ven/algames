let guesses: string[] = []

export function checkGuesses() {
    if (!hasGuessed())
        return

    if (guesses[0] == guesses[1]) {
        console.log("Well Played !");
    } else {
        console.log("Game Over");
    }
}

export function hasGuessed() {
    if (guesses.length != 2)
        return false
    return true
}

export function addGuess(guess: string) {
    guesses.push(guess)
    checkGuesses()
}

export function removeGuess() {
    guesses.pop()
    checkGuesses()
}

export function removeGuesses() {
    guesses = []
}

export function refresh() {
    console.log("Refreshing !")
}