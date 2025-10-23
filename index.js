import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
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
