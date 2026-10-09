import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb, { isDbReady } from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
  "http://localhost:5177",
  "https://ai-resume-builder-nu-sandy.vercel.app",
];

app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin) || origin.includes("vercel.app")) {
        cb(null, true);
      } else {
        cb(null, true);
      }
    },
    credentials: true,
  })
);

// DB ready check middleware
app.use("/api", (req, res, next) => {
  if (!isDbReady()) {
    return res.status(503).json({ message: "Database connecting... retry shortly" });
  }
  next();
});

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
