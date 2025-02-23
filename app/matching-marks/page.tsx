import SymbolGrid from "@/components/matching-marks/symbol-grid";
import { setSuit } from "./actions";

const MatchingMarks = () => {

    let suitListlength: number = 3
    setSuit(suitListlength * suitListlength)

    return (
        <main className="flex justify-center items-center h-screen">
            <SymbolGrid></SymbolGrid>
        </main>
    )
}

export default MatchingMarks;