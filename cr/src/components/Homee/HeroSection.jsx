import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/HeroAnimation.json";
import { Container, Grid, Typography, Box } from "@mui/material";

function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e3dede",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ minWidth: "100%", maxWidth: "100%", width: "100%" }}
        >
          <Grid item xs={12} sm={8} md={6}>
            <Box
              sx={{
                textAlign: "center",
                pb: { xs: 1, sm: 2 },
                pt: { xs: 1, sm: 2 },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "4.5rem",
                    xl: "5rem",
                  },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "left",
                    xl: "left",
                  },
                  lineHeight: "1.15",
                  color: "#77428d",
                }}
              >
                Welcome to Our <br />
                Website!
              </Typography>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.3rem",
                    xl: "1.75rem",
                  },
                  lineHeight: "1.15",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                Explore our services and discover how we can assist you today.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Lottie options={defaultOptions} height={"80%"} width={"100%"} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HeroSection;
