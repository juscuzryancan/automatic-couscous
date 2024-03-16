import pg from "pg";
const { DB_URL = "psql://localhost:5432/mach-typer" } = process.env;
export const db = new pg.Pool({ connectionString: DB_URL });
