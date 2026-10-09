import mongoose from "mongoose";

let dbReady = false;

export const isDbReady = () => dbReady;

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      dbReady = true;
      console.log("Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      dbReady = false;
      console.warn("MongoDB disconnected — reconnecting...");
    });

    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "Resume-Builder";

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set");
    }

    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 60000,
      heartbeatFrequencyMS: 10000,
      maxPoolSize: 10,
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default connectDb;
