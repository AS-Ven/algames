'use client'

import { toTime } from "@/utils/time";
import { useEffect, useState } from "react";

interface ClockProps {
    initTime: number
}

const Clock = ({ initTime }: ClockProps) => {

    const [time, setTime] = useState(initTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(time => time - 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, [time])

    return (
        <div>{toTime(time)}</div>
    );
}
 
export default Clock;