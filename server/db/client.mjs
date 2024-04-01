import pg from "pg";
export const db = new pg.Client('psql://postgres:postgres@localhost:5432/mach-typer');