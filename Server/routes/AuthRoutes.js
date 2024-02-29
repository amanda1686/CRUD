import express from "express";
import { authenticate } from "../controllers/AuthController.js"; // Importar el middleware de autenticación
import { Register, Login } from "../controllers/AuthController.js";

const router = express.Router();
router.post("/register", Register);
router.post("/login", authenticate, Login); // Añadir el middleware de autenticación aquí

export default router;

