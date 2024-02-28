import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
        required: true
    }
});

export const User = mongoose.model("users", authSchema);
