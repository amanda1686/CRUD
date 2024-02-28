import mongoose from "mongoose";


export  const db = async () =>{
    try {
    await  mongoose.connect("mongodb://localhost:27017/ToDoList");
        console.log("Conectado");
    } catch (error) {
        console.log(error);
        
    }
}