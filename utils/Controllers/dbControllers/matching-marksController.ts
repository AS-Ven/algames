'use server'

import { Tmatching_marks } from "@/utils/type";
import { neon } from "@neondatabase/serverless";
import { getUser } from "./usersController";

const database = process.env.DATABASE_URL

//#region Create

export const addScore = async (score: number) => {
    if (!database)
        return console.error('Database not found');
    let name = ""

    const user = await getUser()
    if (!user)
        name = "Unknow"
    else
        name = user.name

    const sql = neon(database);
    
    await sql(`INSERT INTO matching_marks(name, score) VALUES ('${name}', '${score}')`)
}

//#endregion


//#region Read

export const readRanking = async (): Promise<Tmatching_marks[] | undefined> => {
    if (!database)
        return console.error('Database not found') as undefined;

    const sql = neon(database);
    const ranking = await sql(`SELECT * FROM matching_marks ORDER BY score [ASC | DESC]`)
    return ranking[0] as Tmatching_marks[]
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