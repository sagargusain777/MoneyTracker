
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = 3000 ;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})

app.get("/api/test",(req,res)=>{

    res.status(200).json("test ok")

})
app.post("/api/transaction",(req,res)=>{
    res.status(200).json(req.body)

})