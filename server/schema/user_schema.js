import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    role: {type: String, required: true}
})

const User = mongoose.model('User', userSchema)

export default User
