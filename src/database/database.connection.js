import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const configDatabase = {
    connectionString: process.env.DATABASE_URL
}

/* try {
    await configDatabase.connect();
    console.log("Postgres CONECTADO!")
} catch (err) {
    console.log(err.message)
} */

if (process.env.MODE === "production") configDatabase.ssl = true;

export const db = new Pool(configDatabase)