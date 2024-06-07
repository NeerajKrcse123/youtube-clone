
import dotenv from "dotenv";
import app from "./app.js";
import ConnectDb from "./db/Connect_Db.js";
dotenv.config({
    path: "./env"
});



ConnectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Connection Failed", err);
    })



