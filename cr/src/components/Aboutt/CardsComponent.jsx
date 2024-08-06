import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";

const CardsComponent = () => {
  const cardsData = [
    { id: 1, title: "Title 1", description: "Description 1" },
    { id: 2, title: "Title 2", description: "Description 2" },
    // Add more cards as needed
  ];

  const [isHoveringCards, setIsHoveringCards] = useState(
    cardsData.map(() => false)
  );

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "2rem", sm: "2rem", md: "3rem", lg: "3rem" },
        }}
      >
        We made a powerful <br />
        algorithm to help you
        <br /> choose the best career
        <br /> path.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={card.id}>
            <Card
              sx={{
                width: { xs: "90%", sm: "90%", md: 300, lg: 350 },
                maxWidth: 500,
                m: "auto",
                transition: "transform .2s",
                p: 2,
              }}
              onMouseEnter={() => {
                const newIsHoveringCards = [...isHoveringCards];
                newIsHoveringCards[index] = true;
                setIsHoveringCards(newIsHoveringCards);
              }}
              onMouseLeave={() => {
                const newIsHoveringCards = [...isHoveringCards];
                newIsHoveringCards[index] = false;
                setIsHoveringCards(newIsHoveringCards);
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
                    transition: "all 0.3s ease",
                  }}
                >
                  <Avatar alt="Testimonial Image" src="" sx={{ mt: 2 }} />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: isHoveringCards[index] ? "#77428d" : "black",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: isHoveringCards[index] ? "#101010" : "#696969",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsComponent;
