import express from "express";
import dotenv from "dotenv";
import common from "../configs/common";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(cors(common.CORS_OPTIONS_DEV));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/*", (req: express.Request, res: express.Response) => {
  console.log(req.url);
});

export default app;
