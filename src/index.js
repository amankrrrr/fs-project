//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/data.js";

dotenv.config({
    path: './env'
})

connectDB()









/*
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
    } catch (error) {
        console.error("ERROR", error)
        throw err
    }
}) () */
