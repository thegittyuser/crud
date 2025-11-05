import userRouter from "./routes/usersdata.routes.js";
import mongodb from "./config/dbconnection.js";
import listening from "./config/exconnection.js";

// database connection callback
mongodb();
// express connection callback
listening();

// app.set("view engine", "ejs");
// middleware
// app.use(express.urlencoded({ extended: false }));
