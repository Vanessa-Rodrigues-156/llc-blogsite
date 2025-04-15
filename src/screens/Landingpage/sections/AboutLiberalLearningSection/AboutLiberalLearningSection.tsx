import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutLiberalLearningSection = (): JSX.Element => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          <span className="text-[#2f327d]">What is </span>
          <span className="text-[#f48c06]">Liberal Learning Course? </span>
        </h2>
        <p className="text-2xl text-[#696983] leading-[43.2px] tracking-[0.48px] font-normal font-['Poppins',Helvetica]">
          For effective implementation of UGC Regulations and NEP 2020 in its
          spirit, we have introduced several choice based Liberal Learning
          Courses (LLC) in the curriculum to make learning a joyful experience
          for students. We believe that this curriculum will raise the bar of
          academic standards with the active involvement and cooperation from
          students, academic and administrative units.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instructor Card */}
        <Card className="rounded-[20px] overflow-hidden p-0 border-0">
          <CardContent className="p-0 h-[400px] relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/rectangle-19.png)" }}
            >
              <div className="absolute inset-0 bg-[#171b4080] rounded-[20px] opacity-60 border border-solid border-black"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[32px] text-center mb-8">
                FOR INSTRUCTORS
              </h3>
              <Button className="w-[283px] h-20 rounded-[80px] border border-solid border-white bg-transparent hover:bg-white/10 font-['Poppins',Helvetica] font-medium text-white text-[22px]">
                Start a class today
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Student Card */}
        <Card className="rounded-[20px] overflow-hidden p-0 border-0">
          <CardContent className="p-0 h-[400px] relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-[20px]"
              style={{ backgroundImage: "url(/rectangle-21.png)" }}
            >
              <div className="absolute inset-0 bg-[#171b4073] rounded-[20px] opacity-60"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[32px] text-center mb-8">
                FOR STUDENTS
              </h3>
              <Button className="w-[283px] h-20 rounded-[80px] bg-[#23bdeee6] hover:bg-[#23bdee] font-['Poppins',Helvetica] font-medium text-white text-[22px]">
                Enter access code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
