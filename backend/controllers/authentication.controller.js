import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    throw new ApiError("Email and password are required", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError("User already exists", 400);
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed,
    role: role || "user" // ✅ admin/user support
  });

  res.json({
    message: "User registered successfully",
    user: {
      id: user._id,
      email: user.email,
      role: user.role
    }
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError("Email and password are required", 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError("User not found", 404);
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new ApiError("Invalid password", 400);
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  if(!token) {  
    throw new ApiError("Token generation failed", 500);
  }

  res.json({
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role
    }
  });
});