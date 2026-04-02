import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isAdEnabled: { type: Boolean, default: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export  const Content = mongoose.model("Content", contentSchema);