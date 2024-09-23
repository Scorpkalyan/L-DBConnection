import express, { json } from "express";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import connectToMongoDb from "./src/connectTodb/connectTOMongoDB.js";

let expressApp = express();
expressApp.use(json());  //first


expressApp.listen(8000, ()=>{
    console.log('server is listening on port 8000');
    connectToMongoDb();
});


expressApp.use(errorMiddleware); //last