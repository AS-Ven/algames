'use server'

import { neon } from '@neondatabase/serverless';
import { hashPassword } from '../bcrypt';
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

    console.log(await checkName(name.toString()));
    
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

export const logIn = async () => {
    console.log('log in');
}

//#endregion


//#region Log Out

export const logOut = async () => {
    console.log('log out');
}

//#endregion