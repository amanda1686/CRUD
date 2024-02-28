import express from 'express'
import { db } from "./Databse/db.js";
import todoRoutes from "./routes/routes.js"


// const express = require('expres');

const app = express();
app.use(express.json());

app.listen(3000);

db()

app.use("/todos", todoRoutes )