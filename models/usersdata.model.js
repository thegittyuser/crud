import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const usersData = mongoose.model("usersData", userSchema, "users");

export default usersData;
