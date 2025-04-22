import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { text: "Home", to: "/" },
    { text: "Courses", to: "/courses" },
    { text: "About Us", to: "/about" },
  ];

  return (
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
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => 
                `font-['Poppins',Helvetica] font-medium text-base transition-colors ${
                  isActive ? "text-[#f48c06]" : "text-[#252641] hover:text-[#f48c06]"
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="px-6 py-2 bg-transparent border border-[#f48c06] rounded-full font-['Poppins',Helvetica] font-medium text-[#f48c06] text-sm hover:bg-[#f48c06] hover:text-white transition-all"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            className="px-6 py-2 bg-[#f48c06] rounded-full font-['Poppins',Helvetica] font-medium text-white text-sm hover:bg-[#e07b05] transition-colors"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
