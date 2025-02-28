'use client'

import { useEffect, useState } from "react";
import Symbol from "./symbol";
import { useScore } from "@/utils/hooks/useScore";
import { useClock } from "@/utils/hooks/useClock";

interface SymbolGridProps {
    size: number
}

const createSuit = () => {
    const suit: number[] = []

    for (let i = 0; i < 36; i++) {
        suit.push(Math.floor(Math.random() * 2))
    }

    return suit
}

const createSuitList = (length: number) => {
    const suitList: number[][] = []

    for (let i = 0; i < length; i++) {
        suitList.push(createSuit())
    }

    return suitList
}

const createSuitListWithPeer = (length: number) => {
    const suitList: number[][] = createSuitList(length - 2)
    const peerSuit: number[] = createSuit()

    for (let i = 0; i < 2; i++) {
        suitList.splice(Math.floor(Math.random() * (suitList.length + 1)), 0, peerSuit)
    }

    return suitList
}

const SymbolGrid = ({ size }: SymbolGridProps) => {

    const [isMounted, setIsMounted] = useState(false);
    const [suit, setSuit] = useState(createSuitListWithPeer(size * size))
    const [seed, setSeed] = useState(0)

    const addScore = useScore((state) => state.addScore)
    const resetScore = useScore((state) => state.resetScore)
    const clock = useClock((state) => state.clock)
    const setClock = useClock((state) => state.setClock)

    useEffect(() => {
        setIsMounted(true)
    }, [isMounted])

    const start = () => {
        setClock(90)
        resetScore()
    }

    if (clock == 0) {
        return (
            <div>
                <button
                    onClick={start}
                    className="text-5xl border-4 px-4 py-2 rounded-xl bg-red-700"
                >
                        Start
                </button>
            </div>
        )
    }

    if (!isMounted) return null; 

    const handleOnClick = () => {
        if (!sessionStorage.getItem("matching-marks_1"))
            return

        if (sessionStorage.getItem("matching-marks_0") == sessionStorage.getItem("matching-marks_1"))
            addScore(1)

        sessionStorage.removeItem("matching-marks_0")
        sessionStorage.removeItem("matching-marks_1")
        setSuit(createSuitListWithPeer(size * size))
        setSeed(Math.random())
    }

    return (
        <div
            className="flex flex-wrap flex-col gap-4 justify-center items-center"
            onClick={handleOnClick}
            key={seed}
        >
            {
                Array.from({ length: size }, (_, i) => (
                    <div key={i} className="flex gap-4">
                        {
                            Array.from({ length: size }, (_, j) => (
                                <Symbol
                                    key={`${i}.${j}`}
                                    suit={suit[3 * i + j]}
                                />
                            ))
                        }
                    </div>  
                ))
            }
        </div>
    );
}

export default SymbolGrid;