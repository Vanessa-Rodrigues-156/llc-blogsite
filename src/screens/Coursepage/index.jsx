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
        description: "Sketching is about generating and communicating ideas. This course is intended for student who wishes to get better at sketching and recording information graphically. This course can teach student the fundamentals to developing sketching skills. This course focuses on using traditional materials, pencil and paper. This course is also a great starting point for other areas of visual thinking, like graphic facilitation or sketch noting. Students can self-practice and learn to sketch user interfaces, user flows, UI animations and storyboards. Improving your sketching skills is going to be a great addition to your workflow as a UX, UI or product designer.",
        instructor: "Prof. M. V. Rao",
        instructorBio: "With over 15 years of experience teaching visual arts, Prof. Rao has helped hundreds of students discover their artistic potential. His work has been featured in national galleries and he holds a Master's degree in Fine Arts from the National Institute of Design.",
        instructorImage: "/Faculty/female.png",
        duration: "12 weeks",
        level: "Beginner",
        category: "Arts",
        image: "/courses/sketching.jpeg",
        mediaGallery: [
          { type: "image", src: "/rectangle-33.png", caption: "Students working on gesture drawing techniques" },
          { type: "image", src: "/rectangle-21.png", caption: "Portfolio review session" },
          { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Introduction to perspective drawing" }
        ],
        syllabus: [
          {
            week: "Week 1-2",
            topic: "Fundamentals of Drawing",
            content: "Introduction to materials, basic line work, geometric shapes, and proportion."
          },
          {
            week: "Week 3-4",
            topic: "Shading Techniques",
            content: "Value scales, hatching, cross-hatching, and creating volume through light and shadow."
          },
          {
            week: "Week 5-6",
            topic: "Perspective Drawing",
            content: "One-point, two-point perspective, atmospheric perspective, and creating depth."
          },
          {
            week: "Week 7-8",
            topic: "Figure Drawing",
            content: "Human proportions, gesture drawing, contour drawing of the human form."
          },
          {
            week: "Week 9-10",
            topic: "Still Life & Nature",
            content: "Composition techniques, texture rendering, botanical and object studies."
          },
          {
            week: "Week 11-12",
            topic: "Personal Project",
            content: "Developing and completing a final project showcasing acquired skills."
          }
        ],
        testimonials: [
          {
            name: "Rahul S.",
            comment: "This course transformed how I see the world around me. Prof. Patel's guidance helped me develop skills I never thought I had!",
            rating: 5
          },
          {
            name: "Priya M.",
            comment: "The structured approach to teaching sketching fundamentals gave me confidence to pursue art professionally.",
            rating: 5
          },
          {
            name: "Vikram J.",
            comment: "Worth every minute! The techniques I learned have enhanced my architectural drawings significantly.",
            rating: 4
          },
          {
            name: "Ananya D.",
            comment: "As a complete beginner, I found the course perfectly paced and incredibly supportive.",
            rating: 5
          },
          {
            name: "Karan T.",
            comment: "The feedback from Prof. Patel was invaluable for my growth as an artist.",
            rating: 4
          }
        ],
        outcomes: [
          {
            title: "Basic Drawing Techniques",
            description: "Master foundational skills including line work, shading, and perspective drawing.",
            image: "/rectangle-33.png"
          },
          {
            title: "Creative Expression",
            description: "Develop your unique artistic voice through guided exercises and personal projects.",
            image: "/rectangle-33.png"
          },
          {
            title: "Portfolio Development",
            description: "Create a collection of work that demonstrates your skills and artistic growth.",
            image: "/group-young-people-library-1.png"
          }
        ]
      },
    ];

    const selectedCourse = coursesData.find(c => c.id === courseId) || {
      id: courseId || "default-course",
      title: "Liberal Learning Course",
      subtitle: "Interdisciplinary Education",
      description: "An enriching educational experience designed to broaden your perspective and develop critical thinking skills.",
      instructor: "Ms. Jeenal",
      instructorBio: "Our faculty experts bring years of experience and deep knowledge in their respective fields. They are dedicated to providing students with comprehensive education and practical insights.",
      instructorImage: "/Faculty/female.png",
      duration: "12 weeks",
      level: "All Levels",
      category: "Liberal Arts",
      image: "/confident-teacher-explaining-lesson-pupils-1.png",
      mediaGallery: [
        { type: "image", src: "/confident-teacher-explaining-lesson-pupils-1.png", caption: "Interactive classroom discussions" },
        { type: "image", src: "/rectangle-33.png", caption: "Hands-on learning activities" },
        { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Introduction to critical thinking" }
      ],
      syllabus: [
        {
          week: "Week 1-2",
          topic: "Introduction to Liberal Arts",
          content: "Overview of interdisciplinary thinking and foundational concepts."
        },
        {
          week: "Week 3-4",
          topic: "Critical Analysis",
          content: "Developing analytical frameworks and evaluating complex information."
        },
        {
          week: "Week 5-6",
          topic: "Cultural Perspectives",
          content: "Exploring diverse viewpoints and cultural contexts."
        },
        {
          week: "Week 7-8",
          topic: "Applied Philosophy",
          content: "Ethical reasoning and practical applications of philosophical concepts."
        },
        {
          week: "Week 9-10",
          topic: "Integrative Approaches",
          content: "Connecting concepts across disciplines and fields of study."
        },
        {
          week: "Week 11-12",
          topic: "Capstone Project",
          content: "Applying interdisciplinary knowledge to a real-world challenge."
        }
      ],
      testimonials: [
        {
          name: "Anjali R.",
          comment: "This course broadened my perspective in ways I couldn't have imagined. Highly recommended!",
          rating: 5
        },
        {
          name: "Siddharth P.",
          comment: "The interdisciplinary approach prepared me well for addressing complex problems in my career.",
          rating: 4
        },
        {
          name: "Meera K.",
          comment: "An eye-opening educational experience that changed how I view learning itself.",
          rating: 5
        },
        {
          name: "Arjun S.",
          comment: "The faculty's expertise and teaching methods made difficult concepts accessible and engaging.",
          rating: 4
        },
        {
          name: "Neha D.",
          comment: "I use the critical thinking skills I learned in this course every single day.",
          rating: 5
        }
      ],
      outcomes: [
        {
          title: "Critical Thinking",
          description: "Develop analytical skills to evaluate complex information and formulate reasoned arguments.",
          image: "/confident-teacher-explaining-lesson-pupils-1.png"
        },
        {
          title: "Interdisciplinary Approach",
          description: "Learn to connect concepts across different fields of knowledge.",
          image: "/rectangle-33.png"
        },
        {
          title: "Practical Application",
          description: "Apply theoretical knowledge to real-world scenarios and challenges.",
          image: "/rectangle-33.png"
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
