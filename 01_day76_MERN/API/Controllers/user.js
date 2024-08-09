import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// user register
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    let newUser = await User.findOne({ email });

    if (newUser)
      return res.json({ message: "User Already exist...!", success: false });

    let hashPassword = await bcrypt.hash(password, 8);

    newUser = await User.create({ name, email, phone, password: hashPassword });

    res.json({
      message: "user register successfully ",
      newUser,
      success: true,
    });
  } catch (error) {
    res.json({ message: "Internal Server Error ", success: false });
  }
};

// user login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let loginUser = await User.findOne({ email });

    // console.log("login wala user ", loginUser);

    if (!loginUser)
      return res.json({ message: "User not exist...!", success: false });

    let validPassword = await bcrypt.compare(password, loginUser.password);

    if (!validPassword)
      return res.json({ message: "Invalid Password...", success: false });

    const token = jwt.sign({ userId:loginUser._id},'!@#$%^&**()')

    res.json({ message: `Welcome ${loginUser.name}`,token, success: true });

  } catch (error) {
    res.json({ message: "Internal Server Error ", success: false });
  }
};

// // user profile
// export const profile = (req, res) => {};
