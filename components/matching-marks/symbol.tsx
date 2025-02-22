import SymbolPart from "./symbol-part";

interface SymbolProps {
    suit: number[]
}

const Symbol = ({ suit }: SymbolProps) => {


    let suitTopLeft: number[] = suit.slice(0, 9)
    let suitTopRight: number[] = suit.slice(9, 18)
    let suitBottomLeft: number[] = suit.slice(18, 27)
    let suitBottomRight: number[] = suit.slice(27, 36)

    return (
        <div className="flex flex-wrap flex-col gap-2 border-white border-4 p-2 bg-red-700">
            <div className="flex gap-2">
                <SymbolPart suit={suitTopLeft}></SymbolPart>
                <SymbolPart suit={suitTopRight}></SymbolPart>
            </div>
            <div className="flex gap-2">
                <SymbolPart suit={suitBottomLeft}></SymbolPart>
                <SymbolPart suit={suitBottomRight}></SymbolPart>
            </div>
        </div>
    );
}
 
export default Symbol;