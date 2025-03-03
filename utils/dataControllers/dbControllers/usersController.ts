'use server'

import { neon } from '@neondatabase/serverless';
import { comparePassword, hashPassword } from '../bcrypt';
import { clearCookie, setCookie } from '../cookie';
import { TcompleteUser } from '../../type';

const database = process.env.DATABASE_URL

//#region CheckName

const checkName = async (name: string) => {
    if (!database)
        return console.error('Database not found');
    const sql = neon(database);
    const findName = await sql(`SELECT name FROM users WHERE name = '${name}'`)
    if (findName)
        return false
    return true
}

//#endregion


//#region Create

export const createUser = async (formData: FormData) => {
    if (!database)
        return console.error('Database not found');

    const plainPassword = formData.get('password')
    const name = formData.get('name')
    if (!plainPassword || !name)
        return console.error('Form incomplete');
    
    const password = await hashPassword(plainPassword.toString())
    
    const sql = neon(database);
    
    if (await checkName(name.toString()))
        return

    await sql(`INSERT INTO users(name, password) VALUES ('${name}', '${password}')`)
    await logIn(formData)
}

//#endregion


//#region Read

export const readUser = async (id: number): Promise<TcompleteUser | undefined> => {
    if (!database)
        return console.error('Database not found') as undefined;

    const sql = neon(database);
    const user = await sql(`SELECT * FROM users WHERE id = '${id}'`)
    return user[0] as TcompleteUser
}

//#endregion

//#endregion


//#region Update

export const updateUser = async (id: number, name: string) => {
    if (!database)
        return console.error('Database not found');
    if (await checkName(name))
        return

    const sql = neon(database);
    await sql(`UPDATE users SET name = '${name}' WHERE id = '${id}'`)
}

//#endregion


//#region Delete

export const deleteUser = async (id: number) => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`DELETE FROM users WHERE id = '${id}'`)
}

//#endregion


//#region Log In

export const logIn = async (formData: FormData) => {
    if (!database)
        return console.error('Database not found');

    const password = formData.get('password')
    const name = formData.get('name')
    if (!password || !name)
        return console.error('Form incomplete');
    
    const sql = neon(database);
    
    if (await checkName(name.toString()))
        return
    
    const dbPassword = await sql(`SELECT password FROM users WHERE name = '${name}'`)

    if (!await comparePassword(password.toString(), dbPassword[0].password.toString()))
        return

    
    const user = await sql(`SELECT * FROM users WHERE name = '${name}'`)
    await setCookie('user', user[0].id)
}

//#endregion


//#region Log Out

export const logOut = async () => {
    await clearCookie('user')
}

//#endregion