import SymbolPart from "./symbol-part";

const Symbol = () => {
    return (
        <div className="flex flex-wrap gap-2 border-white border-4 p-2 bg-red-700">
            <div className="flex flex-col gap-2">
                <SymbolPart></SymbolPart>
                <SymbolPart></SymbolPart>
            </div>
            <div className="flex flex-col gap-2">
                <SymbolPart></SymbolPart>
                <SymbolPart></SymbolPart>
            </div>
        </div>
    );
}
 
export default Symbol;