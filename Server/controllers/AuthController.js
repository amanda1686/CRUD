

import { User } from "../Models/Auth.Models.js"
export const Register = async (req, res) => {
    const {username, password, email} = req.body
    try {
        const existingEmail = await User.findOne({email:email})
        if (existingEmail) {
            res.status(400).json({message:"This email already exist"})
        }
        // const salt = await bcrypt.genSalt(10);
        // const hasPassword = await bcrypt.hash(password, salt);
        const credentials = new User({
            username: username,
            password: password,
            email: email
        })
        await credentials.save()
        res.status(200).json({message:"Register successfull", credentials})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error });

        
    }
}
export default Register