import express from "express";
import {
  createProduct,
  createUser,
  getProducts,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.get("/users", getUsers);
userRoutes.get("/users/:id", getUser);
userRoutes.post("/users", createUser);
userRoutes.post("/users/:id", updateUser);

userRoutes.get("/products", getProducts);
userRoutes.post("/products", createProduct);

export default userRoutes;
