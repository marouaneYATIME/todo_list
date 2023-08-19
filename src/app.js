import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";
import AuthMidleware from "./middlewares/AuthMidleware.js";



const app = express();

mongoose.connect(DB_CONNECT, 
    {useNewUrlParser:true}
    );

const PORT = 8000;

app.use(express.json());
app.use('/api/', apiRoute);
app.use('/api/',AuthMidleware,  apiProtected);

app.listen(PORT, ()=>console.log(' server is running '))
