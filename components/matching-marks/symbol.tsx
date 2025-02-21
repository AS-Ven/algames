import SymbolPart from "./symbol-part";

const Symbol = () => {
    
    let suit: string[] = []
    let size: number = 3

    let suitTopLeft: number[] = []
    let suitTopRight: number[] = []
    let suitBottomLeft: number[] = []
    let suitBottomRight: number[] = []

    for (let i = 0; i < size * size; i++) {
        Math.floor(Math.random() * 2) ? suitTopLeft.push(1) : suitTopLeft.push(0)
        Math.floor(Math.random() * 2) ? suitTopRight.push(1) : suitTopRight.push(0)
        Math.floor(Math.random() * 2) ? suitBottomLeft.push(1) : suitBottomLeft.push(0)
        Math.floor(Math.random() * 2) ? suitBottomRight.push(1) : suitBottomRight.push(0)
    }

    suit.push(suitTopLeft.join(""))
    suit.push(suitTopRight.join(""))
    suit.push(suitBottomLeft.join(""))
    suit.push(suitBottomRight.join(""))

    return (
        <div className="flex flex-wrap flex-col gap-2 border-white border-4 p-2 bg-red-700" id={suit.join("")}>
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