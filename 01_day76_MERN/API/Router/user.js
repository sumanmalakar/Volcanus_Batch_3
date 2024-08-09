import express from "express";
import { register, login } from "../Controllers/user.js";

const router = express.Router();

router.post("/register", register); // /api/user/register

router.post("/login", login); // /api/user/login

export default router;
