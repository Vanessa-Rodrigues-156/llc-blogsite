import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // SDG data for mapping
  const sdgItems = [
    {
      id: 4,
      title: "Quality Education",
      description:
        "Providing inclusive and accessible liberal education alongside engineering disciplines.",
    },
    {
      id: 8,
      title: "Decent Work & Economic Growth",
      description:
        "Enhancing students' entrepreneurial, ethical, and leadership skills for career growth.",
    },
    {
      id: 11,
      title: "Sustainable Cities & Communities",
      description:
        "Educating students on sustainability, environmental issues, and global citizenship.",
    },
    {
      id: 17,
      title: "Partnerships for the Goals",
      description:
        "Connecting students with experts, policymakers, and NGOs for interdisciplinary learning.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <div className="relative mb-12">
            <div className="w-[73px] h-[73px] rounded-full bg-[#f4b667] absolute -left-4 -top-4" />
            <h2 className="text-4xl leading-[57.6px] pl-9 font-poppins">
              <span className="font-medium text-[#2f327d]">
                Sustainable development Goals,
              </span>
              <span className="font-medium text-[#f48c06]">
                {" "}
                satiesfied with your choice of Liberal Learning Course
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="text-2xl font-poppins space-y-4">
              {sdgItems.map((item) => (
                <p key={item.id}>
                  SDG {item.id}: {item.title} – {item.description}
                </p>
              ))}
            </div>

            <Button
              variant="link"
              className="mt-8 text-[#696983] text-[22px] leading-[39.6px] font-poppins p-0 h-auto underline"
            >
              Learn more
            </Button>

            <div className="w-[30px] h-[30px] rounded-full bg-[#f4b667] absolute top-[73px] right-10" />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 relative">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute w-[231px] h-[231px] bottom-0 right-0 bg-[#f3ac50] rounded-[20px]" />
            <div className="absolute w-[138px] h-[138px] top-0 left-0 bg-[#23bdee] rounded-[20px]" />

            {/* Main image with play button */}
            <Card className="relative mt-5 ml-5 overflow-hidden border-0">
              <CardContent className="p-0">
                <div className="w-full h-[577px] bg-[url(/confident-teacher-explaining-lesson-pupils-1.png)] bg-cover bg-center relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[78px] h-[86px] bg-white rounded-[38.77px/42.88px] shadow-[2px_20px_60px_#3d9bb81a] flex items-center justify-center">
                    <img
                      className="w-[22px] h-[29px]"
                      alt="Play button"
                      src="/polygon-2.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
