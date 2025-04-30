import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
app.use(cors({ origin:"https://chatbyshraddesh.vercel.app", credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));

app.use("/api/v1",appRouter);

app.get("/api/v1/ping", (req, res) => {
    res.json({ message: "pong" });
  });
  
export default app;