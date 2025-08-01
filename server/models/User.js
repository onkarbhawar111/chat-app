import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String}
})

const UserModel = mongoose.model('User', UserSchema)
export default UserModel