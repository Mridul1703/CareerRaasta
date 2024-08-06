import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  GlobalStyles,
} from "@mui/material";
import ExpandablePanel from "./ExpandablePanel";

const Faq = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const faqs = [
    {
      title: "What is the Career Test?",
      description:
        "The Career Test is designed to help individuals discover their career interests and potential paths.",
    },
    {
      title: "How do I take the test?",
      description:
        "You can take the test online through our platform. Follow the instructions provided during registration.",
    },
    {
      title: "Can I retake the test?",
      description:
        "Yes, you can retake the test as many times as you wish. Each attempt provides valuable insights.",
    },
    {
      title: "What are the benefits of career personality tests?",
      description:
        "Yes, you can retake the test as many times as you wish. Each attempt provides valuable insights.",
    },
    // Add FAQs here
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: "#f5f5f5",
          },
        })}
      />
      <Container sx={{ pb: 4, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{
            my: 5,
            color: "#77428d",
            fontSize: { xs: "2rem", sm: "1rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {faqs.map((faq, index) => (
            <Card
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                minWidth: 300,
                maxWidth: 700,
                margin: "10px",
                padding: "5px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.5rem",
                    },
                    color: hoveredIndex === index ? "#77428d" : "black",
                  }}
                >
                  {faq.title}
                </Typography>
                <ExpandablePanel onOpen={() => setHoveredIndex(index)}>
                  <Typography variant="body1" color="text.secondary">
                    {faq.description}
                  </Typography>
                </ExpandablePanel>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Faq;
