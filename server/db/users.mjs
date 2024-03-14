import { db } from "./index.mjs";
import bcrypt from "bcrypt";

const SALT = 15;

export async function createUser({ username, password }) {
  const client = db.connect();
  const hashedPassword = bcrypt.hash(password, SALT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password)
      VALUES ($1, $2)
      RETURNING *;
    `,
      [username, hashedPassword],
    );
    return user;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}
