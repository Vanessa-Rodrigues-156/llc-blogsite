import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export const CoursesSection = (): JSX.Element => {
  // State for carousel
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Course data with all the specified courses
  const courses = [
    {
      id: "sketching",
      title: "Sketching",
      description:
        "Sketching is about generating and communicating ideas. Improving your sketching skills is great addition to your workflow as a UX, UI  or product designer.  ",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/art-course.jpg",
      
    },
    {
      id: "personality-development",
      title: "Personality Development and People Management",
      description:
        "Personality development is an important aspect of human development.This course is used to remove public speaking as one of their biggest fears of a student.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/leadership-course.jpg",
    },
    {
      id: "work-life-balance",
      title: "Work Life Balance",
      description:
        "Establishing a balance at work and in our personal life can be challenging.This course helps in work-life balance and provides practical strategies for achieving harmony.",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/wellbeing-course.jpg",
    },
    {
      id: "first-aid-self-defence",
      title: "First Aid and Self Defence",
      description:
        "This course helps for temporary help given to a sick or injured person before professional medical help also helps in self-defence. ",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/first-aid-course.jpg",
    },
    {
      id: "fire-safety",
      title: "Fire Safety and Electronic Security",
      description:
        "Fire hazard prevention is an important life skill necessary for any human being.Course also deals with electronic safety equipment’s. ",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/safety-course.jpg",
    },
    {
      id: "sports-technology",
      title: "Sports Technology",
      description:
        "This course delves into the intersection of sports and technology, examining how advancements in technology have revolutionized.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/sports-tech-course.jpg",
    },
    {
      id: "athletics",
      title: "Athletics",
      description:
        "This course is introduced to create a sense of self discipline and importance of fitness in a person’s life.",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/athletics-course.jpg",
    },
    {
      id: "aerobics-fitness",
      title: "Aerobics and Fitness",
      description:
        "This course is designed to offer the students a wide variety of cardiovascular fitness activities in order to physical wellness.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/fitness-course.jpg",
    },
    {
      id: "photography",
      title: "Fundamentals of Photography",
      description:
        "This course is for students who want to have a first approach to the world of digital photography, starting with the basics of photographic. ",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/photography-course.jpg",
    },
    {
      id: "cinematography",
      title: "Cinematography",
      description:
        "This course explores the principles, techniques, and aesthetics of cinematography, focusing on the visual language of film.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/cinematography-course.jpg",
    },
    {
      id: "music-appreciation",
      title: "Music Appreciation and Composition",
      description:
        "Music appreciation and composition is a basic course aimed at the enhancement of the student's capacity to enjoy music,",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/music-course.jpg",
    },
    {
      id: "garden-design",
      title: "Garden Design and Maintenance",
      description:
        "This course offers knowledge of the basics of gardening, how to design a garden and how to care for different types of plants.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/gardening-course.jpg",
    },
    {
      id: "social-media",
      title: "Managing Social Media",
      description:
        "Master strategies for effective social media management across platforms. Learn content creation, community engagement, analytics, and campaign planning to build a meaningful online presence.",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/social-media-course.jpg",
    },
    {
      id: "server-network",
      title: "Server and Network Maintenance",
      description:
        "Gain practical experience in managing server infrastructure and network systems. This hands-on course covers troubleshooting and optimization techniques essential for IT operations.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/network-course.jpg",
    },
    {
      id: "electrical-safety",
      title: "Electrical Safety",
      description:
        "Learn crucial principles and practices of electrical safety in various environments. This course provides essential knowledge about hazard identification, prevention strategies, and emergency responses.",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/electrical-course.jpg",
    },
    {
      id: "mentoring-school-children",
      title: "Mentoring of School Children",
      description:
        "Fr CRCE students are regularly involved in mentoring school children through IIC or other social activities/clubs. ",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/mentoring-course.jpg",
    },
    {
      id: "social-club",
      title: "Social Club Activities",
      description:
        "Engage in community-building events and initiatives that develop organizational, interpersonal, and leadership skills. Learn to plan and execute social projects that create meaningful connections.",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
      buttonBgColor: "bg-[#3364e1]",
      titleColor: "text-[#0d104d]",
      image: "/courses/social-club-course.jpg",
    },
    {
      id: "cultural-club",
      title: "Cultural Club Activities",
      description:
        "Explore diverse artistic expressions, traditions, and cultural practices through interactive workshops and collaborative projects. Develop creativity and cross-cultural appreciation through hands-on experiences.",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
      buttonBgColor: "bg-[#f48c06]",
      titleColor: "text-[#faa332]",
      image: "/courses/cultural-course.jpg",
    },
  ];

  // Display 3 courses per page
  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Get current page courses
  const getCurrentPageCourses = () => {
    const start = currentPage * coursesPerPage;
    return courses.slice(start, start + coursesPerPage);
  };

  // Generate indicators
  const indicators = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <section id="courses" className="relative w-full max-w-8xl px-2 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-poppins text-4xl font-bold mb-4 text-center">
          <span className="text-[#2f327d]">Courses </span>
          <span className="text-[#f48c06]">we provide.</span>
        </h2>
        <p className="font-poppins text-2xl text-center leading-[43.2px] max-w-2xl">
          Student must verify the LLC course offered
          <br /> by the institute in a particular semester&nbsp;&nbsp;and the
          timing
          <br /> of the course before registration
        </p>
      </div>

      <div className="relative py-10 px-14 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex justify-center gap-6 flex-wrap md:flex-nowrap"
          >
            {getCurrentPageCourses().map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full max-w-[450px]"
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="absolute w-[100px] h-[100px] top-0 left-1/2 -translate-x-1/2 rounded-[50px] shadow-[0px_10px_40px_#363c880f] z-10 flex items-center justify-center"
                  style={{
                    backgroundColor: course.iconBgColor === "bg-[#f48c06]" ? "#f48c06" : "#3364e1",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20V10" />
                    <path d="m18 14-6-6-6 6" />
                    <path d="M8 4h8" />
                  </svg>
                </div>

                <Card
                  className={`mt-[57px] ${course.bgColor} rounded-[20px] shadow-[0px_10px_60px_#262c7514] border-none h-[430px]`}
                >
                  <CardContent className="pt-16 px-6 flex flex-col h-full text-center">
                    <h3
                      className={`font-poppins font-medium ${course.titleColor} text-[28px] text-center mb-8`}
                    >
                      {course.title}
                    </h3>
                    <p className="font-poppins text-xl text-black text-center flex-grow">
                      {course.description}
                    </p>
                    <div className="flex justify-center mt-auto mb-6">
                      <Button
                        className={`${course.buttonBgColor} text-white font-bold text-[22px] rounded-[51px] h-[51px] px-8 shadow-[0px_8.51px_20.43px_#3465e14c] font-['Nunito_Sans',Helvetica] hover:opacity-90 transition-opacity`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 h-[50px] w-[50px] bg-white/80 rounded-full hover:bg-white shadow-md z-10"
          aria-label="Previous course"
          onClick={prevPage}
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </Button>

        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 h-[50px] w-[50px] bg-white/80 rounded-full hover:bg-white shadow-md z-10"
          aria-label="Next course"
          onClick={nextPage}
        >
          <ChevronRightIcon className="h-7 w-7" />
        </Button>
      </div>

      {/* Page indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {indicators.map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === index ? "bg-[#f48c06] w-6" : "bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
