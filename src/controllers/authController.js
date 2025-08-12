const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
    try{
     const {username, password} = req.body;
     const hashedPassword = await bcrypt.hash(password, 10);

     const newUser = new User({ username,password: hashedPassword, role});
     await newUser.save();
     res
     .status(201)
     .json({message: 'User required with username ${username}'})
    } catch (err){
        res
         .status(500)
         .json({message: 'Something went wrong!'})
    }
};

const login = async (req, res) => {
    try{
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if(!user){
        return res.ststus(404).json({message: 'User with username ${username} not found '})

    }
    const isMatch = await bcrypt.(password, user.password)
    if(!isMatch){
        return res.status(400).json({message: 'Invalid password'})

    }
    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET);




} catch(err) {
    res.status(500).json({message: 'Something went wrong!'})
}

};

module.exports = {
    register,
    login,
};