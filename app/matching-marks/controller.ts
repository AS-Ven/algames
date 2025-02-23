export function createSuit() {
    let suit: number[] = []

    for (let i = 0; i < 36; i++) {
        Math.floor(Math.random() * 2) ? suit.push(1) : suit.push(0)
    }
    
    return suit
}

export function createSuitList(lenght: number) {
    let suitList: number[][] = []

    for (let i = 0; i < lenght; i++) {
        suitList.push(createSuit())
    }

    return suitList
}

export function createSuitListWithPeer(lenght: number) {
    let suitList: number[][] = createSuitList(lenght - 2)
    let peerSuit: number[] = createSuit()

    for (let i = 0; i < 2; i++) {
        suitList.splice(Math.floor(Math.random() * (suitList.length + 1)), 0, peerSuit)
    }

    return suitList
}