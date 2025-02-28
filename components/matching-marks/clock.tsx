'use client'

import { useClock } from "@/utils/hooks/useClock";
import { toTime } from "@/utils/time";
import { useEffect } from "react";

const Clock = () => {

    const clock = useClock((state) => state.clock)
    const setClock = useClock((state) => state.setClock)
    
    useEffect(() => {
        if (clock <= 0)
            return
        const intervalId = setInterval(() => {
            setClock(clock - 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, [clock, setClock])

    return (
        <p className="text-6xl">
            {toTime(clock)}
        </p>
    )
}
 
export default Clock;