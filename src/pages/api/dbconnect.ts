import mongoose from 'mongoose'
import { Processor } from 'postcss';
const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{dbName:"perplepages"})
        console.log("mongoose connected");
    }catch(error)
    {
        console.error("error connecting to db ",error)
    }
}

export default dbconnect;