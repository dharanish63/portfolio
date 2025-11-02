import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HeroSectionBox = styled(Box)(({ theme }) => ({
  background: "#bfbcbc",
  color: "white",
  padding: theme.spacing(18, 0),
  textAlign: "center",
  // minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(13, 0),
    minHeight: "100vh",
  },
}));

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSectionBox>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h1"
          fontWeight="bold"
          gutterBottom
          letterSpacing={2}
        >
          HEY, I'M{" "}
          <Typography
            component="span"
            variant={isMobile ? "h3" : "h2"}
            color="#ffd700"
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            DHARANISH{" "}
          </Typography>
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="p"
          maxWidth="600px"
          margin="0 auto"
          gutterBottom
          lineHeight={1.8}
          mb={4}
        >
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => scrollToSection("projects")}
          sx={{
            backgroundColor: "#ffd700",
            color: "#333",
            padding: "15px 40px",
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
            "&:hover": {
              backgroundColor: "#ffed4a",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            },
            transition: "all 0.3s ease",
            mb: 4,
          }}
        >
          View My Work
        </Button>

        {/* <Box sx={{ mt: 4 }}>
          <Button
            onClick={() => scrollToSection("about")}
            sx={{ color: "white" }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 40 }} />
          </Button>
        </Box> */}
      </Container>
    </HeroSectionBox>
  );
};

export default Portfolio;
