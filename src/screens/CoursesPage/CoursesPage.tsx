import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  instructor: string;
  description: string;
  image: string;
  bgColor: string;
  iconBgColor: string;
}

const CoursesPage: React.FC = () => {
  // All available categories for filtering
  const categories = ["All", "Arts", "Technology", "Skills", "Personal Development", "Sports", "Social"];
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Course data
  const coursesData: Course[] = [
    {
      id: "sketching",
      title: "Sketching",
      category: "Arts",
      level: "Beginner",
      duration: "12 weeks",
      instructor: "Prof. Maya Patel",
      description: "Develop your artistic skills through this hands-on sketching course. Learn various techniques from basic line drawing to advanced shading.",
      image: "/courses/sketching.jpeg",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "personality-development",
      title: "Personality Development and People Management",
      category: "Personal Development",
      level: "Intermediate",
      duration: "8 weeks",
      instructor: "Dr. Ravi Kumar",
      description: "Build confidence, improve communication, and develop leadership skills that will help you excel in both personal and professional spheres.",
      image: "/courses/personalitydevelopment.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "work-life-balance",
      title: "Work Life Balance",
      category: "Personal Development",
      level: "All Levels",
      duration: "6 weeks",
      instructor: "Dr. Amita Shah",
      description: "Discover strategies to harmonize professional responsibilities with personal well-being and maintain mental health.",
      image: "/courses/worklifebalance.jpeg",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "first-aid-self-defence",
      title: "First Aid and Self Defence",
      category: "Skills",
      level: "Beginner",
      duration: "10 weeks",
      instructor: "Prof. Sanjay Verma",
      description: "Learn essential life-saving techniques and self-protection methods for emergency situations.",
      image: "/courses/selfdefense.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "fire-safety",
      title: "Fire Safety and Electronic Security",
      category: "Skills",
      level: "Beginner",
      duration: "8 weeks",
      instructor: "Dr. Vijay Singh",
      description: "Understand fire prevention, detection, and suppression techniques alongside modern electronic security systems.",
      image: "/courses/firesaftey.jpeg",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "sports-technology",
      title: "Sports Technology",
      category: "Technology",
      level: "Intermediate",
      duration: "12 weeks",
      instructor: "Prof. Nitin Mehta",
      description: "Explore cutting-edge technologies revolutionizing sports performance, analysis, and training methods.",
      image: "/courses/sportsTechnology.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "athletics",
      title: "Athletics",
      category: "Sports",
      level: "All Levels",
      duration: "16 weeks",
      instructor: "Coach Rahul Dravid",
      description: "Develop fundamental athletic skills through comprehensive training in various track and field disciplines.",
      image: "/courses/athletics.jpeg",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "aerobics-fitness",
      title: "Aerobics and Fitness",
      category: "Sports",
      level: "All Levels",
      duration: "12 weeks",
      instructor: "Ms. Priya Sharma",
      description: "Enhance cardiovascular health, strength, and flexibility through dynamic aerobic exercises and fitness routines.",
      image: "/courses/aerobics.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "photography",
      title: "Fundamentals of Photography",
      category: "Arts",
      level: "Beginner",
      duration: "10 weeks",
      instructor: "Mr. Anil Kapoor",
      description: "Master the technical and creative aspects of photography from camera settings to composition principles.",
      image: "/courses/photography.jpeg",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "cinematography",
      title: "Cinematography",
      category: "Arts",
      level: "Intermediate",
      duration: "14 weeks",
      instructor: "Mr. Vikram Bhatt",
      description: "Discover the art of visual storytelling through motion pictures, lighting, composition, and camera movement.",
      image: "/courses/cinematography.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "music-appreciation",
      title: "Music Appreciation and Composition",
      category: "Arts",
      level: "All Levels",
      duration: "12 weeks",
      instructor: "Dr. Lata Mangeshkar",
      description: "Develop a deeper understanding of musical elements, genres, and history while learning fundamental composition techniques.",
      image: "/courses/music-appreciation.jpeg",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "garden-design",
      title: "Garden Design and Maintenance",
      category: "Skills",
      level: "Beginner",
      duration: "8 weeks",
      instructor: "Prof. Meena Iyer",
      description: "Learn principles of landscape design and plant care techniques to create and maintain beautiful garden spaces.",
      image: "/courses/garden-design.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "social-media",
      title: "Managing Social Media",
      category: "Technology",
      level: "Intermediate",
      duration: "6 weeks",
      instructor: "Ms. Rohini Sharma",
      description: "Master strategies for effective social media management across platforms for building meaningful online presence.",
      image: "/courses/social-media.jpeg",
      bgColor: "bg-[#f5e4da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "server-network",
      title: "Server and Network Maintenance",
      category: "Technology",
      level: "Advanced",
      duration: "10 weeks",
      instructor: "Dr. Rajesh Kumar",
      description: "Gain practical experience in managing server infrastructure and network systems with troubleshooting techniques.",
      image: "/courses/server-network.jpg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "electrical-safety",
      title: "Electrical Safety",
      category: "Skills",
      level: "Beginner",
      duration: "8 weeks",
      instructor: "Prof. Ajay Sharma",
      description: "Learn crucial principles and practices of electrical safety in various environments and emergency responses.",
      image: "/courses/electrical-safety.jpg",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "mentoring-school-children",
      title: "Mentoring of School Children",
      category: "Social",
      level: "All Levels",
      duration: "12 weeks",
      instructor: "Dr. Sunita Rao",
      description: "Develop effective mentoring skills to positively impact young students' academic and personal growth.",
      image: "/courses/mentoring-school-children.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
    {
      id: "social-club",
      title: "Social Club Activities",
      category: "Social",
      level: "All Levels",
      duration: "Ongoing",
      instructor: "Prof. Anand Verma",
      description: "Engage in community-building events that develop organizational, interpersonal, and leadership skills.",
      image: "/courses/social-club.jpeg",
      bgColor: "bg-[#f5e5da]",
      iconBgColor: "bg-[#3364e1]",
    },
    {
      id: "cultural-club",
      title: "Cultural Club Activities",
      category: "Social",
      level: "All Levels",
      duration: "Ongoing",
      instructor: "Dr. Meera Krishnan",
      description: "Explore diverse artistic expressions, traditions, and cultural practices through interactive workshops.",
      image: "/courses/cultural-club.jpeg",
      bgColor: "bg-[#d4eaff]",
      iconBgColor: "bg-[#f48c06]",
    },
  ];
  
  // Filter courses based on search term and category
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f7ff] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-['Poppins',Helvetica] font-bold text-[#2f327d] text-4xl md:text-5xl mb-6"
            >
              Explore Our <span className="text-[#f48c06]">Liberal Learning Courses</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Nunito_Sans',Helvetica] font-normal text-lg md:text-xl text-[#696983] mb-12"
            >
              Discover a wide range of interdisciplinary courses designed to broaden your horizons, 
              develop critical thinking skills, and prepare you for a complex, changing world.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-2/3">
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 px-6 text-lg rounded-full border-2 border-[#e0e0e0] focus:border-[#3465e1]"
                />
              </div>
              <div className="w-full md:w-1/3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-12 px-6 text-lg rounded-full border-2 border-[#e0e0e0] focus:border-[#3465e1]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 text-base cursor-pointer rounded-full ${
                    selectedCategory === category 
                      ? "bg-[#3465e1] text-white" 
                      : "bg-white text-[#696983] border-[#e0e0e0]"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Grid Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#2f327d]">
              {filteredCourses.length} {filteredCourses.length === 1 ? "Course" : "Courses"} Found
            </h2>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 % 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/courses/${course.id}`}>
                    <Card className={`${course.bgColor} h-full border-none shadow-lg overflow-hidden`}>
                      <CardContent className="p-0">
                        <div className="h-[200px] relative overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute top-4 left-4 ${course.iconBgColor} text-white px-3 py-1 rounded-full text-sm`}>
                            {course.category}
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <Badge variant="outline" className="border-[#696983] text-[#696983]">
                              {course.level}
                            </Badge>
                            <span className="text-sm text-[#696983]">{course.duration}</span>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-[#696983] text-sm mb-4">{course.description}</p>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-sm text-[#696983]">
                              Instructor: {course.instructor}
                            </div>
                            <Button 
                              className={`${course.iconBgColor} text-white hover:opacity-90`}
                              size="sm"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium text-[#696983] mb-4">No courses found matching your criteria</h3>
              <p className="text-lg text-[#696983] mb-6">Try adjusting your search terms or filters</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-[#3465e1] text-white hover:bg-[#2854c8]"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Registration CTA Section */}
      <section className="py-16 bg-[#f5f7ff] mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#3465e1] text-white rounded-2xl p-10 relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20 -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -mb-16 -ml-16"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Knowledge?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Registration for the next semester's Liberal Learning Courses is now open. 
                Secure your spot and begin your journey toward a more well-rounded education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-[#3465e1] hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full"
                >
                  Register Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-[#3465e1] hover:text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-full"
                >
                  Download Course Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
