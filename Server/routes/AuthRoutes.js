import express from "express";
import  Register  from "../controllers/AuthController.js";

const router = express.Router();
router.get("/register", Register)

export default router;
