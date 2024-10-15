const User = require("../models/user"); // Import the User model
const { body, validationResult } = require("express-validator"); // Import validation functions

// Validation rules
const userValidationRules = [
  body("name")
    .isLength({ min: 6 })
    .withMessage("Name must be at least 6 characters long."),
  body("email").isEmail().withMessage("Invalid email format."),
  body("description").notEmpty().withMessage("Description cannot be empty."),
];

// Controller to handle user creation
const createUser = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation errors occurred",
      errors: errors.array(),
    });
  }

  try {
    const { name, email, description } = req.body;

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      description,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the created user
    res.status(201).json({
      message: "User created successfully!",
      user: savedUser,
    });
  } catch (error) {
    // Handle errors (e.g., validation errors)
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

// Export validation rules and controller
module.exports = {
  userValidationRules,
  createUser,
};
