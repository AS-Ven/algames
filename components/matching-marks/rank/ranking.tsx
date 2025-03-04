import { readRanking } from "@/utils/Controllers/dbControllers/matching-marksController";
import { readUser } from "@/utils/Controllers/dbControllers/usersController";
import RankingInfo from "./ranking-info";

const Ranking = async () => {

    const rank = await readRanking()
    if (!rank) {
        return (
            <div>Ranking is not available...</div>
        )
    }
    for (let i = 0; i < rank.length; i++) {
        const user = await readUser(rank[i].user_id)
        let name: string
        if (!user)
            name = 'Unknow'
        else
        name = user.name
    rank[i].name = name
    }

    return (
        <RankingInfo ranking={rank}/>
    )
}

export default Ranking