import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landingpage } from "./screens/Landingpage/Landingpage";
import "./styles/global.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Landingpage />
  </StrictMode>,
);