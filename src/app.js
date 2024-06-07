import cors from "cors";
import express from "express";
const app = express();
app.use(cors({
    origin: process.env.CORS,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));

// routes
import useRouter from "./routes/user.routes.js";
app.use("/api/v1/users", useRouter);
export default app;