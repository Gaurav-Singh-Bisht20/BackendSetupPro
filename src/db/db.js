import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

export const dbConnect = async()=>{
    try{
        const connectionInstance = await mongoose.connect (`${process.env.MONGODB_URL}`)
        console.log(connectionInstance)
    }catch(error){
        console.error("MongoDb connection failed",error)
    }
}

export default dbConnect;