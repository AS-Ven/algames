'use server'

import { neon } from '@neondatabase/serverless';
import { comparePassword, hashPassword } from '../bcrypt';
import { createTableUsers } from './create-table';

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
    await createTableUsers()
    
    if (await checkName(name.toString()))
        return

    await sql(`INSERT INTO users(name, password) VALUES ('${name}', '${password}')`)
}

//#endregion


//#region Read

export const readUser = async (id: number) => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    return await sql(`SELECT * FROM users WHERE id = '${id}'`)
}

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
    await createTableUsers()
    
    if (await checkName(name.toString()))
        return
    
    const dbPassword = await sql(`SELECT password FROM users WHERE name = '${name}'`)
    
    if (!await comparePassword(password.toString(), dbPassword[0].password.toString()))
        return
    
    const user = await sql(`SELECT * FROM users WHERE name = '${name}'`)
    console.log(user[0]);
}

//#endregion


//#region Log Out

export const logOut = async () => {
    console.log('log out');
}

//#endregion