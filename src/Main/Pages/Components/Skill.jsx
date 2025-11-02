import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  LinearProgress,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SkillsSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const SkillCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const SkillsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "Adobe XD",
    "Webpack",
    "Jest",
    "Docker",
    "AWS",
  ];

  const frameworks = [
    "Material-UI",
    "Bootstrap",
    "Tailwind CSS",
    "Express.js",
    "Next.js",
    "Vue.js",
  ];

  return (
    <SkillsSectionBox id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          mb={2}
        >
          Skills & Technologies
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
          Here are the technologies and tools I work with to bring ideas to life
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                >
                  Technical Skills
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {technicalSkills.map((skill, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1" fontWeight="500">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "grey.200",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "primary.main",
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SkillCard>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Tools & Platforms
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={1}>
                        {tools.map((tool, index) => (
                          <Grid item xs={6} key={index}>
                            <Typography
                              variant="body2"
                              sx={{
                                p: 1,
                                backgroundColor: "primary.light",
                                color: "white",
                                borderRadius: 1,
                                textAlign: "center",
                                fontWeight: "500",
                              }}
                            >
                              {tool}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </CardContent>
                </SkillCard>
              </Grid>

              <Grid item xs={12}>
                <SkillCard>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Frameworks & Libraries
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={1}>
                        {frameworks.map((framework, index) => (
                          <Grid item xs={6} key={index}>
                            <Typography
                              variant="body2"
                              sx={{
                                p: 1,
                                backgroundColor: "secondary.light",
                                color: "white",
                                borderRadius: 1,
                                textAlign: "center",
                                fontWeight: "500",
                              }}
                            >
                              {framework}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </CardContent>
                </SkillCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SkillsSectionBox>
  );
};

export default SkillsSection;
