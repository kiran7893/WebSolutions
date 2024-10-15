/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Services = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const Services = [
    {
      title: "GRAPHIC DESIGN",
      duration: "3 months",
      cost: 400,
      level: "Advanced",
      icon: "🎨",
      para: "Master the art of visual communication through graphic design. Learn industry-standard tools and techniques to create stunning visuals for print and digital media.",
    },
    {
      title: "DIGITAL MARKETING",
      duration: "2 months",
      cost: 200,
      level: "Beginner",
      icon: "📢",
      para: "Dive into the world of digital marketing. Learn SEO, social media strategies, content marketing, and analytics to promote brands and engage audiences online.",
    },
    {
      title: "MOTION DESIGN",
      duration: "4 months",
      cost: 400,
      level: "Intermediate",
      icon: "🎬",
      para: "Bring designs to life with motion. Learn animation principles, video editing, and special effects to create captivating motion graphics for various media platforms.",
    },
    {
      title: "WEB DEVELOPMENT",
      duration: "6 months",
      cost: 600,
      level: "Advanced",
      icon: "💻",
      para: "Master the art of building responsive and dynamic websites. Learn HTML, CSS, JavaScript, and popular frameworks to create modern web applications.",
    },
    {
      title: "UI/UX DESIGN",
      duration: "3 months",
      cost: 350,
      level: "Beginner",
      icon: "✏️",
      para: "Design intuitive and visually appealing user interfaces. Learn user research, wireframing, prototyping, and usability testing to create seamless user experiences.,Design intuitive and visually appealing user interfaces. Learn user research, wireframing, prototyping, and usability testing to create seamless user experiences.",
    },
    {
      title: "MOTION DESIGN",
      duration: "4 months",
      cost: 400,
      level: "Intermediate",
      icon: "🎬",
      para: "Bring designs to life with motion. Learn animation principles, video editing, and special effects to create captivating motion graphics for various media platforms.",
    },
  ];

  // Scroll automatically and detect center card
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }

        const centerPosition = scrollLeft + clientWidth / 2;
        const newIndex = Math.round(centerPosition / 300); // Assuming each card is ~300px wide
        setCenterIndex(newIndex);
      }
    }, 3000); // Adjust this interval for continuous scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <section id="services">
        <div className="bg-black  pt-8 ">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            EVERY COURSE IS A KEY TO
            <br />
            UNLOCKING YOUR POTENTIAL
          </h1>
          <div className="relative">
            <motion.div
              ref={scrollRef}
              className="flex overflow-x-hidden gap-6 p-4"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="flex gap-6"
                drag="x"
                dragConstraints={{ right: 0, left: -1600 }}
              >
                {Services.map((course, index) => (
                  <Card
                    key={index}
                    {...course}
                    index={index}
                    totalCards={Services.length}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
