'use client'

import { useState } from "react";
import Symbol from "./symbol";
import { getSuit, hasGuessed, removeGuesses, setSuit } from "@/app/matching-marks/actions";

const SymbolGrid = () => {

    let suitList = getSuit()
    console.log(getSuit());

    const [seed, setSeed] = useState(0)

    return (
        <div
            className="flex flex-wrap flex-col gap-4 justify-center items-center h-screen"
            onClick={() => hasGuessed() ? 
                (
                    removeGuesses(),
                    setSuit(suitList.length * suitList.length),
                    setSeed(Math.random())
                ) : {}}
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