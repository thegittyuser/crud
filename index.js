import userRouter from "./routes/usersdata.routes.js"
import mongodb from "./config/dbconnection.js";
import express from "express";
const app = express();
const port = 3000;

// database connection callback
mongodb()
app.set("view engine", "ejs");
// middleware
app.use(express.urlencoded({ extended: false }));


// listening
app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
