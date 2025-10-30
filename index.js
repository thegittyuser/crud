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

app.get("/register", (req, res) => {
  res.render("register_form", { title: "Registration Form" });
});

app.get("/login", (req, res) => {
  res.render("login_form", { title: "Login Form" });
});

app.get("/forget", (req, res) => {
  res.render("reset_form", { title: "Forget Form" });
});

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
