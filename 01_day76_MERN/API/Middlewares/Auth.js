import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");
  if (!token) {
    return res.json({ message: "Login First" });
  }

  const decoded = jwt.verify(token, "!@#$%^&**()");

  const userId = decoded.userId;

  const user = await User.findById(userId);

  req.user = user;

  next();

  //   console.log("req user = ", req.user)
};
