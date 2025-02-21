import SymbolPart from "./symbol-part";

const Symbol = () => {
    return (
        <div className="flex flex-wrap gap-4 border-white border-8 p-4 bg-red-700">
            <div className="flex flex-col gap-4">
                <SymbolPart></SymbolPart>
                <SymbolPart></SymbolPart>
            </div>
            <div className="flex flex-col gap-4">
                <SymbolPart></SymbolPart>
                <SymbolPart></SymbolPart>
            </div>
        </div>
    );
}
 
export default Symbol;