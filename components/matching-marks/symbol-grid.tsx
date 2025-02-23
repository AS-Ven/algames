import Symbol from "./symbol";

interface SymbolGridProps {
    difficulty?: number
}

const SymbolGrid = ({ difficulty = 3 }: SymbolGridProps) => {

    let suit: number[] = []
    let suitList: number[][] = []
    let peerSuit: number[] = []

    for (let i = 0; i < difficulty * difficulty - 2; i++) {
        suit = []
        for (let i = 0; i < 36; i++) {
            Math.floor(Math.random() * 2) ? suit.push(1) : suit.push(0)
        }
        suitList.push(suit)
    }

    for (let i = 0; i < 36; i++) {
        Math.floor(Math.random() * 2) ? peerSuit.push(1) : peerSuit.push(0)
    }

    for (let i = 0; i < 2; i++) {
        suitList.splice(Math.floor(Math.random() * (suitList.length + 1)), 0, peerSuit)
    }    

    return (
        <div className="flex flex-wrap flex-col gap-4 justify-center items-center h-screen">
            {
                Array.from({ length: difficulty }, (_, i) => (
                    <div key={i} className="flex gap-4">
                        {
                            Array.from({ length: difficulty }, (_, j) => (
                                <Symbol
                                    key={`${i}.${j}`}
                                    suit={suitList[3 * i + j]}
                                ></Symbol>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default SymbolGrid;