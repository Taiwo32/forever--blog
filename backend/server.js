import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"

import 'dotenv/config'
import blogRouter from "./routes/blogRoute.js"
import userRouter from "./routes/userRoute.js"




const app = express()
const port = 9000;


app.use(express.json())
app.use(cors())


connectDB();


app.use("/api/blog",blogRouter)
app.use("/api/user",userRouter)

app.use("/uploads", express.static('uploads')) 


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`); 
})