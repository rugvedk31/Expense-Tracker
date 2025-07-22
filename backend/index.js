import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './database/db.js';

import { register } from "./controllers/user.controller.js"; // register controller
import { login } from "./controllers/user.controller.js"; // login controller
import { logout } from "./controllers/user.controller.js"; // logout controller

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



app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listning on PORT ${PORT}`);
})

// test route for registeration 
app.post("/api/register", register);

// test route for login
app.post("/api/login",login);

// test route for logout
app.post("/api/logout",logout);