import express from "express";
import {
  addUser,
  getUsers,
  getUserById,
  editUser,
  deleteUser,
} from "./../controller/controller.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
