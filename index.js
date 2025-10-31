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

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/show_users", async (req, res) => {
  const userResult = await usersModel.find();
  // res.json(modelResult);
  res.render("show_users", { title: "Show Users", userResult });
});

app.get("/update_data/:id", (req, res) => {
  res.render("update_data", { title: "Update Form" });
});

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
