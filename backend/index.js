import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js'

dotenv.config();

const PORT = process.env.PORT || 6000;
const app = express();

// middileWare
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());



app.use(express.json()); // to parse JSON
app.use(urlencoded({ extended: true })); // to parse URL-encoded data
app.use(cookieParser());

// CORS setup
const corsOption = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOption));

// api
app.use("/api/v1/user", userRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listning on PORT ${PORT}`);
})


