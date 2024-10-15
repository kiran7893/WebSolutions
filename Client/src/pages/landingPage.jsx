import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import TypeWriter from "../components/TypeWriter";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import PricingSection from "../components/Pricing";
import ContactUsModal from "../components/ContactUsModal";
import Footer from "../components/Footer";

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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-3 text-gray-400 text-sm sm:text-base"
                >
                  {[
                    { label: "Software Development", value: 4024 },
                    { label: "Data Storage and Management", value: 5202 },
                    { label: "Networking and Communications", value: 2044 },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{'${index + 1}. ${item.label}'}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </motion.div>
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
        <ContactUsModal/>
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;

const services = [
  {
    id: "01",
    title: "Mobile Application Development",
    description:
      "Create cutting-edge mobile applications for iOS and Android platforms. Our expert team delivers intuitive, high-performance apps tailored to your business needs.",
    features: [
      "Native and cross-platform development",
      "UI/UX design",
      "App Store optimization",
    ],
    color: "bg-gray-800",
    icon: "📱",
    fullDescription:
      "Our mobile application development service offers end-to-end solutions for businesses looking to establish a strong mobile presence. We specialize in creating both native and cross-platform applications that are optimized for performance and user experience. Our team of skilled developers and designers work collaboratively to bring your vision to life, ensuring that your app stands out in the crowded app marketplaces. We handle everything from initial concept and wireframing to final deployment and ongoing support, making the entire process smooth and hassle-free for our clients.",
  },
  {
    id: "02",
    title: "Web Application Development",
    description:
      "Build responsive and scalable web applications using the latest technologies. We focus on creating seamless user experiences and robust backend systems.",
    features: [
      "Full-stack development",
      "Progressive Web Apps (PWA)",
      "API integration",
    ],
    color: "bg-purple-700",
    icon: "🌐",
    fullDescription:
      "Our web application development service is designed to help businesses create powerful, scalable, and user-friendly web applications. We leverage the latest technologies and frameworks to build responsive applications that work seamlessly across all devices and platforms. Our full-stack development approach ensures that both the front-end and back-end of your application are optimized for performance and security. We specialize in creating Progressive Web Apps (PWAs) that offer app-like experiences right in the browser, and we excel at integrating complex APIs to extend the functionality of your web applications.",
  },
  {
    id: "03",
    title: "Cloud Development",
    description:
      "Harness the power of cloud computing to scale your business. Our cloud solutions ensure high availability, security, and cost-effectiveness.",
    features: [
      "AWS, Azure, and Google Cloud",
      "Microservices architecture",
      "Serverless computing",
    ],
    color: "bg-indigo-600",
    icon: "☁",
    fullDescription:
      "Our cloud development services are designed to help businesses leverage the full potential of cloud computing. We work with leading cloud platforms including AWS, Azure, and Google Cloud to create scalable, secure, and cost-effective solutions. Our expertise in microservices architecture allows us to build applications that are easier to scale and maintain. We also specialize in serverless computing, helping you reduce operational costs and focus on core business logic rather than infrastructure management. Whether you're looking to migrate existing applications to the cloud or build cloud-native solutions from scratch, our team has the expertise to guide you through the process.",
  },
  {
    id: "04",
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence and machine learning to gain insights and automate processes. We develop custom AI solutions to drive your business forward.",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    color: "bg-blue-600",
    icon: "🤖",
    fullDescription:
      "Our AI & Machine Learning services are at the cutting edge of technology, offering businesses the tools they need to automate processes, gain deep insights, and make data-driven decisions. We specialize in developing custom AI solutions that address specific business challenges. Our expertise spans Natural Language Processing (NLP) for text analysis and chatbots, Computer Vision for image and video analysis, and Predictive Analytics for forecasting and decision-making. We work closely with our clients to understand their unique needs and develop AI models that integrate seamlessly with their existing systems, providing tangible business value and a competitive edge in the market.",
  },
];