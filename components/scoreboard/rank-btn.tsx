'use client'

import { Crown } from "lucide-react";
import { useRank } from "@/utils/hooks/useRank";

const RankButton = () => {

    const setRank = useRank((state) => state.setRank)

    const handleShowForm = () => {
        setRank()
    }

    return (
        <button onClick={handleShowForm}><Crown size={40} strokeWidth={1.75}/></button>
    );
}
 
export default RankButton;