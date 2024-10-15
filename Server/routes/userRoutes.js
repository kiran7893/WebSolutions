const express = require("express");
const router = express.Router();
const {
  userValidationRules,
  createUser,
} = require("../controllers/userController");

// User creation route with validation
router.post("/users", userValidationRules, createUser);

module.exports = router;
