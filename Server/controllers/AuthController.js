
import { User } from "../Models/Auth.Models.js"
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken"

export const Register = async (req, res) => {
    const {username, password, email} = req.body
    try {
        const existingEmail = await User.findOne({email:email})
        if (existingEmail) {
            res.status(400).json({message:"This email already exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const credentials = new User({
            username: username,
            password: hashPassword,
            email: email
        })
        await credentials.save()
        res.status(200).json({message:"Register successfull", credentials})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error });

        
    }
}
export default Register

export const Login = async (req, res) =>  {
    const {email, password} = req.body
    try {
       const user = await User.findOne({email:email})
       if (!user) {
        return res.status(400).json({message: "Invalid email"})
       } else{
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message:"Invalid password"})
        }
       }
       const token = jwt.sign({
        email: email,
        role: role,
        password: pa
       })
    } catch (error) {
        
    }
    
}