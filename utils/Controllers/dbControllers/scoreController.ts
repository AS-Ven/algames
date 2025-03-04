import { addScore, readRanking } from "./matching-marksController"
import { getUser, updateUserScore } from "./usersController"

export const AAAAAAAAA = async (score: number) => {
    const user = await getUser()
    const ranking = await readRanking()
    
    if (!user || !ranking)
        return
    
    const bestScore = user.matching_marks[0]
    if (score > bestScore)
        await updateUserScore('matching_marks [1]', score)

    if (score > ranking[9].score)
        await addScore(score)
}