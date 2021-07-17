import dotenv from "dotenv";
import User from "./../models/userModel.js";
dotenv.config();

export const getUsers = async (req, res) => {
  // res.status(200).json("Hello from api");
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
//Adding user
export const addUser = async (req, res) => {
  // console.log("hello");
  // res.send("Hello from addUser 1234564")
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};
// Get a user by id
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Save data of edited user in the database
export const editUser = async (req, res) => {
  const id = req.params.id;
  let user = await User.findById(id);
  user = req.body;

  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// deleting data of user from the database
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(201).json("User deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
