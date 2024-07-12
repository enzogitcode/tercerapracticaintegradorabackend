import mongoose from "mongoose";
import configObject from './config/config.js';

const { mongo_Url } = configObject
mongoose.connect(mongo_Url)
    .then(() => console.log("Conectados a la db"))
    .catch(() => console.log("error"))