'use client'

import { useClock } from "@/utils/hooks/useClock"
import { useScore } from "@/utils/hooks/useScore"

const Start = () => {

    const resetScore = useScore((state) => state.resetScore)
    const setClock = useClock((state) => state.setClock)

    const handleOnClick = () => {
        setClock(90)
        resetScore()
    }

    return (
        <button
            onClick={handleOnClick}
            className="text-5xl border-4 px-4 py-2 rounded-xl bg-red-700"
        >
            Start
        </button>
    );
}

export default Start;
