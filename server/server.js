import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
//REST OBJECT CREATION
const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT=process.env.PORT||8080;

//Routers
app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"welcome to sever"
    })
})

app.listen(PORT,()=>{
    console.log(`sever listening at port ${PORT}.`.bgBlue.white);
    
})
