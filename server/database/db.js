import mongoose from "mongoose";

const  Connection = async (username,password) => {
    const URL= `mongodb+srv://${username}:${password}@blogapplication.qrrw9kn.mongodb.net/?retryWrites=true&w=majority`;
   try{
   await mongoose.connect(URL,{useNewUrlParser:true});
   console.log("database connected successfully");
   }
   catch(error){
      console.log("error while connecting database",error);
   }
  
}

export default Connection;