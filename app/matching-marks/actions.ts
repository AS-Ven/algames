let guesses: string[] = []

export function checkGuesses() {
    if (guesses.length != 2)
        return

    if (guesses[0] == guesses[1]) {
        console.log("Well Played !");
        return 1
    } else {
        console.log("Game Over");
        return 0
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

export function refresh() {
    console.log("Refreshing !")
}