import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, service }) => (
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
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={`${service.color} p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white mb-6">{service.fullDescription}</p>
          <h3 className="text-xl font-semibold text-white mb-2">
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-white">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
  }),
};

export default Modal;
