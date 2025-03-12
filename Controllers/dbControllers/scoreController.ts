import { addScore, readRanking } from "./matching-marksController"
import { getUser, updateUserScore } from "./usersController"

export const pushScore = async (score: number) => {
    const user = await getUser()
    const ranking = await readRanking()
    
    if (!user)
        return
    
    const bestScore = user.matching_marks[0]
    if (score > bestScore)
        await updateUserScore('matching_marks [1]', score)

    if (!ranking || !ranking[9] || score > ranking[9].score)
        await addScore(score)
}