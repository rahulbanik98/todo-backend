import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controller/userControllers.js";

const route = express.Router();

route.post("/create", createUser);
route.get("/get", getAllUsers);
route.get("/person/:id", getUserById);
route.put("/update/:id", updateUserById);
route.delete("/delete/:id", deleteUserById);

export default route;
