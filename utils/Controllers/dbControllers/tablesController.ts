'use server'

import { neon } from '@neondatabase/serverless';

const database = process.env.DATABASE_URL

const createTableUsers = async () => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(25) UNIQUE,
            password VARCHAR(255),
            title VARCHAR(255) DEFAULT '',
            icon INTEGER DEFAULT 0,
            matching_marks INTEGER[2] DEFAULT '{0, 0}'
        )    
    `)
}

const createTableMatchingMarks = async () => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    await sql(`
        CREATE TABLE IF NOT EXISTS matching_marks(
            id SERIAL PRIMARY KEY,
            user_id INTEGER,
            score INTEGER
        );
    `)
    await feedMatchingMarks()
}

const feedMatchingMarks = async () => {
    if (!database)
        return console.error('Database not found');

    const sql = neon(database);
    for (let i = 0; i < 10; i++) {
        await sql(`INSERT INTO matching_marks(user_id, score) VALUES (0, 0)`)
    }
}

export const createTables = async () => {
    await createTableUsers()
    await createTableMatchingMarks()
}