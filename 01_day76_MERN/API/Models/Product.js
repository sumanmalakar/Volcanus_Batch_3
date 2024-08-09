import mongoose from "mongoose";

// Product
// title,description,price,category,qty,imgsrc

const productSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: String, require: true },
  img: { type: String, require: true },
  qty: { type: Number, require: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Products = mongoose.model("Products", productSchema);
