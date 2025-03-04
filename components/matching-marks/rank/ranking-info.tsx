'use client'

import { useRank } from "@/utils/hooks/useRank";
import { Tmatching_marks } from "@/utils/type";

interface RankingProps {
    ranking: Tmatching_marks[]
}

const RankingInfo = ({ ranking }: RankingProps) => {
    
    const rank = useRank((state) => state.rank)
    
    return (
        <div className={`${rank ? '' : 'hidden'} absolute top-20 border-4 p-4 px-8 rounded-xl overflow-hidden backdrop-blur-lg gap-4 flex flex-col justify-center items-center`}>
            {
                ranking.map((row, i) => (
                    <div key={i} className="w-full flex justify-between items-center gap-20 text-xl">
                        <p>{row.score}</p>
                        <p>{row.name}</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default RankingInfo;