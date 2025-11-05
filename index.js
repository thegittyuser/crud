import userRouter from "./routes/usersdata.routes.js"
import dbConnect from "./config/dbconnection.js";
import express from "express";
const app = express();
const port = 3000;



// database connection callback
dbConnect();

app.set("view engine", "ejs");
// middleware
app.use(express.urlencoded({ extended: false }));


// listening
app.listen(port, () => {
  console.log(`Server is listeing on port ${port}`);
});
