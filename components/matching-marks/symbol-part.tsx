interface SymbolPartProps {
    size?: number
}

const SymbolPart = ({ size = 3 }: SymbolPartProps) => {

    let suit: number[] = []
    for (let i = 0; i < size * size; i++) {
        Math.floor(Math.random() * 2) ? suit.push(1) : suit.push(0)
    }
    
    return (
        <div className="flex flex-col">
            {
                Array.from({ length: size }, (_, i) => (
                    <div key={i} className="flex" id={suit.join("")}>
                        {
                            Array.from({ length: size }, (_, j) => (
                                <div
                                    key={`${i}.${j}`}
                                    className={`
                                        w-2 h-2 flex
                                        ${suit[`${3 * i + j}`] == 1 ? 'bg-white' : ''}
                                        `}
                                ></div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default SymbolPart;