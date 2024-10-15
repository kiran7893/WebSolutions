import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ServiceCard = ({ service, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${service.color} p-6 rounded-lg shadow-lg cursor-pointer`}
    onClick={() => onClick(service)}
  >
    <div className="flex items-center mb-4">
      <div className="text-4xl mr-4">{service.icon}</div>
      <div>
        <div className="text-2xl font-bold text-white opacity-20">
          {service.id}
        </div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      </div>
    </div>
    <p className="text-white opacity-80 mb-4">{service.description}</p>
    <ul className="list-disc list-inside text-white opacity-80">
      {service.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  </motion.div>
);

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ServiceCard;
