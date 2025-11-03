/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import DesignIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";

const AboutSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  textAlign: "center",
  padding: theme.spacing(3),
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[8],
  },
}));

const AboutSection = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern technologies like React, Vue, and Angular.",
    },
    {
      icon: <DesignIcon sx={{ fontSize: 40 }} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences with a focus on usability and aesthetic design principles.",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      title: "Responsive Design",
      description:
        "Developing websites that work seamlessly across all devices and screen sizes.",
    },
  ];

  return (
    <AboutSectionBox id="about">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          mb={2}
        >
          About Me
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
          Passionate frontend developer with expertise in creating modern,
          responsive web applications
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Hi, I'm Dharanish
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a dedicated Frontend Developer with a passion for creating
              beautiful, functional, and user-friendly web applications. I
              specialize in turning complex problems into simple, elegant
              solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              With expertise in modern JavaScript frameworks and a keen eye for
              design, I build web applications that not only look great but also
              provide exceptional user experiences.
            </Typography>
          </Box>
          <Box
            sx={{
              // width: "100%",
              // height: 300,
              // backgroundColor: "primary.main",
              // borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // color: "white",
            }}
          >
            <Avatar sx={{ width: 250, height: 250 }}>D</Avatar>{" "}
          </Box>
        </Box>

        <Typography
          variant="h4"
          component="h3"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          mb={4}
        >
          What I Do
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 12px)",
                  md: "1 1 calc(33.333% - 16px)",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 12px)",
                  md: "calc(33.333% - 16px)",
                },
                minWidth: { xs: "100%", sm: "300px", md: "300px" },
              }}
            >
              <ServiceCard>
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    width: 80,
                    height: 80,
                    margin: "0 auto 20px",
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  align="center"
                  sx={{
                    minHeight: "65px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                >
                  {service.description}
                </Typography>
              </ServiceCard>
            </Box>
          ))}
        </Box>
      </Container>
    </AboutSectionBox>
  );
};

export default AboutSection;
