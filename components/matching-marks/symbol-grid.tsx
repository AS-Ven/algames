import Symbol from "./symbol";

interface SymbolGridProps {
    difficulty?: number
}

const SymbolGrid = ({ difficulty = 3 }: SymbolGridProps) => {

    let suit: number[] = []
    let suitList: number[][] = []

    for (let i = 0; i < difficulty * difficulty; i++) {
        suit = []
        for (let i = 0; i < 36; i++) {
            Math.floor(Math.random() * 2) ? suit.push(1) : suit.push(0)
        }
        suitList.push(suit)
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center h-screen">
            {
                Array.from({ length: difficulty }, (_, i) => (
                    <div key={i} className="flex flex-col gap-4">
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