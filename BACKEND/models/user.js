import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String, 
    email: String,
    password: String,
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    isAdmin: Boolean

})

export const User = mongoose.model('User', UserSchema)

export async function CreateNewUser (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const passwordRaw = req.body.password

    const passwordHashed = await bcrypt.hash(passwordRaw, 10)

    const newUser = await User.create({
        username: username,
        email: email,
        password: passwordHashed
    });

    res.status(201).json(newUser)
}