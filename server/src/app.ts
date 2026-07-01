import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import healthRoute from "./routes/health.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/health", healthRoute);

export default app;
