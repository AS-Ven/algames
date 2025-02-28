'use client'

import { useState } from "react";
import SymbolPart from "./symbol-part";
import { createSuit } from "./symbol-grid";

interface SymbolProps {
    suit?: number[]
}

const Symbol = ({ suit }: SymbolProps) => {

    const [selected, setSelected] = useState(false)

    if (!suit)
        suit = createSuit()

    const suitTopLeft: number[] = suit.slice(0, 9)
    const suitTopRight: number[] = suit.slice(9, 18)
    const suitBottomLeft: number[] = suit.slice(18, 27)
    const suitBottomRight: number[] = suit.slice(27, 36)

    const handleOnClick = () => {
        if (!selected) {
            if (!sessionStorage.getItem("matching-marks_0")) {
                sessionStorage.setItem("matching-marks_0", suit.join(""))
            } else {
                sessionStorage.setItem("matching-marks_1", suit.join(""))
            }
        } else {
            sessionStorage.removeItem("matching-marks_0")
        }

        setSelected(!selected)
    }

    return (
        <button
            onClick={handleOnClick}
            className={`flex flex-wrap flex-col gap-2 border-white border-4 p-2 ${selected ? "bg-blue-700" : "bg-red-700"}`}
        >
            <div className="flex gap-2">
                <SymbolPart suit={suitTopLeft}></SymbolPart>
                <SymbolPart suit={suitTopRight}></SymbolPart>
            </div>
            <div className="flex gap-2">
                <SymbolPart suit={suitBottomLeft}></SymbolPart>
                <SymbolPart suit={suitBottomRight}></SymbolPart>
            </div>
        </button>
    );
}

export default Symbol;