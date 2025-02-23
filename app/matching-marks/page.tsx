import SymbolGrid from "@/components/matching-marks/symbol-grid";
import { createSuitListWithPeer } from "./controller";

const MatchingMarks = () => {

    let suitListLenght: number = 3
    let suitList: number[][] = createSuitListWithPeer(suitListLenght * suitListLenght)

    return (
        <main className="flex justify-center items-center h-screen">
            <SymbolGrid suitList={suitList}></SymbolGrid>
        </main>
    )
}

export default MatchingMarks;