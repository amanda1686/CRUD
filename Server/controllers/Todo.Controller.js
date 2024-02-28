import { Todo } from "../Models/ToDo.Models.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

export const createTodo = async (req, res) => {
    const { title, task, type } = req.body;
    try {
        const todo = new Todo({
            title: title,
            task: task,
            type: type
        });
        await todo.save();
        res.status(200).json({ message: "Todo bien", todo });
    } catch (error) {
        res.status(500).json({ message: "Error", error });
    }
};

export const updateTodo = async (req,res) =>{
    const id = req.params.id
    console.log(id);
    try {
        await Todo.updateOne({_id:id}, req.body);
        res.status(200).json({ message: "Todo bien", id });
    } catch (error) {
        res.status(500).json({ message: "Error", id });
    }
}

export const deleteTodo = async (req,res) =>{
    const id = req.params.id
    console.log(id);
    try {
        await Todo.deleteTodoOne({_id:id}, req.body);
        res.status(200).json({ message: "Todo bien", id });
    } catch (error) {
        res.status(500).json({ message: "Error", id });
    }
}

export const getATodo = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found", id });
        }
        res.status(200).json({ message: "Todo found", todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", id });
    }
}
