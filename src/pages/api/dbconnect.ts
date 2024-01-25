import mongoose from 'mongoose'
const dbconnect=async()=>{
    try{
        await mongoose.connect('mongodb+srv://hishan:1234@cluster0.sksy2nt.mongodb.net/?retryWrites=true&w=majority',{dbName:"perplepages"})
        console.log("mongoose connected");
    }catch(error)
    {
        console.error("error connecting to db ",error)
    }
}

export default dbconnect;