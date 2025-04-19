import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
dotenv.config();
// Middleware
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// Serve uploaded images statically
app.use("/uploads", express.static("uploads"));
// MongoDB Connection
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL)
  .then(() => {
    console.log("MongoDB connection successful");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection error:", error));

// Routes
app.use("/api", route);

