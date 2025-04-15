import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/ui/button";

export default function CoursePage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // baad me add api here to get data from the api or orm 
    const coursesData = [
      {
        id: "sketching",
        title: "Sketching",
        subtitle: "Visual Arts & Expression",
        description: "Develop your artistic skills through this hands-on sketching course. Learn various techniques from basic line drawing to advanced shading, helping you express creativity and enhance visual communication skills.",
        instructor: "Prof. Maya Patel",
        duration: "12 weeks",
        level: "Beginner",
        category: "Arts",
        image: "/courses/art-course.jpg",
        outcomes: [
          {
            title: "Basic Drawing Techniques",
            description: "Master foundational skills including line work, shading, and perspective drawing.",
            image: "/courses/art-course.jpg"
          },
          {
            title: "Creative Expression",
            description: "Develop your unique artistic voice through guided exercises and personal projects.",
            image: "/group-students-with-teacher-laboratory-1.png"
          },
          {
            title: "Portfolio Development",
            description: "Create a collection of work that demonstrates your skills and artistic growth.",
            image: "/group-young-people-library-1.png"
          }
        ]
      },
      {
        id: "personality-development",
        title: "Personality Development and People Management",
        subtitle: "Professional Growth & Leadership",
        description: "Build confidence, improve communication, and develop leadership skills that will help you excel in both personal and professional spheres. Learn effective techniques to manage teams and foster positive relationships.",
        instructor: "Dr. Ravi Kumar",
        duration: "8 weeks",
        level: "Intermediate",
        category: "Personal Development",
        image: "/courses/leadership-course.jpg",
        outcomes: [
          {
            title: "Effective Communication",
            description: "Develop clear and persuasive communication skills for various professional contexts.",
            image: "/courses/leadership-course.jpg"
          },
          {
            title: "Leadership Fundamentals",
            description: "Learn key principles to inspire and guide teams toward shared goals.",
            image: "/confident-teacher-explaining-lesson-pupils-1.png"
          },
          {
            title: "Conflict Resolution",
            description: "Master techniques to address and resolve interpersonal conflicts constructively.",
            image: "/school-hallway-class-students-1.png"
          }
        ]
      },
      {
        id: "work-life-balance",
        title: "Work Life Balance",
        subtitle: "Personal Wellness & Productivity",
        description: "Discover strategies to harmonize professional responsibilities with personal well-being. This course provides practical tools to enhance productivity while maintaining mental health and enjoying fulfilling relationships.",
        instructor: "Dr. Amita Shah",
        duration: "6 weeks",
        level: "All Levels",
        category: "Personal Development",
        image: "/courses/wellbeing-course.jpg",
        outcomes: [
          {
            title: "Stress Management",
            description: "Learn techniques to identify and manage sources of stress in work and personal life.",
            image: "/courses/wellbeing-course.jpg"
          },
          {
            title: "Time Management",
            description: "Master strategies for efficient time allocation and priority setting.",
            image: "/group-students-with-teacher-laboratory-1.png"
          },
          {
            title: "Mindfulness Practice",
            description: "Develop daily habits that enhance mental clarity and emotional balance.",
            image: "/confident-teacher-explaining-lesson-pupils-1.png"
          }
        ]
      },
      {
        id: "first-aid-self-defence",
        title: "First Aid and Self Defence",
        subtitle: "Safety & Protection Skills",
        description: "Learn essential life-saving techniques and self-protection methods. This practical course equips you with the knowledge to respond effectively in emergencies and protect yourself in potentially dangerous situations.",
        instructor: "Prof. Sanjay Verma",
        duration: "10 weeks",
        level: "Beginner",
        category: "Skills",
        image: "/courses/first-aid-course.jpg",
        outcomes: [
          {
            title: "Emergency Response",
            description: "Learn to assess situations and provide immediate assistance in various emergencies.",
            image: "/courses/first-aid-course.jpg"
          },
          {
            title: "Basic Self-Protection",
            description: "Master fundamental techniques to defend yourself in threatening situations.",
            image: "/group-students-with-teacher-laboratory-1.png"
          },
          {
            title: "Safety Awareness",
            description: "Develop heightened awareness of potential dangers and preventive approaches.",
            image: "/confident-teacher-explaining-lesson-pupils-1.png"
          }
        ]
      },
      {
        id: "sports-technology",
        title: "Sports Technology",
        subtitle: "Performance Analysis & Enhancement",
        description: "Explore the cutting-edge technologies revolutionizing sports performance, analysis, and training. Learn how data analytics, wearable tech, and innovative equipment are shaping the future of athletics.",
        instructor: "Prof. Nitin Mehta",
        duration: "12 weeks",
        level: "Intermediate",
        category: "Technology",
        image: "/courses/sports-tech-course.jpg",
        outcomes: [
          {
            title: "Performance Metrics",
            description: "Learn to collect, analyze and interpret athletic performance data.",
            image: "/courses/sports-tech-course.jpg"
          },
          {
            title: "Wearable Technology",
            description: "Understand how modern wearable devices can enhance training and performance.",
            image: "/group-students-with-teacher-laboratory-1.png"
          },
          {
            title: "Digital Coaching Tools",
            description: "Master various digital platforms used in modern sports training and analysis.",
            image: "/confident-teacher-explaining-lesson-pupils-1.png"
          }
        ]
      }
      // Additional courses would be added here
    ];
    
    // Find the selected course or use default if not found
    const selectedCourse = coursesData.find(c => c.id === courseId) || {
      id: courseId || "default-course",
      title: "Liberal Learning Course",
      subtitle: "Interdisciplinary Education",
      description: "An enriching educational experience designed to broaden your perspective and develop critical thinking skills.",
      instructor: "Faculty Expert",
      duration: "12 weeks",
      level: "All Levels",
      category: "Liberal Arts",
      image: "/confident-teacher-explaining-lesson-pupils-1.png",
      outcomes: [
        {
          title: "Critical Thinking",
          description: "Develop analytical skills to evaluate complex information and formulate reasoned arguments.",
          image: "/confident-teacher-explaining-lesson-pupils-1.png"
        },
        {
          title: "Interdisciplinary Approach",
          description: "Learn to connect concepts across different fields of knowledge.",
          image: "/group-students-with-teacher-laboratory-1.png"
        },
        {
          title: "Practical Application",
          description: "Apply theoretical knowledge to real-world scenarios and challenges.",
          image: "/group-young-people-library-1.png"
        }
      ]
    };
    
    // Simulate network delay
    setTimeout(() => {
      setCourse(selectedCourse);
      setLoading(false);
    }, 300);
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3465e1]"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <header >
        <img src="/header.png" className="w-full mt-16"></img>
      </header>

      <div className="w-full px-4 py-2 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#3465e1]">{course.title}: </span>
          <span className="text-[#49bbbd]">{course.subtitle}</span>
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.level}</span>
          <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.duration}</span>
          <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.category}</span>
        </div>
      </div>

      {/* Main banner image */}
      <div className="w-full max-w-6xl mx-auto relative my-6">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-bold text-[#3465e1]">Instructor: {course.instructor}</h2>
          <p className="text-[#696983]">{course.description}</p>
        </div>
      </div>

      {/* Course outcomes section */}
      <section className="w-full px-4 py-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Course Outcomes:</h2>
          <Link to="/courses" className="text-[#49bbbd]">
            Back to all courses
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {course.outcomes.map((outcome, index) => (
              <div key={index} className="min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <img
                    src={outcome.image}
                    alt={outcome.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">
                    {outcome.title}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-[#696983]">
                    • {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#3465e1]">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#3465e1]">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="w-full px-4 py-8 max-w-6xl mx-auto mb-16">
        <div className="bg-[#f5f7ff] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to enroll in this course?</h2>
          <p className="text-[#696983] mb-6 max-w-2xl mx-auto">
            Registration for this course is now open. Secure your spot and begin your journey toward expanding your knowledge and skills.
          </p>
          <Button 
            className="bg-[#3465e1] text-white hover:bg-[#2854c8] px-8 py-3 text-lg font-medium rounded-full"
          >
            Register For This Course
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
