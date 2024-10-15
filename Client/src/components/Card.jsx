import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ title, duration, cost, level, icon, para }) => {
  const navigate = useNavigate(); // Call useNavigate at the top level

  const handleClick = () => {
    navigate("/services"); // Handle navigation on click
  };

  return (
    <motion.div
      className="bg-black border-2 border-purple-500 rounded-3xl p-6 w-80 flex flex-col"
      style={{
        boxShadow:
          "0 10px 20px rgba(168, 85, 247, 0.4), 0 6px 6px rgba(236, 72, 153, 0.3)",
        transform: "perspective(1000px) rotateX(5deg)",
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 0,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gradient-to-r from-pink-500 to-pink-500 p-3 rounded-full">
          {icon}
        </div>
        <span className="text-yellow-400 text-sm font-semibold">{level}</span>
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <div className="text-gray-400 text-sm mb-4">
        <p>
          {duration} • ${cost}
        </p>
      </div>
      <p className="text-gray-300 text-sm mb-4 flex-grow">{para}</p>
      <button
        onClick={handleClick}
        className="mt-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
      >
        Enroll Now
      </button>
    </motion.div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  para: PropTypes.string.isRequired,
};

export default Card;
