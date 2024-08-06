import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import imge from "../../assets/CrLogo.png";

const Testimony = () => {
  const [isHoveringCard1, setIsHoveringCard1] = useState(false);
  const [isHoveringCard2, setIsHoveringCard2] = useState(false);
  const [isHoveringCard3, setIsHoveringCard3] = useState(false);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 5, pt: 7 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          pr: { xs: 0, sm: 2 },
          fontSize: { xs: "2rem", sm: "2rem", md: "3rem", lg: "3rem" },
          textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
          },
          p: 2.5,
          pb: 5,
          pl: { lg: 7, sm: 2, xs: 0 },
          color: "#77428d",
        }}
      >
        Hear out what our
        <br></br>
        clients say about us.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ pb: 4 }}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card
            sx={{
              width: { xs: "90%", sm: "90%", md: 300, lg: 350 },
              maxWidth: 500,
              m: "auto",
              transition: "transform .2s",
              p: 2,
            }}
            onMouseEnter={(e) => {
              setIsHoveringCard1(true);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setIsHoveringCard1(false);
              e.currentTarget.style.transform = "none";
            }}
          >
            <CardContent sx={{ pt: 2, pb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: isHoveringCard1 ? "	#101010" : "#696969" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis necessitatibus unde a magni dolorum fuga eos minima
                  tempora dignissimos ullam sapiente, enim doloribus eveniet.
                </Typography>
                <Avatar alt="Testimonial Image" src={imge} sx={{ mt: 2 }} />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                    color: isHoveringCard1 ? "#77428d" : "black",
                  }}
                >
                  Alpha
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card
            sx={{
              width: { xs: "90%", sm: "90%", md: 300, lg: 350 },
              maxWidth: 500,
              m: "auto",
              transition: "transform .2s",
              p: 2,
            }}
            onMouseEnter={(e) => {
              setIsHoveringCard2(true);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setIsHoveringCard2(false);
              e.currentTarget.style.transform = "none";
            }}
          >
            <CardContent sx={{ pt: 2, pb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: isHoveringCard2 ? "	#101010" : "#696969" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis necessitatibus unde a magni dolorum fuga eos minima
                  tempora dignissimos ullam sapiente, enim doloribus eveniet.
                </Typography>
                <Avatar
                  alt="Another Testimonial Image"
                  src="/path/to/another-image.jpg"
                  sx={{ mt: 2 }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                    color: isHoveringCard2 ? "#77428d" : "black",
                  }}
                >
                  Beta
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card
            sx={{
              width: { xs: "90%", sm: "90%", md: 300, lg: 350 },
              maxWidth: 500,
              m: "auto",
              transition: "transform .2s",
              p: 2,
            }}
            onMouseEnter={(e) => {
              setIsHoveringCard3(true);
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              setIsHoveringCard3(false);
              e.currentTarget.style.transform = "none";
            }}
          >
            <CardContent sx={{ pt: 2, pb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: isHoveringCard3 ? "	#101010" : "#696969" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis necessitatibus unde a magni dolorum fuga eos minima
                  tempora dignissimos ullam sapiente, enim doloribus eveniet.
                </Typography>
                <Avatar
                  alt="Testimonial Image"
                  src="/path/to/yet-another-image.jpg"
                  sx={{ mt: 2 }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 2,
                    color: isHoveringCard3 ? "#77428d" : "black",
                  }}
                >
                  Gamma
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimony;
