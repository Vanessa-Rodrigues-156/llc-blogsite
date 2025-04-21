import React from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const AboutPage: React.FC = () => {
  // About page content
  const teamMembers = [
    {
      name: "Dr.Surendra Singh Rathod",
      position: "Principal",
      image: "/Faculty/male.png",
      bio: "Dr.Surendra Singh Rathod has distinguished academic with a Ph.D. in Semiconductor Device and VLSI Technology from IIT Roorkee. He is an expert in VLSI,and neuromorphic engineering with over 25 years of academic and research experience.",
    },
    {
      name: "Dr. Deepak Vishnu Bhoir",
      position: "Professor and Dean, Academics",
      image: "/Faculty/male.png",
      bio: "Dr. Deepak Vishnu Bhoir is a seasoned academician with 32 years of teaching experience, currently serving as Professor and Dean Academics, specializing in Biomedical Instrumentation, VLSI, and MEMS Technology.",
    },
    {
      name: "Dr. Sapna Prabhu",
      position: "Professor, Head of Department ",
      image: "/Faculty/female.png",
      bio: "Dr. Sapna Prabhu: Professor and Head of Electronics & Computer Science at Fr. CRCE, with expertise in embedded systems, computer architecture, and 20+ research publications.",
    },
    {
      name: "Dr. Sujata P. Deshmukh",
      position: "Professor, Head of Department",
      image: "/Faculty/female.png",
      bio: "Dr. Sujata Deshmukh: Professor and HOD of Computer Engineering at Fr. CRCE, with a strong background in AI, cloud computing, and e-commerce, and over 25 publications.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section with parallax effect */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url(/about-hero.jpg)] bg-cover bg-center opacity-20"></div>
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#f3f4ff] via-transparent to-white"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-['Poppins',Helvetica] font-bold text-[#0a4ed7] text-5xl md:text-6xl mb-6">
              About Liberal Learning
            </h1>
            
            <p className="font-['Nunito_Sans',Helvetica] font-normal text-xl md:text-2xl leading-relaxed mb-8 text-[#252641]">
              Our Liberal Learning Courses are designed to foster critical thinking, enhance communication skills, 
              and develop global awareness through interdisciplinary education.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src="/courses/student.jpg" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#f48c06] rounded-full z-0"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-[#2f327d]">Our Mission &</span>
                <span className="text-[#f48c06]"> Vision</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium text-[#3465e1] mb-2">Mission</h3>
                  <p className="text-lg text-[#696983]">
                    To provide a comprehensive liberal learning environment that empowers students 
                    to explore diverse fields of knowledge, develop critical thinking skills, 
                    and become well-rounded professionals ready to tackle complex real-world challenges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium text-[#3465e1] mb-2">Vision</h3>
                  <p className="text-lg text-[#696983]">
                    To be the leading provider of interdisciplinary education that bridges technical expertise 
                    with humanistic perspectives, creating future leaders who combine analytical abilities 
                    with ethical awareness and creative problem-solving.
                  </p>
                </div>
                
                <Button 
                  className="mt-6 px-8 py-4 bg-[#f48c06] rounded-full font-semibold text-white text-lg hover:bg-[#e07b05] transition-colors"
                >
                  Learn More About Our Approach
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-[#f5f7ff]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#2f327d]">Our Core </span>
              <span className="text-[#f48c06]">Values</span>
            </h2>
            <p className="text-xl text-[#696983]">
              These foundational principles guide our educational philosophy and curriculum development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Interdisciplinary Learning",
                description: "Connecting diverse fields of knowledge to foster holistic understanding",
                icon: "🔄",
                color: "bg-[#d4eaff]",
                iconBg: "bg-[#3364e1]"
              },
              {
                title: "Critical Thinking",
                description: "Developing analytical skills to evaluate information and solve complex problems",
                icon: "💡",
                color: "bg-[#f5e4da]",
                iconBg: "bg-[#f48c06]"
              },
              {
                title: "Ethical Awareness",
                description: "Understanding moral implications of decisions in professional and social contexts",
                icon: "⚖️",
                color: "bg-[#d4eaff]",
                iconBg: "bg-[#3364e1]"
              },
              {
                title: "Global Perspective",
                description: "Appreciating diversity and cultivating awareness of global interconnectedness",
                icon: "🌍",
                color: "bg-[#f5e4da]",
                iconBg: "bg-[#f48c06]"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`${value.color} border-none shadow-lg h-full`}>
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className={`${value.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                      <span className="text-white text-3xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-[#696983]">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#2f327d]">Meet Our </span>
              <span className="text-[#f48c06]">Team</span>
            </h2>
            <p className="text-xl text-[#696983]">
              Dedicated educators bringing diverse expertise to create transformative learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="h-[280px] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#2f327d]">{member.name}</h3>
                      <p className="text-[#f48c06] mb-3">{member.position}</p>
                      <p className="text-[#696983] text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#3465e1] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to begin your Liberal Learning journey?</h2>
            <p className="text-xl mb-8">
              Explore our diverse course offerings and discover how interdisciplinary 
              education can transform your academic and professional path.
            </p>
            <Button 
              className="px-10 py-5 bg-white text-[#3465e1] rounded-full font-semibold text-xl hover:bg-opacity-90 transition-colors"
            onClick={() => window.location.href = "/courses"}
            >
              Browse Our Courses
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
