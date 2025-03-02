'use server'

import { neon } from '@neondatabase/serverless';
import { hashPassword } from './bcrypt';

const database = process.env.DATABASE_URL

export const createUser = async (formData: FormData) => {
    if (!database)
        return console.error('Database not found');

    const plainPassword = formData.get('password')
    const name = formData.get('name')

    if (!plainPassword || !name)
        return console.error('Form incomplete');
    
    const sql = neon(database);
    const password = await hashPassword(plainPassword.toString())

    await sql(`INSERT INTO users(name, password) VALUES ('${name}', '${password}')`)
}