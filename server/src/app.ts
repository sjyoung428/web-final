import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(logger);

export default app;
