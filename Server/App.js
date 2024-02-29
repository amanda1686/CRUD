import express from 'express'
import  db  from "./Databse/db.js";
import todoRoutes from "./routes/routes.js"
import AuthRoutes from "./routes/AuthRoutes.js"


// const express = require('expres');

const app = express();
app.use(express.json());
app.use("/auth", AuthRoutes)

db()

app.use("/todos", todoRoutes )
app.listen(3000);