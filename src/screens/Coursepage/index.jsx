import React from "react";
import { Link } from "react-router-dom";

export default function CulinaryArtsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with logos */}
      <header className="w-full bg-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <img
            src="/placeholder.svg?height=120&width=150"
            alt="Institution's Innovation Council Logo"
            width={150}
            height={120}
            className="object-contain"
          />
          <div className="hidden md:block text-[#3465e1] font-bold max-w-[200px]">
            <div>INSTITUTION'S</div>
            <div>INNOVATION</div>
            <div>COUNCIL</div>
            <div className="text-xs text-[#000000]">(Ministry of HRD Initiative)</div>
            <div className="mt-2">IIC - FrCRCE</div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4">
          <img
            src="/placeholder.svg?height=100&width=120"
            alt="St. Francis Xavier Logo"
            width={120}
            height={100}
            className="object-contain"
          />
          <img
            src="/placeholder.svg?height=100&width=300"
            alt="Fr. Conceicao Rodrigues College of Engineering Logo"
            width={300}
            height={100}
            className="object-contain"
          />
          <img
            src="/placeholder.svg?height=100&width=120"
            alt="NAAC Accreditation Logo"
            width={120}
            height={100}
            className="object-contain"
          />
        </div>
      </header>

      {/* Main title */}
      <div className="w-full px-4 py-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#3465e1]">Culinary Arts: </span>
          <span className="text-[#49bbbd]">Foundations of Cooking</span>
        </h1>
      </div>

      {/* Main banner image */}
      <div className="w-full relative">
        <img
          src="/placeholder.svg?height=400&width=960"
          alt="Students in cooking class"
          width={960}
          height={400}
          className="w-full object-cover"
        />
      </div>

      {/* Course outcomes section */}
      <section className="w-full px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Course Outcomes:</h2>
          <Link to="#" className="text-[#49bbbd]">
            See all
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {/* Card 1 */}
            <div className="min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Introduction to Culinary Arts"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">
                  Introduction to Culinary Arts
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm">
                  • TOTC's school management software helps traditional and online schools manage scheduling.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Cooking Methods: Dry Heat"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">
                  Cooking Methods: Dry Heat
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm">
                  • TOTC's school management software helps traditional and online schools manage scheduling.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Cooking Methods: Moist Heat"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">
                  Cooking Methods: Moist Heat
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm">
                  • TOTC's school management software helps traditional and online schools manage scheduling.
                </p>
              </div>
            </div>
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

      {/* Footer */}
      <footer className="mt-auto bg-[#171b41] text-white py-8">
        <div className="container mx-auto px-4">
          {/* LLC Logo and text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="relative h-16 w-16">
              <img 
                src="/placeholder.svg?height=64&width=64" 
                alt="LLC Logo" 
                className="absolute top-0 left-0 w-full h-full object-contain" 
              />
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold">Liberal</div>
              <div className="font-bold">Learning</div>
              <div className="font-bold">Courses</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center mb-8">
            <h3 className="text-xl mb-4">Subscribe to get our Newsletter</h3>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 rounded-l-full bg-[#252641] border border-[#626381] text-white"
              />
              <button className="bg-[#545ae8] px-6 py-2 rounded-r-full">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-4 mb-4">
            <Link to="#" className="hover:underline">
              Careers
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-[#b2b3cf]">© 2021 Class Technologies Inc.</div>
        </div>
      </footer>
    </div>
  )
}
