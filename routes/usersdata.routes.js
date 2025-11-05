import express from "express";
const router = express.Router();
import usersModel from "../models/usersdata.model.js";

// routes
const defaultHome = router.get("/", (req, res) => {
  res.send("Hello Express");
});

const showUsers = router.get("/show_users", async (req, res) => {
  const userResult = await usersModel.find();
  res.render("show_users", { title: "Users Record", userResult });
});

const updateData = router.get("/update_data/:id", async (req, res) => {
  const userResult = await usersModel.findById(req.params.id);
  res.render("update_data", { title: "Update Form", userResult });
});

const update = router.post("/update/:id", async (req, res) => {
  const { username, email, password, phone, address } = req.body;
  await usersModel.findByIdAndUpdate(req.params.id, {
    username,
    email,
    password,
    phone,
    address,
  });
  res.redirect("/show_users");
});

const deleteData = router.get("/delete_data/:id", async (req, res) => {
  await usersModel.findByIdAndDelete(req.params.id);
  res.redirect("/show_users");
});

export default router;