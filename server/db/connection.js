import mongoose from "mongoose";

const Connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected")
    } catch(err){
        console.log(err)
    }
}

export default Connect