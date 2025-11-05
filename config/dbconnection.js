import mongoose from "mongoose";

const mongodb = () => {
  mongoose.connect("mongodb://localhost:27017/usersdata").then(() => {
    console.log("Database Connected");
  });
};

export default mongodb;
