import Clock from "@/components/matching-marks/clock";
import Score from "@/components/matching-marks/score";
import SymbolGrid from "@/components/matching-marks/symbol/symbol-grid";

const MatchingMarks = () => {

    const gridSize: number = 3

    return (
        <main className="flex flex-col justify-evenly items-center h-screen">
            <Clock/>
            <SymbolGrid
                size={gridSize}
            />
            <Score/>
        </main>
    )
}

export default MatchingMarks;