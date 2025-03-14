'use client'

import { pushScore } from "@/controllers/dbControllers/scoreController";
import { useClock } from "@/utils/hooks/useClock";
import { useScore } from "@/utils/hooks/useScore";
import { toTime } from "@/utils/time";
import { useEffect } from "react";

const Clock = () => {

    const clock = useClock((state) => state.clock)
    const score = useScore((state) => state.score)
    const setClock = useClock((state) => state.setClock)
    
    useEffect(() => {
        if (clock <= 0) {
            pushScore(score)
            return
        }
        const intervalId = setInterval(() => {
            setClock(clock - 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, [clock, setClock, score])

    return (
        <p className="text-6xl">
            {toTime(clock)}
        </p>
    )
}
 
export default Clock;