import Clock from "@/components/matching-marks/clock";
import SymbolGrid from "@/components/matching-marks/symbol/symbol-grid";

const MatchingMarks = () => {

    const gridSize: number = 3

    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <Clock
                initTime={10}
            />
            <SymbolGrid
                size={gridSize}
            />
        </main>
    )
}

export default MatchingMarks;