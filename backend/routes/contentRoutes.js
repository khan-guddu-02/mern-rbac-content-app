import express from "express";
import {
  createContent,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent
} from "../controllers/content.controller.js";

import { protect, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getAllContent);
router.get("/:id", getSingleContent);

// Admin only
router.post("/", protect, isAdmin, createContent);
router.put("/:id", protect, isAdmin, updateContent);
router.delete("/:id", protect, isAdmin, deleteContent);

export default router;