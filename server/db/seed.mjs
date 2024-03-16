import { db } from "./client.mjs";

seed();

async function seed() {
  try {
    await dropTables();
    await createTables();
    console.log("Successfully Seeded");
  } catch (error) {
    console.error("Failed to seed");
    console.error(error.message);
  } finally {
    db.end();
  }
}

async function dropTables() {
  try {
    await db.query(`
      DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error("Failed to drop tables");
  }
}

async function createTables() {
  try {
    await db.query(`
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
