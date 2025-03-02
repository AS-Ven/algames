'use server'

import { neon } from '@neondatabase/serverless';

const database = process.env.DATABASE_URL

export const createTableUsers = async () => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(25) UNIQUE,
            password VARCHAR(255),
            role VARCHAR(255) DEFAULT 'user',
            matching_marks integer[]
        )    
    `)
}

export const createTableMatchingMarks = async () => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`
        CREATE TABLE IF NOT EXISTS matching_marks(
            id SERIAL PRIMARY KEY,
            name VARCHAR(25) UNIQUE,
            score integer
        )    
    `)
}