import express from "express";
import helmet from "helmet";

export const app = express();

app.use(helmet());
