'use client'

import { toTime } from "@/utils/time";
import { useEffect, useState } from "react";

interface ClockProps {
    initTime: number
}

const Clock = ({ initTime }: ClockProps) => {

    const [time, setTime] = useState(initTime)

    useEffect(() => {
        if (time <= 0)
            return
        const intervalId = setInterval(() => {
            setTime(time => time - 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, [time])

    return (
        <p className="text-6xl">
            {toTime(time)}
        </p>
    )
}
 
export default Clock;