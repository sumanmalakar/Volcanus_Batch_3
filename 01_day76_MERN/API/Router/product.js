import express from "express";
import {
  addProduct,
  deleteProductById,
  getProduct,
  getProductById,
  getProductByUserId,
  updateProductById,
} from "../Controllers/product.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// @method - post
// @dsc - add Product
// @path - /api/product/add
router.post("/add", isAuthenticated, addProduct);

// @method - get
// @dsc - get Product
// @path - /api/product/get
router.get("/get", getProduct);

// @method - get
// @dsc - get product by User Id
// @path - /api/product/user
router.get("/user", isAuthenticated, getProductByUserId);

// @method - get
// @dsc - get Product By Id
// @path - /api/product/:id
router.get("/:id", getProductById);

// @method - put
// @dsc - update product by Id
// @path - /api/product/:id
router.put("/:id", isAuthenticated, updateProductById);

// @method - delete
// @dsc - delete product by Id
// @path - /api/product/:id
router.delete("/:id", isAuthenticated, deleteProductById);

export default router;
