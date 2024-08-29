const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class AuthController {
    static async register(req, res) {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: passwordHash,
        });
        try {
            await user.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" });
        }
    }
    static async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user)
            return res.status(400).send({ message: "Invalid Email or " });
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({ message: "Invalid Email or password" });
        }   
        const secret = process.env.SECRET;
        const token = jwt.sign(
        {
            id: user._id,
        },
            secret,
        {
            expiresIn: '2 days'
        }
        );
        return res.status(200).send({token: token})
    }

    static async delete(req, res){
        const {id} = req.params;

        try{
            const user = await User.findOneAndDelete(id);
            if(!user){
                return res.status(400).send({message: "User not found"})
            }
            return res.status(200).send({message: "User delete successfully"})
        } catch(error){
            return res.status(500).send({error: error})
        }
    }
    static async getAll (req, res){
        try {
            const user = await User.find();
            return res.status(200).send({ data: user });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
}

module.exports = AuthController;
