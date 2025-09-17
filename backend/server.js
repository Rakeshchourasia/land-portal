// Load environment variables FIRST
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

// Import Routes
import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import buyerRoutes from "./routes/buyer.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

// Connect to DB
connectDB();

const app = express();

app.use(cors({
  origin: "https://land-portal-1.onrender.com/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploads folder as static
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Mount routers
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/buyers", buyerRoutes);
app.use("/api/payment", paymentRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
