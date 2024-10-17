import PropTypes from "prop-types";
import { motion } from "framer-motion";
const PricingCard = ({
  title,
  price,
  description,
  features,
  popular,
  buttonText,
}) => (
  <motion.div
    className={`flex flex-col p-6 rounded-3xl shadow-lg  border-purple-500  ${
      popular ? "bg-purple-500 " : "bg-gray-900"
    } text-white relative`}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h2
      className={`text-2xl font-bold mb-2 ${
        popular ? "text-purple-300" : "text-teal-300"
      }`}
    >
      {title}
    </h2>
    <p className="text-sm mb-4 text-gray-300">{description}</p>
    <div className="text-4xl font-bold mb-6 flex items-baseline">
      {price === "Contact us" ? (
        <span className="text-2xl">{price}</span>
      ) : (
        <>
          <span className="text-2xl mr-1">$</span>
          {price}
        </>
      )}
    </div>
    <motion.button
      className={`py-2 px-4 rounded-full mb-6 text-sm font-semibold ${
        popular
          ? "bg-purple-600 hover:bg-purple-700"
          : "bg-gray-700 hover:bg-gray-600"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonText}
    </motion.button>
    <ul className="space-y-2 mt-auto">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <svg
            className="w-4 h-4 mr-2 text-green-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    {popular && (
      <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl">
        Popular
      </div>
    )}
  </motion.div>
);

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  popular: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
};

export default PricingCard;
