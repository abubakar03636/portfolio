import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import personalimg from "../assets/unnamed.png";

export default function Home() {
  const [showImage, setShowImage] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("up");

  const skills = [
    "React", "HTML", "CSS", "JavaScript", "Node.js",
    "MongoDB", "Git", "TailwindCSS", "TypeScript", "Redux"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        scrollDirection.current = "down";
      } else {
        scrollDirection.current = "up";
      }
      
      lastScrollY.current = currentScrollY;
      
      // Show/hide image based on scroll direction
      if (scrollDirection.current === "down") {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animations = [
    { rotate: [0, 15, -15, 0] },
    { scale: [1, 1.2, 1] },
    { x: [0, -10, 10, 0] },
    { y: [0, -10, 10, 0] },
    { opacity: [1, 0.5, 1] },
    { rotateY: [0, 180, 0] },
    { rotateX: [0, 180, 0] },
    { scaleX: [1, 1.3, 1] },
    { scaleY: [1, 1.3, 1] },
    { x: [0, 20, -20, 0], rotate: [0, 5, -5, 0] }
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen border-b rounded-xl flex flex-row sm:flex-row mt-14 justify-between px-4 sm:px-6 lg:px-10 py-2 bg-gray-900 text-yellow-300 overflow-hidden"
    >
      {/* CV Download Button */}
      <a
        href="/CV.pdf"
        download
        className="absolute top-8 mt-1 left-2 sm:left-8 bg-gray-800 text-yellow-300 px-4 py-2 rounded-2xl font-semibold shadow-md hover:bg-gray-700 transition z-20"
      >
        Download CV
      </a>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl text-left z-10 mt-10 sm:mt-0"
      >
        <h2 className="text-base sm:text-lg md:text-2xl mt-8 mb-4 text-yellow-100">
          Hi, I'm
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-yellow-600">
          Abubakar Rafique
        </h2>

        <p className="text-base sm:text-2xl text-yellow-100 mb-2">
          A passionate developer with experience in building responsive and interactive web applications.
        </p>

        {/* Expertise Section */}
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 border-b pb-1 border-yellow-500">
          Expertise
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((tech, index) => (
            <motion.div
              key={tech}
              animate={animations[index % animations.length]}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
              className="flex items-center justify-center p-3 sm:p-4 bg-gray-800 text-yellow-300 font-semibold rounded-xl border-2 border-transparent hover:border-yellow-400 shadow-md text-sm sm:text-base cursor-pointer"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profile Image - Now with absolute positioning */}
      <motion.div
        className="absolute top-4 right-4 sm:right-10"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: showImage ? 1 : 0,
          y: showImage ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={personalimg}
          alt="Profile"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
          initial={{ x: 30 }}
          animate={{ x: showImage ? 0 : 30 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </section>
  );
}