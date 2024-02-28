import express from "express";
import { createTodo, deleteTodo, getATodo, getTodos, updateTodo } from "../controllers/Todo.Controller.js";


const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getATodo );
router.post("/", createTodo);
router.put("/update/:id", updateTodo );
router.delete("/:id", deleteTodo );

export default router;
