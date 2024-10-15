const User = require("../models/user");

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the users as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" }); // Send an error response
  }
};

// Fetch user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Send the user as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" }); // Send an error response
  }
};
