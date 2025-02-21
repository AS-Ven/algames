import Symbol from "./symbol";

interface SymbolGridProps {
    difficulty?: number
}

const SymbolGrid = ({ difficulty = 3 }: SymbolGridProps) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center h-screen">
            {
                Array.from({ length: difficulty }, (_, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        {
                            Array.from({ length: difficulty }, (_, j) => (
                                <Symbol key={`${i}.${j}`}></Symbol>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default SymbolGrid;