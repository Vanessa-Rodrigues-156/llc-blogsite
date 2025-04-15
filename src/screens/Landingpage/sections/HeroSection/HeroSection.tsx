import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import Navigation from "../../../../components/Navigation/Navigation";

export const HeroSection = (): JSX.Element => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-[url(/herobg.png)] bg-cover bg-center">
      {/* Modern Navbar */}
      <Navigation />

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
              asChild
            >
              <Link to="/courses">
                Explore Courses
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="px-8 py-4 bg-transparent border-2 border-[#0a4ed7] rounded-full font-['Poppins',Helvetica] font-semibold text-[#0a4ed7] text-lg hover:bg-[#0a4ed7] hover:text-white transition-colors"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};