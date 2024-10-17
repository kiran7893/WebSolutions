import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import TypeWriter from "../components/TypeWriter";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import PricingSection from "../components/Pricing";
import ContactUsModal from "../components/ContactUsModal";
import Footer from "../components/Footer";
//import WebsiteCostCalculator from "../components/Calculator";

const LandingPage = () => {
  return (
    <>
      <section id="home">
        <NavBar />
        <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 relative z-10"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  <TypeWriter
                    texts={["YOUR PARTNER IN"]}
                    typeSpeed={50}
                    eraseSpeed={30}
                    eraseDelay={2000}
                    infinite={false}
                  />
                  <br />
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    <TypeWriter
                      texts={["DIGITAL"]}
                      typeSpeed={50}
                      eraseSpeed={30}
                      eraseDelay={2000}
                      typingDelay={2500}
                      infinite={false}
                    />
                  </span>
                  <br />
                  <TypeWriter
                    texts={["INNOVATION"]}
                    typeSpeed={50}
                    eraseSpeed={30}
                    eraseDelay={2000}
                    typingDelay={3000}
                    infinite={false}
                  />
                </h1>
                <div className="space-y-3 text-gray-400 text-sm sm:text-base">
                  {[
                    { label: "Software Development", value: 4024 },
                    { label: "Data Storage and Management", value: 5202 },
                    { label: "Networking and Communications", value: 2044 },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{`${index + 1}. ${item.label}`}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <p className="text-gray-400 text-base sm:text-lg">
                    We build custom software and websites that drive business
                    success. From innovative apps to sleek websites, we create
                    digital solutions tailored to your needs.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 2 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
          >
            <img
              src="/rings.gif"
              alt="Loading rings"
              className="absolute bottom-0 right-0 w-full max-w-[150%] h-auto object-contain object-bottom opacity-100 lg:max-w-[120%] xl:max-w-[100%]"
              style={{
                transform: "translate(20%, 30%)",
              }}
            />
          </motion.div>
        </div>
        <AboutUs />
        <Services />
        <PricingSection />
        {/* <WebsiteCostCalculator /> */}
        <ContactUsModal />
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
