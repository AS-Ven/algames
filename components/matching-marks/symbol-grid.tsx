'use client'

import { useState } from "react";
import Symbol from "./symbol";
import { hasGuessed, removeGuesses } from "@/app/matching-marks/actions";

interface SymbolGridProps {
    suitList: number[][]
}

const SymbolGrid = ({ suitList }: SymbolGridProps) => {

    const [seed, setSeed] = useState(0)

    return (
        <div
            className="flex flex-wrap flex-col gap-4 justify-center items-center h-screen"
            onClick={() => hasGuessed() ? (setSeed(Math.random()), removeGuesses()) : {}}
            key={seed}
        >
            {
                Array.from({ length: Math.sqrt(suitList.length)}, (_, i) => (
                    <div key={i} className="flex gap-4">
                        {
                            Array.from({ length: Math.sqrt(suitList.length)}, (_, j) => (
                                <Symbol
                                    key={`${i}.${j}`}
                                    suit={suitList[3 * i + j]}
                                ></Symbol>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default SymbolGrid;