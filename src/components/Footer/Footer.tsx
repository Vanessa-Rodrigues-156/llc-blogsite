import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const Footer: React.FC = () => {
  // Footer links data
  const footerLinks = [
    { id: 1, text: "Careers", to: "#" },
    { id: 2, text: "Privacy Policy", to: "#" },
    { id: 3, text: "Terms & Conditions", to: "#" },
  ];

  return (
    <footer className="w-full bg-[#252641] py-16 flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex items-center mb-16">
        <div className="relative w-[98px] h-[78px]">
          <img
            className="w-[78px] h-[78px]"
            alt="Polygon"
            src="/polygon-2-1.svg"
          />
          <div className="absolute top-4 left-10 font-['Poppins',Helvetica] font-bold text-white text-[32px] tracking-[1.28px]">
            LLC
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="h-[83px] mx-10 bg-white/20"
        />

        <div className="font-['Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0.88px]">
          Liberal Learning Courses
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center mb-6">
        <h3 className="font-['Poppins',Helvetica] font-medium text-[#b2b3cf] text-[26px] tracking-[1.04px] mb-6">
          Subscribe to get our Newsletter
        </h3>

        <div className="flex items-center justify-center gap-5">
          <div className="relative">
            <Input
              className="w-[400px] h-[60px] rounded-[80px] border-[#83839a] bg-transparent font-['Poppins',Helvetica] text-xl text-[#82839a] pl-7"
              placeholder="Your Email"
            />
          </div>

          <Button className="w-[179px] h-[60px] rounded-[60px] [background:linear-gradient(157deg,rgba(84,90,231,1)_0%,rgba(57,63,207,1)_100%)] font-['Poppins',Helvetica] font-medium text-white text-[22px] relative">
            <div className="absolute w-[151px] h-[29px] bottom-0 left-3 bg-[#545ae7] rounded-[60px] blur-[27px] opacity-50" />
            <span className="relative z-10">Subscribe</span>
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex items-center justify-center mt-16 mb-6">
        {footerLinks.map((link, index) => (
          <React.Fragment key={link.id}>
            {index > 0 && (
              <Separator
                orientation="vertical"
                className="h-[17px] mx-5 bg-[#b2b3cf]/30"
              />
            )}
            <Link 
              to={link.to}
              className="font-['Poppins',Helvetica] font-normal text-[#b2b3cf] text-[22px] tracking-[0.88px]"
            >
              {link.text}
            </Link>
          </React.Fragment>
        ))}
      </div>

      {/* Copyright */}
      <div className="font-['Poppins',Helvetica] font-normal text-[#b2b3cf] text-[22px] tracking-[0.88px] mt-6">
        © 2021 Class Technologies Inc.
      </div>
    </footer>
  );
};

export default Footer;
