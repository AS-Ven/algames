'use client'

import { useScore } from "@/utils/hooks/useScore";

const Score = () => {

    const score = useScore((state) => state.score)

    return (
        <p className="text-4xl">{`Score : ${score}`}</p>
    );
}
 
export default Score;