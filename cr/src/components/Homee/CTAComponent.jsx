import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import img from "../../assets/CTA_image.jpg";

const CTAComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box
      sx={{
        pl: { lg: 7, sm: 4, xs: 4 },
        backgroundColor: "#f5f5f5",
        pb: 6,
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#77428d",
              pt: 2,
              pb: 1,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left",
              },
            }}
          >
            We've helped millions
            <br />
            of individuals discover
            <br />
            their dream jobs
          </Typography>
          <Typography
            paragraph
            sx={{
              marginBottom: "24px",
              pl: { xs: 0 },
              fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.5rem",
              },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left",
              },
              overflowWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: "100%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            nibh et lorem interdum bibendum nec ut sem.
            <br />
            Sed euismod, nisl vitae ultrices lacinia, nisl nisl aliquam nisl,
            eget aliquam nisl nisl eget nisl. Suspendisse potenti.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" }, 
              alignItems: "center",
              width: "100%", 
              textAlign: { xs: "center", sm: "left" }
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#77428d",
                color: "white",
                marginBottom: 2,
                fontWeight: "bold",
                fontSize: "large",
                transition: "transform 0.3s ease",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#77428d",
                  transform: "translateY(-5px)",
                },
              }}
              onClick={handleClick}
            >
              Click Me
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pr: '1.5rem'
            }}
          >
            <img
              src={img}
              alt="Image"
              style={{ maxWidth: "80%", maxHeight: "400px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CTAComponent;