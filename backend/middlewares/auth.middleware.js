import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError("Not authorized, no token", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    throw new ApiError("Invalid token", 401);
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new ApiError("Admin access required", 403);
  }
  next();
};