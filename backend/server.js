import express from "express";
import mongoose from "mongoose";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
app.use(express.json());

// ✅ new MongoDB connection (no deprecated options)
mongoose.connect("mongodb+srv://ayansaifi2nd:say9toproject02@cluster1.mshcwft.mongodb.net/?retryWrites=true&w=majority&appName= project02")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

// ✅ use routes
app.use("/api", paymentRoutes);

// start server
app.listen(5000, () => console.log("Server running on port 5000"));
