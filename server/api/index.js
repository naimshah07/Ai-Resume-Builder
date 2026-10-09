import app from "../server.js";
import connectDb from "../configs/db.js";

let connected = false;

export default async function handler(req, res) {
  if (!connected) {
    try {
      await connectDb();
      connected = true;
    } catch (err) {
      console.error("DB connect fail:", err.message);
      return res.status(500).json({ message: "Database connection failed" });
    }
  }
  return app(req, res);
}
