'use client'

import { readRanking } from "@/utils/dataControllers/dbControllers/matching-marksController";
import { useScore } from "@/utils/hooks/useScore";

const Score = () => {

    const score = useScore((state) => state.score)
    const datas = readRanking()

    console.log(datas);
    

    return (
        <p className="text-4xl">{`Score : ${score}`}</p>
    );
}

export default Score;