import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});
