import mongoose from "mongoose";


export  const db = async () =>{
    try {
    await  mongoose.connect("mongodb+srv://amanda160986:dxw8JC0zOxMdIaqq@login.awbewqh.mongodb.net/");
        console.log("Conectado");
    } catch (error) {
        console.log(error);
        
    }
}