import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import courseData from "../../data/coursesData.json";

export interface Course {
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
  subtitle?: string;
  instructorBio?: string;
  instructorImage?: string;
  mediaGallery?: {
    type: string;
    src: string;
    caption: string;
  }[];
  syllabus?: {
    week: string;
    topic: string;
    content: string;
  }[];
  testimonials?: {
    name: string;
    comment: string;
    rating: number;
  }[];
  outcomes?: {
    title: string;
    description: string;
    image: string;
  }[];
}

const CoursesPage: React.FC = () => {
  // All available categories for filtering
  const [categories, setCategories] = useState<string[]>(["All"]);
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Course data
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  
  // Load course data from JSON file
  useEffect(() => {
    // Extract and deduplicate categories
    const allCategories = ["All", ...Array.from(new Set(courseData.courses.map((course: Course) => course.category))) as string[]];
    setCategories(allCategories);
    setCoursesData(courseData.courses);
  }, []);
  
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
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-full"
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
