import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const navItems = [
    { text: "Home", to: "hero" },
    { text: "Course", to: "courses" },
    { text: "About Us", to: "about" },
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[url(/header-bg.png)] bg-cover bg-center">
      {/* Modern Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              alt="LLC Logo"
              src="/polygon-2-1.svg"
            />
            <span className="ml-2 font-['Poppins',Helvetica] font-bold text-[#0a4ed7] text-xl">
              LLC
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="font-['Poppins',Helvetica] font-medium text-[#252641] text-base hover:text-[#f48c06] transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="px-6 py-2 bg-transparent border border-[#f48c06] rounded-full font-['Poppins',Helvetica] font-medium text-[#f48c06] text-sm hover:bg-[#f48c06] hover:text-white transition-all"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </Button>

            <Button
              className="px-6 py-2 bg-[#f48c06] rounded-full font-['Poppins',Helvetica] font-medium text-white text-sm hover:bg-[#e07b05] transition-colors"
              onClick={() => console.log("Sign Up clicked")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl pt-16"
        >
          <h1 className="font-['Poppins',Helvetica] font-bold text-[#0a4ed7] text-4xl md:text-5xl lg:text-6xl mb-4">
            Expand Your Horizons
          </h1>
          
          <h2 className="font-['Poppins',Helvetica] font-semibold text-[#f48c06] text-2xl md:text-3xl mb-6">
            Liberal Learning Course
          </h2>

          <p className="font-['Nunito_Sans',Helvetica] font-normal text-[#252641] text-lg md:text-xl leading-relaxed mb-8">
            Discover interdisciplinary education that fosters critical thinking, 
            enhances communication skills, and develops global awareness. 
            Our courses empower you to think differently and shape your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="px-8 py-4 bg-[#f48c06] rounded-full font-['Poppins',Helvetica] font-semibold text-white text-lg hover:bg-[#e07b05] transition-colors"
              onClick={() => {
                const coursesSection = document.getElementById("courses");
                coursesSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Courses
            </Button>
            
            <Button
              variant="outline"
              className="px-8 py-4 bg-transparent border-2 border-[#0a4ed7] rounded-full font-['Poppins',Helvetica] font-semibold text-[#0a4ed7] text-lg hover:bg-[#0a4ed7] hover:text-white transition-colors"
              onClick={() => console.log("Learn more clicked")}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};