import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

// Vercel rewrites fix: restore original URL before Express routing
app.use((req, _res, next) => {
  const originalUrl =
    req.headers["x-vercel-url"] ||
    req.headers["x-now-original-url"] ||
    req.headers["x-forwarded-uri"];
  if (originalUrl && typeof originalUrl === "string") {
    req.url = originalUrl;
  }
  next();
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

// 404 catch for debugging
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.path}` });
});

// Local dev: listen; Vercel: export default as handler
const __filename = fileURLToPath(import.meta.url);
const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);
if (isMain || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

export default app;
