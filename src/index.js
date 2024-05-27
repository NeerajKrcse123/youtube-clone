
import dotenv from "dotenv";
// import express from "express";
import ConnectDb from "./db/Connect_Db.js";
dotenv.config({
    path: "./env"
});

// const app = express();

ConnectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Connection Failed", err);
    })



