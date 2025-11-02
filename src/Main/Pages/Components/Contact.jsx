import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 0),
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // "&:hover": {
  //   transform: "translateY(-5px)",
  //   boxShadow: theme.shadows[4],
  // },
}));

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      title: "Email",
      value: "ram.maheshwari@example.com",
      link: "mailto:ram.maheshwari@example.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      title: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/rammaheshwari",
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 30 }} />,
      name: "GitHub",
      url: "https://github.com/rammaheshwari",
    },
  ];

  return (
    <ContactSectionBox id="contact">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          mb={2}
        >
          Get In Touch
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
          I'm always open to discussing new opportunities and interesting
          projects
        </Typography>

        <ContactCard>
          <CardContent
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              flexDirection: "column",
            }}
          >
            {submitStatus === "success" && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  boxShadow: theme.shadows[4],
                  "&:hover": {
                    transform: "translateY(5px)",
                    boxShadow: theme.shadows[4],
                  },
                  p: 3,
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  mb={3}
                >
                  Send Me a Message
                </Typography>
                {/* <Box> */}
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.85rem", // smaller label
                      display: "flex",
                      alignContent: "center",
                    },
                  }}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      height: "40px",
                      "&:hover": {
                        backgroundColor: "#f1f3f4",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                      },
                    },
                  }}
                />
                {/* </Box> */}
                {/* <Box> */}
                <Typography>Email</Typography>
                <TextField
                  fullWidth
                  // label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      height: "40px",
                      "&:hover": {
                        backgroundColor: "#f1f3f4",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                      },
                    },
                  }}
                />
                {/* </Box> */}
                {/* <Box> */}
                <Typography>Message</Typography>
                <TextField
                  fullWidth
                  // label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#f1f3f4",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                      },
                    },
                  }}
                />
                {/* </Box> */}

                <Button
                  type="submit"
                  variant="outlined"
                  size="small"
                  sx={{
                    // padding: "12px 40px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    letterSpacing: 1,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </CardContent>
        </ContactCard>

        <Grid item xs={12} md={4}>
          <Stack spacing={3} sx={{ backgroundColor: "black" }}>
            {/* {contactInfo.map((info, index) => (
              <ContactCard key={index} sx={{ backgroundColor: "transparent" }}>
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{info.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    fontWeight="bold"
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="a"
                    href={info.link}
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {info.value}
                  </Typography>
                </CardContent>
              </ContactCard>
            ))} */}

            <ContactCard sx={{ backgroundColor: "transparent" }}>
              <CardContent
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "transparent",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  mb={2}
                  sx={{ color: "white" }}
                >
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        minWidth: "auto",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                        },
                      }}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </Stack>
              </CardContent>
            </ContactCard>
          </Stack>
        </Grid>
      </Container>
    </ContactSectionBox>
  );
};

export default ContactSection;
