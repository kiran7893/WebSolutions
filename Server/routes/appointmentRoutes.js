// routes/appointmentRoutes.js
const express = require("express");
const {
  bookAppointment,
  getAppointments,
  getAppointmentById, // Import the new function
} = require("../controllers/appointmentController");

const router = express.Router();

// Route to book an appointment
router.post("/", bookAppointment);

// Route to get all appointments
router.get("/", getAppointments);

// Route to get an appointment by ID
router.get("/:id", getAppointmentById); // Add this line

module.exports = router;
