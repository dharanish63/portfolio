import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

const ProjectsSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[8],
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 250,
  background: "linear-gradient(45deg, #667eea, #764ba2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart functionality, user authentication, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Productivity application for managing daily tasks and projects with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Context API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and offline capability.",
      technologies: ["React", "API Integration", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A modern social media platform with real-time messaging, post sharing, likes, comments, and user profiles with image upload functionality.",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations, dark mode toggle, and optimized performance.",
      technologies: ["React", "Material-UI", "Framer Motion", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking application with workout plans, progress monitoring, calorie tracking, and social features for motivation.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <ProjectsSectionBox id="projects">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          mb={2}
        >
          My Projects
        </Typography>

        <Typography
          variant="h6"
          component="p"
          textAlign="center"
          color="text.secondary"
          maxWidth="800px"
          margin="0 auto"
          mb={6}
        >
          Here are some of my recent projects that showcase my skills and
          experience in web development
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard>
                <ImagePlaceholder>Project Image</ImagePlaceholder>

                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    fontWeight="bold"
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    lineHeight={1.6}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    gap={1}
                    mb={2}
                  >
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: "primary.light",
                          color: "white",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Stack
                    direction={isMobile ? "column" : "row"}
                    spacing={2}
                    width="100%"
                  >
                    <Button
                      variant="contained"
                      fullWidth={isMobile}
                      startIcon={<LaunchIcon />}
                      href={project.liveUrl}
                      sx={{
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        fontWeight: "bold",
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth={isMobile}
                      startIcon={<CodeIcon />}
                      href={project.githubUrl}
                      sx={{
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        fontWeight: "bold",
                      }}
                    >
                      Source Code
                    </Button>
                  </Stack>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSectionBox>
  );
};

export default ProjectsSection;
