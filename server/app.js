import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import errorHandler from "./middleware/errorHandler.js";
import homeRouter from "./routes/home.js";
import scoresRouter from "./routes/scores.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));

app.use("/", homeRouter);
app.use("/api/scores", scoresRouter);

app.use(errorHandler);

export default app;
