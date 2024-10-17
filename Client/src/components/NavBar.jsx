import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ContactUsModal from "./ContactUsModal"; // Make sure to import the ContactUsModal component

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Menu items
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Packages", href: "#packages" },
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle navigation item click with delay
  const handleNavClick = (item) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(item.href.slice(1));
    }, 300);
    setActiveSection(item.name);
  };

  // Handle "Connect with us" click
  const handleConnectClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsModalOpen(true);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = menuItems.map((item) =>
        document.getElementById(item.href.slice(1))
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop - 100 <= scrollPosition) {
          setActiveSection(menuItems[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.header className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
        <motion.div className="text-2xl font-bold">
          <motion.img
            src="/"
            alt="Logo"
            className="h-10 w-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-sm hover:text-purple-400 transition-colors duration-200 relative ${
                activeSection === item.name ? "text-purple-400" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.name}
              {activeSection === item.name && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400"
                  layoutId="underline"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Connect with us (Desktop) */}
        <motion.button
          className="hidden md:block bg-white text-black px-5 py-2 text-sm rounded-full hover:bg-purple-400 hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConnectClick}
        >
          Connect with us
        </motion.button>

        {/* Mobile Menu Toggle Button */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white cursor-pointer w-6 h-6" />
          ) : (
            <Menu className="text-white cursor-pointer w-6 h-6" />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:hidden mt-4"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 text-sm hover:bg-purple-400 transition-colors duration-200 ${
                    activeSection === item.name
                      ? "bg-purple-400 text-white"
                      : ""
                  }`}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact-us"
                className="block w-full text-left py-3 px-4 text-sm bg-white text-black hover:bg-purple-400 hover:text-white transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
                onClick={handleConnectClick}
              >
                Connect with us
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ContactUsModal */}
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={{
          title: "Contact Us",
          fullDescription: "We'd love to hear from you!",
          features: [],
          color: "purple",
        }}
      />
    </>
  );
};

export default NavBar;
