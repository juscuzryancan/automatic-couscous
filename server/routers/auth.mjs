import { Router } from "express";
import jwt from "jsonwebtoken";
import { validate } from "../utils.mjs";
import { loginSchema, registerSchema } from "../schema.mjs";
import bcrypt from "bcrypt";
import { createUser, getUserByUsername } from "../db/users.mjs";

const { JWT_SECRET } = process.env;
const router = Router();

router.post("/login", validate(loginSchema), async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }

    const match = bcrypt.compare(user.password, password);
    if (!match) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
    res.send(token);
  } catch (error) {
    next(error);
  }
});

router.post("/register", validate(registerSchema), async (req, res, next) => {
  try {
    await createUser(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

export default router;
