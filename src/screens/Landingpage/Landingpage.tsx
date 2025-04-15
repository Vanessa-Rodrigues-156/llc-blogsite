import { useEffect } from "react";
import { motion } from "framer-motion";
import { AboutLiberalLearningSection } from "./sections/AboutLiberalLearningSection";
import { CoursesSection } from "./sections/CoursesSection/CoursesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LatestNewsSection } from "./sections/LatestNewsSection";
import { MainContentSection } from "./sections/MainContentSection";

export const Landingpage = (): JSX.Element => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white flex flex-col items-center w-full"
    >
      <div className="bg-white w-full max-w-[1920px] relative">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CoursesSection />
        </motion.div>
        <div className="animate-on-scroll">
          <AboutLiberalLearningSection />
        </div>
        <div className="animate-on-scroll">
          <MainContentSection />
        </div>
        <div className="animate-on-scroll">
          <LatestNewsSection />
        </div>
        <FooterSection />
      </div>
    </motion.div>
  );
};