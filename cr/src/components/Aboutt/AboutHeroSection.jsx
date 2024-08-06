import React from "react";
import { Box, Typography, Button } from "@mui/material";
import imgSrc from "../../assets/CrLogo.png";

const AboutHeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: {xl: "635px", md: "630px", sm: "615px",xs: "585px"},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e3dede",
        padding: "40px 20px",
      }}
    >
      <Box
        component="div"
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          pl: { lg: 10, md: 5, xl: 10 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          fontWeight="bold"
          sx={{
            color: "#77428d",
            fontSize: { xs: "2rem", md: "3rem", lg: "3rem", xl: "4rem" },
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mt: 2,
            mb: 2,
            fontSize: {
              xs: "1 rem",
              md: "1.1rem",
              lg: "1.25rem",
              xl: "1.5rem",
            },
          }}
        >
          Your insightful journey begins here.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#77428d",
            color: "white",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "#77428d",
              transform: "scale(1.1)",
            },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          Learn More
        </Button>
      </Box>
      <Box
        component="div"
        sx={{ flex: 1, textAlign: { xs: "center", md: "right" } }}
      >
        <img
          src={imgSrc}
          alt="About"
          style={{ maxWidth: "50%", maxHeight: "80%"   }}
        />
      </Box>
    </Box>
  );
};

export default AboutHeroSection;


