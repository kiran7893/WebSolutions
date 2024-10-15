import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const ContactUsModal = ({ isOpen, onClose, service }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const validateInputs = () => {
    if (name.length < 6 && name.length > 12) {
      return "Name must be in 6-12 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email format.";
    }
    if (!description) {
      return "Description cannot be empty.";
    }
    return null; // No errors
  };

  const handleCreateUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading state to true
    setErrorMessage(""); // Reset error message

    const validationError = validateInputs();
    if (validationError) {
      setErrorMessage(validationError);
      setLoading(false);
      return;
    }

    const dataSend = {
      name,
      email,
      description,
    };

    const baseUrl = "http://localhost:8080";

    try {
      const res = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        // Handle any response errors
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Something went wrong!");
        return;
      }

      alert("Message sent successfully!");
      // Reset form fields
      setName("");
      setEmail("");
      setDescription("");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message, please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-lg shadow-2xl p-8 max-w-md w-full relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <X size={24} />
            </motion.button>
            <h2 className="text-3xl font-bold mb-6 text-white">
              {service.title}
            </h2>
            <p className="text-gray-300 mb-6">{service.fullDescription}</p>
            <form className="space-y-6" onSubmit={handleCreateUser}>
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  whileFocus="focus"
                  required // Make this field required
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  whileFocus="focus"
                  required // Make this field required
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <motion.textarea
                  id="description"
                  placeholder="How can we help you?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  whileFocus="focus"
                  required // Make this field required
                />
              </motion.div>

              <motion.div
                className="flex items-center"
                variants={inputVariants}
              >
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </motion.div>

              <motion.button
                type="submit" // Change this to submit button
                className={`w-full bg-purple-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                {/* Show loading text */}
              </motion.button>
            </form>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
            )}{" "}
            {/* Display error message */}
            <p className="text-gray-400 text-xs mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ContactUsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
  }),
};

export default ContactUsModal;
