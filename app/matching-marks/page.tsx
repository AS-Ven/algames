import SymbolGrid from "@/components/matching-marks/symbol-grid";

const MatchingMarks = () => {

    const gridSize: number = 3

    return (
        <main className="flex justify-center items-center h-screen">
            <SymbolGrid
                size={gridSize}
            ></SymbolGrid>
        </main>
    )
}

export default MatchingMarks;