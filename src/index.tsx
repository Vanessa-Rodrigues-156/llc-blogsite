import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landingpage } from "./screens/Landingpage/Landingpage";
import AboutPage from "./screens/AboutPage/AboutPage";
import CoursesPage from "./screens/CoursesPage/CoursesPage";
import CoursePage from "./screens/Coursepage/index";
import UploadVideo from "./screens/UploadVideo/index";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="*" element={<Landingpage />} />
        {/* Fallback route to handle any unmatched paths */}
        <Route path="/upload" element={<UploadVideo />} />
        {/* Route for uploading videos */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);