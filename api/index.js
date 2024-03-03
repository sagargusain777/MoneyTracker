
import express from "express";

import cors from "cors";


const app = express();
const PORT = 3000 ;

app.use(cors());

app.use(express.json());

app.get("/api/test",(req,res)=>{

    res.status(200).json("test ok")

})
app.post("/api/transaction",(req,res)=>{
    res.status(200).json(req.body)
    

})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})

