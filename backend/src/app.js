 import express from "express";
import cors from "cors";
import dynamicRoutes from "./routes/dynamicRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", dynamicRoutes);

export default app;