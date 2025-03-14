import { readRanking } from "@/controller/dbControllers/matching-marksController";
import RankingInfo from "./ranking-info";
import { readUser } from "@/controller/dbControllers/usersController";

const Ranking = async () => {

    const rank = await readRanking()

    if (!rank) {
        return <div>Ranking is not available.</div>
    }

    for (let i = 0; i < rank.length; i++) {
        const user = await readUser(rank[i].user_id)
        const name = user?.name ?? 'Unknow'
        rank[i].name = name
    }

    return (
        <RankingInfo ranking={rank}/>
    )
}

export default Ranking