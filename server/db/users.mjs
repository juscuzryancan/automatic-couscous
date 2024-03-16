import { db } from "./client.mjs";
import bcrypt from "bcrypt";

const SALT = 15;

export async function createUser({ username, password }) {
  const hashedPassword = bcrypt.hash(password, SALT);
  try {
    const {
      rows: [user],
    } = await db.query(
      `
      INSERT INTO users(username, password)
      VALUES ($1, $2)
      ON CONFLICT do nothing
      RETURNING *;
    `,
      [username, hashedPassword],
    );
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await db.query(
      `
      SELECT * from users
      WHERE username = $1;
    `,
      [username],
    );
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//
