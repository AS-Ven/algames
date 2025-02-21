interface SymbolPartProps {
    size?: number
}

const SymbolPart = ({ size = 3 }: SymbolPartProps) => {

    return (
        <div className="flex flex-col">
            {
                Array.from({ length: size }, (_, i) => (
                    <div key={i} className="flex">
                        {
                            Array.from({ length: size }, (_, j) => (
                                <div
                                    key={`${i}.${j}`}
                                    className={`
                                        w-2 h-2 flex
                                        ${Math.floor(Math.random() * 2) == 1 ? 'bg-white' : ''}
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