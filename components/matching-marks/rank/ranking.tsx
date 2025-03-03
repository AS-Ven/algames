'use client'

import { useRank } from "@/utils/hooks/useRank";
import { Tmatching_marks } from "@/utils/type";

interface RankingProps {
    ranking: Tmatching_marks[]
}

const Ranking = ({ ranking }: RankingProps) => {
    
    const rank = useRank((state) => state.rank)
    
    return (
        <div className={`${rank ? '' : 'hidden'} absolute top-20 border-4 p-4 px-8 rounded-xl overflow-hidden backdrop-blur-lg gap-4 flex flex-col justify-center items-center`}>
            {
                ranking.map((row, i) => (
                    <div key={i}>
                        <p>{row.name}</p>
                        <p>{row.score}</p>
                    </div>
                ))
            }
            <p>test</p>
        </div>
    );
}
 
export default Ranking;