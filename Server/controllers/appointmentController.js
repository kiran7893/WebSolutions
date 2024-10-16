// controllers/appointmentController.js
const Appointment = require("../models/appointment");

const bookAppointment = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;

    // Validate the incoming data
    if (!name || !email || !date || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newAppointment = new Appointment({ name, email, date, time });
    await newAppointment.save();

    return res.status(201).json({
      message: "Appointment booked successfully!",
      appointment: newAppointment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error booking appointment.", error: error.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving appointments.",
      error: error.message,
    });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters

    // Find appointment by ID
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving appointment.",
      error: error.message,
    });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  getAppointmentById, // Export the new method
};
