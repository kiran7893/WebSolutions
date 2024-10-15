const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController"); // Adjust the casing here

// Route to fetch all users
router.get("/users", adminController.getAllUsers);

// Route to fetch a user by ID
router.get("/users/:id", adminController.getUserById);

module.exports = router;
