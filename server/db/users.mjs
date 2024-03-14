import { db } from "./index.mjs";

export async function createUser({ username, password }) {
  const client = db.connect();
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password)
      VALUES ($1, $2)
      RETURNING *;
    `,
      [username, password],
    );
    return user;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}
