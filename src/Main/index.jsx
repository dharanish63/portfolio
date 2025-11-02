import React from "react";
import { Box } from "@mui/material";
import Navigationbar from "./Pages/Components/Navigationbar";
// import HeroSection from "./Pages/Components/HeroSection";
import ProjectsSection from "./Pages/Components/Project";
import SkillsSection from "./Pages/Components/Skill";
import ContactSection from "./Pages/Components/Contact";
import AboutSection from "./Pages/Components/About";
import Portfolio from "./Pages/Components/Portfolio";

function MainIndex() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigationbar />

      {/* Home/Hero Section */}
      <Box id="home">
        <Portfolio />
      </Box>

      {/* Other Sections */}
      <Box id="about">
        <AboutSection />
      </Box>

      <Box id="projects">
        <ProjectsSection />
      </Box>

      <Box id="skills">
        <SkillsSection />
      </Box>

      <Box id="contact">
        <ContactSection />
      </Box>
    </Box>
  );
}

export default MainIndex;
