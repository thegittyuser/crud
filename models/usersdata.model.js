import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    phone:{
        type: String
    }
});

const usersData = mongoose.model("usersData", userSchema);

export default usersData;