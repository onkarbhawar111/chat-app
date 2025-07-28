import mongoose from 'mongoose'

const Connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    } catch(err){
        console.log(err);
    }
}
