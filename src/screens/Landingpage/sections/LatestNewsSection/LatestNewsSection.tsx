import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const LatestNewsSection = (): JSX.Element => {
  // Featured news data
  const featuredNews = {
    image: "/image-14.png",
    category: "NEWS",
    title:
      "NEP 2020 has helped in making Engineering courses inclusive and mordern.",
    excerpt:
      "The National Education Policy (NEP) 2020 has completed three years since its inception...",
  };

  // Secondary news items data
  const newsItems = [
    {
      image: "/rectangle-33.png",
      category: "PRESS RELEASE",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      excerpt: "Class Technologies Inc., the company that created Class,...",
    },
    {
      image: "/rectangle-34.png",
      category: "NEWS",
      title:
        "Zoom's earliest investors are betting millions on a better Zoom for schools",
      excerpt:
        "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      image: "/rectangle-37.png",
      category: "NEWS",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      excerpt:
        "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];

  return (
    <section className="w-full max-w-[1561px] mx-auto py-16">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-['Nunito_Sans',Helvetica] font-bold text-[#2f327d] text-4xl tracking-[0] leading-[64.8px]">
          Lastest News and Resources
        </h2>
        <p className="font-['Nunito_Sans',Helvetica] font-normal text-[#696983] text-2xl text-center tracking-[0] leading-[43.2px] mt-5">
          Check out the recent news on Liberal Learning Courses!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Featured news card */}
        <div className="w-full lg:w-[615px]">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <img
                className="w-full h-[350px] object-cover mb-10"
                alt="Featured news image"
                src={featuredNews.image}
              />
              <Badge className="bg-[#f4c467] text-[#252641] hover:bg-[#f4c467] hover:text-[#252641] rounded-[80px] px-8 py-2 font-['Poppins',Helvetica] font-medium text-xl">
                {featuredNews.category}
              </Badge>
              <h3 className="font-['Poppins',Helvetica] font-medium text-[#252641] text-[26px] tracking-[0] leading-[46.8px] mt-5">
                {featuredNews.title}
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 mt-5">
                {featuredNews.excerpt}
              </p>
              <a
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 underline mt-5 inline-block"
              >
                Read more
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Secondary news items */}
        <div className="w-full lg:w-[801px] flex flex-col gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="relative w-full md:w-[280px] h-[200px] rounded-[20px] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center rounded-[20px]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="w-full h-full bg-[#171b41] rounded-[20px] opacity-10" />
                    </div>
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#f4c467] text-[#252641] hover:bg-[#f4c467] hover:text-[#252641] rounded-[80px] px-4 py-1 font-['Poppins',Helvetica] font-normal text-lg">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col md:w-[477px]">
                    <h3 className="font-['Poppins',Helvetica] font-medium text-[#252641] text-[22px] tracking-[0] leading-[39.6px]">
                      {item.title}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 mt-5">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
