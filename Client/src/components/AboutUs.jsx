import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <section id="about">
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-6">
          <motion.div
            ref={ref}
            className="max-w-6xl w-full"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
              <motion.div
                className="w-full lg:w-1/2 relative overflow-hidden rounded-lg"
                variants={itemVariants}
              >
                <motion.img
                  src="/ai.jpeg"
                  alt="AI Robot"
                  className="w-full h-auto"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>

              <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                  variants={itemVariants}
                >
                  OUR MISSION
                </motion.h1>

                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8"
                  variants={itemVariants}
                >
                  Transforming Brands through Research Driven Web Design
                </motion.h2>
                <motion.p className="text-lg mb-6" variants={itemVariants}>
                  Website Development Agency is a Dubai-based digital products
                  studio offering global web design solutions to ambitious
                  brands. Providing the experiences of tomorrow through
                  innovative website design and web development and digital
                  marketing.
                </motion.p>
                <motion.p className="text-lg mb-6" variants={itemVariants}>
                  You can make a seamless digital experience for your brand by
                  developing a website. Therefore, a website is crucial for your
                  business and marketing strategy. Our company, Website
                  Development Agency, offers market-leading strategies and
                  software innovation solutions tailored to your business
                  specific objectives and goals.
                </motion.p>
                <motion.ul className="space-y-4" variants={containerVariants}>
                  {[
                    "High speed of order fulfillment",
                    "Professional team with extensive experience",
                    "Low price compared to competitors",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={itemVariants}
                    >
                      <svg
                        className="w-6 h-6 mr-2 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
