import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
  ImgLink: String,
  ImgName: String,
  ImgPrice: Number,
  ImgCategory: {
    type: String,
    enum: ['casual', 'aesthetic', 'moody'],
  
  },});

export const Art = mongoose.models.Art || mongoose.model("Art", ArtSchema);
export { ArtSchema };