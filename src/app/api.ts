import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.url);
});

export default app;
