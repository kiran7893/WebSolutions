import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: "0",
      description:
        "For personal use and exploration of AI technology.For personal use and exploration of AI technology.For personal use and exploration of AI technology.For personal use and exploration of AI technology.",
      features: [
        "100 requests per day",
        "Free trial features access",
        "Limited API access",
      ],
      buttonText: "Get started",
      popular: false,
    },
    {
      title: "Premium",
      price: "9.99",
      description:
        "Perfect for professionals and small businesses in need of significant AI integrationPerfect for professionals and small businesses in need of significant AI integration.Perfect for professionals and small businesses in need of significant AI integration.",
      features: [
        "Unlimited AI generation",
        "Full new features access",
        "Priority support",
      ],
      buttonText: "Get started",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Contact us",
      description:
        "Perfect for large businesses or organizations that require specialized support.Perfect for large businesses or organizations that require specialized support.",
      features: [
        "Custom deployment",
        "Comprehensive usage data",
        "Training specialized models",
      ],
      buttonText: "Contact sale",
      popular: false,
    },
  ];

  return (
    <section id="pricing">
      <div className="min-h-screen bg-gradient-to-br bg-black flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <motion.h1
            className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 p-2 mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose your plan
          </motion.h1>

          <motion.p
            className="text-xl text-center text-pink-300 mb-12 p-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock endless possibilities
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
