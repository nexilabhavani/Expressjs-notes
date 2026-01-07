import mongoose from "mongoose";
export const ConnectDB= async ()=>{
    const MONGODB="mongodb://localhost:27017/test1"

    mongoose.connect(MONGODB).then(()=>{
    console.log("Database coneected")
})
}