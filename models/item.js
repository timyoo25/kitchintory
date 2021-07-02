// THis is the blueprint for each Document in MongoDB
// mongoose calls Objects -> Documents
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
      type: String,
      enum: ["freezer", "refrigerator", "dry storage"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("items", Item);
