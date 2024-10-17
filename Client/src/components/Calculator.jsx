import { useState } from "react";
import { motion } from "framer-motion";

const WebsiteCostCalculator = () => {
  const [formData, setFormData] = useState({
    newOrRedesign: "New",
    numPages: 1,
    uiUxDesign: "Standard",
    ecommerceFunctionality: "No",
    basicFeatures: [],
    advancedFeatures: [],
    additionalServices: [],
  });
  const [estimatedCost, setEstimatedCost] = useState(null);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setEstimatedCost(data.estimated_cost);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center  bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full space-y-8   bg-gray-900 p-8 rounded-xl border-2 border-purple-500 shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-8"
        >
          Website Design Cost Calculator
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-white">
                  Is this a new website or redesign?
                </span>
                <select
                  name="newOrRedesign"
                  value={formData.newOrRedesign}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-700 border border-gray-700 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-white"
                >
                  <option value="New">New</option>
                  <option value="Redesign">Redesign</option>
                </select>
              </label>
              <label className="block">
                <span className="text-white">Number of Pages:</span>
                <input
                  type="number"
                  name="numPages"
                  value={formData.numPages}
                  onChange={handleInputChange}
                  min="1"
                  max="100"
                  className="mt-1 block w-full bg-gray-700 border border-gray-700 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-white"
                />
              </label>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              UI/UX Design
            </h2>
            <label className="block">
              <span className="text-white">UI/UX Design Type:</span>
              <select
                name="uiUxDesign"
                value={formData.uiUxDesign}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-white"
              >
                <option value="Standard">Standard</option>
                <option value="Advanced">Advanced</option>
                <option value="Custom">Custom</option>
              </select>
            </label>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              E-commerce Functionality
            </h2>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="ecommerceFunctionality"
                  value="Yes"
                  checked={formData.ecommerceFunctionality === "Yes"}
                  onChange={handleInputChange}
                  className="form-radio text-purple-500"
                />
                <span className="ml-2 text-white">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="ecommerceFunctionality"
                  value="No"
                  checked={formData.ecommerceFunctionality === "No"}
                  onChange={handleInputChange}
                  className="form-radio text-purple-500"
                />
                <span className="ml-2 text-white">No</span>
              </label>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Basic Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Analytics",
                "Image Gallery",
                "Video Gallery",
                "Live Chat",
                "WhatsApp Integration",
              ].map((feature) => (
                <label key={feature} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="basicFeatures"
                    value={feature}
                    checked={formData.basicFeatures.includes(feature)}
                    onChange={handleInputChange}
                    className="form-checkbox text-purple-500"
                  />
                  <span className="ml-2 text-white">{feature}</span>
                </label>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Advanced Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Payment Gateways",
                "Chatbot",
                "Login Systems",
                "Appointment Scheduling",
              ].map((feature) => (
                <label key={feature} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="advancedFeatures"
                    value={feature}
                    checked={formData.advancedFeatures.includes(feature)}
                    onChange={handleInputChange}
                    className="form-checkbox text-purple-500"
                  />
                  <span className="ml-2 text-white">{feature}</span>
                </label>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Content Writing Services", "Stock Images", "SEO Design"].map(
                (service) => (
                  <label key={service} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="additionalServices"
                      value={service}
                      checked={formData.additionalServices.includes(service)}
                      onChange={handleInputChange}
                      className="form-checkbox text-purple-500"
                    />
                    <span className="ml-2 text-white">{service}</span>
                  </label>
                )
              )}
            </div>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-3xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Calculate Estimated Cost
          </motion.button>
        </form>
        {estimatedCost !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 text-white text-center"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Estimated Cost
            </h2>
            <p className="text-3xl font-bold">${estimatedCost.toFixed(2)}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default WebsiteCostCalculator;
