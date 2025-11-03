import usersModel from "./models/usersdata.model.js";

import express from "express";
const app = express();
const port = 3000;

// database connection
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/usersdata").then(() => {
  console.log("Database Connected");
});

app.set("view engine", "ejs");
// middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/show_users", async (req, res) => {
  const userResult = await usersModel.find();
  res.render("show_users", { title: "Users Record", userResult });
});

app.get("/update_data/:id", async (req, res) => {
  const userResult = await usersModel.findById(req.params.id);
  res.render("update_data", { title: "Update Form", userResult });
});

app.post("/update/:id", async (req, res) => {
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

app.get("/delete_data/:id", async (req, res) => {
  await usersModel.findByIdAndDelete(req.params.id);
  res.redirect("/show_users");
});

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
