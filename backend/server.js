import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({
  type: ['application/json', 'text/plain'] // Allow more flexible JSON parsing
}));

// Logging middleware to debug request body
app.use((req, res, next) => {
  console.log('Received Body:', req.body);
  next();
});

// Root test route
app.get("/", (req, res) => {
  res.json({ message: "✅ xOutreach Backend API is running..." });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads", leadRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});