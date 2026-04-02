import { Content } from "../models/content.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";

export const createContent = asyncHandler(async (req, res) => {
  const content = await Content.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.json(content);
});

export const getAllContent = asyncHandler(async (req, res) => {
  const data = await Content.find().populate("createdBy", "email");
  res.json(data);
});

export const getSingleContent = asyncHandler(async (req, res) => {
  const data = await Content.findById(req.params.id);

  if (!data) {
    throw new ApiError("Content not found", 404);
  }

  res.json(data);
});

export const updateContent = asyncHandler(async (req, res) => {
  const data = await Content.findById(req.params.id);

  if (!data) {
    throw new ApiError("Content not found", 404);
  }

  const updated = await Content.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

export const deleteContent = asyncHandler(async (req, res) => {
  const data = await Content.findById(req.params.id);

  if (!data) {
    throw new ApiError("Content not found", 404);
  }

  await data.deleteOne();

  res.json({ message: "Content deleted successfully" });
});