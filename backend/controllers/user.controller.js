import mongoose from "mongoose"
import User from "../models/user.schema.js"

const registerUser = async(req,res) =>{
    try {
        const { name, userName, phone, address, country } = req.body;
        console.log(name);
        const newUser = new User({
            name,
            userName,
            phone,
            address,
            country
        });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: err.message });
    }
    
    
}



const getAllUser = async(req, res) => {
    try {
        const usersData = await User.find();
        res.json(usersData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const getUserById = async(req, res) => {
    try {
        const userId = req.params.id;
        const userData = await User.findById(userId);
        console.log(userData);
        res.json(userData);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching user" })
    }
}

const deleteUserById = async(req, res) => {
    try {
        const userId = req.params.id
        await User.findByIdAndDelete(userId)
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Error deleting user" })
    }
}

const editUserById = async(req, res) => {
    try {
        const userId = req.params.id
        const { name, userName, phone, address, country } = req.body
        const userData = await User.findByIdAndUpdate(userId, {
            name,
            userName,
            phone,
            address,
            country
        });
        res.json(userData);
    } catch (error) {
        return res.status(500).json({ message: "Error updating user" })
    }
    
}   

export { registerUser, getAllUser, getUserById, deleteUserById, editUserById };
// Compare this snippet from backend/routes/user.routes.js: