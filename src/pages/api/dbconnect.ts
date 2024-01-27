import mongoose from 'mongoose'
import { Processor } from 'postcss';
const dbconnect=async()=>{
    try{
        if(process.env.MONGO_URL)
        {
            await mongoose.connect(process.env.MONGO_URL,{dbName:"perplepages"})
            console.log("mongoose connected");
        }else{
            console.log("error connecting to db")
        }
    }catch(error)
    {
        console.error("error connecting to db ",error)
    }
}

export default dbconnect;