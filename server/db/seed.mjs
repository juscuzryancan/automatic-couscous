import { db } from "./client.mjs";

export async function seed() {
  const client = await db.connect();
  try {
    await dropTables(client);
    await createTables(client);
    console.log("Successfully Seeded");
  } catch (error) {
    console.error("Failed to seed");
    console.error(error.message);
  } finally {
    client.release();
    db.end();
  }
}

async function dropTables(client) {
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error("Failed to drop tables");
  }
}

async function createTables(client) {
  try {
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);
  } catch (error) {
    console.error("Failed to create tables");
    throw error;
  }
}
