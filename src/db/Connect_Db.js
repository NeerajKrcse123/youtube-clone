import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const ConnectDb = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connection start", ConnectionInstance);
    } catch (error) {
        console.log(error);
    }
};
export default ConnectDb;