import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landingpage } from "./screens/Landingpage/Landingpage";
import AboutPage from "./screens/AboutPage/AboutPage";
import CoursesPage from "./screens/CoursesPage/CoursesPage";
import CoursePage from "./screens/Coursepage/index";
import "./styles/global.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);