import { Router } from "express";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;
const router = Router();

router.post("/login", (req, res, next) => {
  try {
    const user = "to be filled in";
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
    res.send(token);
  } catch (error) {
    next(error);
  }
});

router.post("/register", (req, res, next) => {});

export default router;
