import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import Modal from "../components/Modal";
import WebsiteCostCalculator from "../components/Calculator";
import Footer from "../components/Footer";
import AppointmentCalendar from "../components/Calender";

const ServicesPage = () => {
  const offerSectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

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

  const scrollToOfferSection = () => {
    offerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative">
      <div className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="Secure Shield.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          ></motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl mb-8 max-w-2xl text-center"
          ></motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={scrollToOfferSection}
            className="cursor-pointer absolute bottom-10"
          >
            <ChevronDown size={48} />
          </motion.div>
        </div>
      </div>
      <div ref={offerSectionRef} className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-purple-500 mb-12"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center text-xl mb-16 max-w-3xl mx-auto text-white"
          >
            Our comprehensive range of services is designed to meet all your
            digital needs. From mobile and web development to cloud solutions
            and AI integration, we have got you covered.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </div>
      <WebsiteCostCalculator />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-black py-16 px-8 text-center color-white"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to get started?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-white">
          Let us discuss how our services can help your business grow and
          succeed in the digital landscape.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg"
        >
          Contact Us
        </motion.button>
      </motion.div>
      <AppointmentCalendar />
      <Modal
        isOpen={!!selectedService}
        onClose={closeModal}
        service={selectedService}
      />
      <Footer />
    </div>
  );
};

export default ServicesPage;
