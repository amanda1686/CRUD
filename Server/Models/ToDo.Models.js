import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        task: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            enum: ["work", "school", "freetime"]
        },
        
    }, { timestamps: true });


export const Todo = mongoose.model("tasks", todoSchema)