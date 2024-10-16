const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json()); // application/json

// CORS Headers to handle cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error); // Log the error
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

// Import routes (e.g., userRoutes)
const userRoutes = require("./routes/userRoutes"); // Make sure this file exists and has routes defined
app.use("/api", userRoutes); // Route all API requests to '/api'
const adminRoutes = require("./routes/AdminRoutes"); // Import admin routes
app.use("/admin", adminRoutes); // Mount the admin routes
// Import appointment routes
const appointmentRoutes = require("./routes/appointmentRoutes");
app.use("/api/appointments", appointmentRoutes); // Mount the appointment routes

// MongoDB Connection URI from environment variables
const uri = process.env.CONNECTION;
const PORT = process.env.PORT;

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority" },
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });
