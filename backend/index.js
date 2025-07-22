import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './database/db.js';

dotenv.config();

const PORT = process.env.PORT || 6000;
const app = express();

// middileWare
app.use(express.json());
app.use(urlencoded({exteded : true}));
app.use(cookieParser());

// cors for connection 
const corsOption = {
    origin : "http://localhost:5173",     // soon frontend link here....
    credential : true,
}

app.use(cors(corsOption));

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listning on PORT ${PORT}`);
})