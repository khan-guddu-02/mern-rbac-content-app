import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

app.use(errorHandler);

export default app;