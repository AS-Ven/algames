'use server'

import { Tmatching_marks } from "@/utils/type";
import { neon } from "@neondatabase/serverless";
import { getUser } from "./usersController";

const database = process.env.DATABASE_URL

//#region Add Score

export const addScore = async (score: number) => {
    if (!database)
        return console.error('Database not found');
    const ranking = await readRanking()
    if (!ranking)
        return console.error('No Rank');
    
    let user_id: number
    const user = await getUser()
    if (!user)
        user_id = 0
    else
        user_id = user.id

    const sql = neon(database);
    for (let i = 0; i < ranking.length; i++) {
        if (ranking[i].user_id == user_id) {
            await deleteScore(ranking[i].id)
        }
    }
    if (ranking[9])
        await deleteScore(ranking[9].id)
    await sql(`INSERT INTO matching_marks(user_id, score) VALUES ('${user_id}', '${score}')`)
}

//#endregion


//#region Read

export const readRanking = async (): Promise<Tmatching_marks[] | undefined> => {
    if (!database)
        return console.error('Database not found') as undefined;

    const sql = neon(database);
    const ranking = await sql(`SELECT * FROM matching_marks ORDER BY score DESC`)
    return ranking as Tmatching_marks[]
}

//#endregion


//#region Delete

export const deleteScore = async (id: number) => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`DELETE FROM matching_marks WHERE id = '${id}'`)
}

//#endregion