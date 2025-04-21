import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/ui/button";

export default function CoursePage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  useEffect(() => {
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
            image: "/rectangle-33.png"
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

    setTimeout(() => {
      setCourse(selectedCourse);
      setLoading(false);
    }, 300);
  }, [courseId]);

  const nextSlide = () => {
    if (course?.mediaGallery) {
      setActiveSlide((prev) => (prev + 1) % course.mediaGallery.length);
    }
  };

  const prevSlide = () => {
    if (course?.mediaGallery) {
      setActiveSlide((prev) => (prev - 1 + course.mediaGallery.length) % course.mediaGallery.length);
    }
  };

  const getTestimonialPosition = (index) => {
    const positions = [
      'left-[10%] top-[20%] w-52 h-44 z-30',
      'right-[15%] top-[15%] w-48 h-40 z-20',
      'left-[15%] bottom-[15%] w-56 h-44 z-40',
      'right-[20%] bottom-[20%] w-44 h-40 z-10',
      'left-[40%] top-[35%] w-52 h-44 z-25',
    ];
    return positions[index % positions.length];
  };

  const getDecorativeBubbleStyle = (index) => {
    const sizes = ['h-16 w-16', 'h-20 w-20', 'h-12 w-12', 'h-24 w-24', 'h-14 w-14'];
    const positions = [
      'left-[5%] top-[10%]',
      'right-[8%] top-[30%]',
      'left-[20%] bottom-[10%]',
      'right-[25%] bottom-[15%]',
      'left-[60%] top-[20%]',
      'right-[40%] top-[60%]',
      'left-[70%] bottom-[25%]',
      'right-[70%] bottom-[45%]',
    ];
    return `
      ${positions[index % positions.length]} 
      ${sizes[index % sizes.length]} 
      absolute rounded-full z-${(index % 5) + 5}
    `;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3465e1]"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />
      <header>
        <img src="/header.png" className="w-full mt-16" alt="Header"></img>
      </header>

      <div className="w-full flex py-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#3465e1]">{course.title}: </span>
            <span className="text-[#49bbbd]">{course.subtitle}</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.level}</span>
            <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.duration}</span>
            <span className="text-[#696983] bg-gray-100 px-3 py-1 rounded-full text-sm">{course.category}</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-9xl lg:max-w-full mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[350px] object-cover"
            />
          </div>
          
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#3465e1] mb-4">Course Introduction</h2>
            <div className="prose max-w-none text-[#696983]">
              <p className="text-lg leading-relaxed">{course.description}</p>
              <p className="mt-4">
                This comprehensive course is designed to provide you with both theoretical knowledge and practical skills. 
                Whether you're just starting out or looking to enhance existing abilities, this course offers a structured 
                pathway to mastery with personalized guidance from industry experts.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#3465e1] mb-4">Course Syllabus</h2>
            <div className="space-y-4">
              {course.syllabus?.map((item, index) => (
                <div 
                  key={index}
                  className="border-l-4 border-[#49bbbd] pl-4 py-2"
                >
                  <h3 className="font-bold text-lg">{item.week}: {item.topic}</h3>
                  <p className="text-[#696983]">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#3465e1] mb-4">Course Media Gallery</h2>
            <div className="relative">
              <div ref={carouselRef} className="overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                  {course.mediaGallery?.map((item, index) => (
                    <div key={index} className="min-w-full w-full">
                      {item.type === 'image' ? (
                        <img 
                          src={item.src} 
                          alt={item.caption} 
                          className="w-full h-[400px] object-cover"
                        />
                      ) : (
                        <iframe
                          className="w-full h-[400px]"
                          src={item.src}
                          title={item.caption}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                      <div className="bg-[#3465e1]/80 text-white p-4">
                        <p>{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#3465e1]">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#3465e1]">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              
              <div className="flex justify-center mt-4 gap-2">
                {course.mediaGallery?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full ${activeSlide === index ? 'bg-[#3465e1]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <div className="relative h-[70vh] lg:max-h-[200vh] w-full">
          {course.testimonials?.map((testimonial, index) => {
                if (index < 5) {
                  return (
                    <div
                      key={index}
                      className={`absolute ${getTestimonialPosition(index)} bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 overflow-hidden
                        ${animationEnabled ? 'animate-float-' + ((index % 3) + 1) : ''}`}
                      style={{
                        transform: `rotate(${(index % 3) - 1}deg)`,
                      }}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                            ))}
                          </div>
                          <p className="text-sm italic text-[#696983] line-clamp-3">"{testimonial.comment}"</p>
                        </div>
                        <p className="text-[#3465e1] font-bold text-sm mt-2 self-end">— {testimonial.name}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              
              {[...Array(8)].map((_, index) => (
                <div
                  key={`decor-${index}`}
                  className={`${getDecorativeBubbleStyle(index)} 
                    bg-gradient-to-br ${index % 2 === 0 ? 'from-[#49bbbd]/30 to-[#3465e1]/30' : 'from-[#3465e1]/20 to-[#49bbbd]/20'}
                    ${animationEnabled ? 'animate-float-' + ((index % 3) + 1) : ''}`}
                />
              ))}
              </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#3465e1] mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {course.outcomes.map((outcome, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-40">
                    <img
                      src={outcome.image}
                      alt={outcome.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-3 text-white font-bold">
                      {outcome.title}
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-sm text-[#696983]">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
            <div className="relative h-48">
              <img 
                src={course.instructorImage || "/instructor-profile.jpg"} 
                alt={course.instructor}
                className="absolute top-0 left-0 w-full h-full object-cover"  
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Your Instructor</h3>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="text-lg font-bold text-[#3465e1] mb-2">{course.instructor}</h4>
              <p className="text-sm text-[#696983] mb-4">{course.instructorBio}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#696983]">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#696983]">Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#696983]">Category:</span>
                  <span className="font-medium">{course.category}</span>
                </div>
              </div>
              
              <Button 
                className="bg-[#3465e1] text-white hover:bg-[#2854c8] w-full mt-6 rounded-full"
              >
                Register For This Course
              </Button>
              
              <Link 
                to="/courses" 
                className="block text-center text-[#49bbbd] hover:underline text-sm mt-4"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
