import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";

const Desc = () => {
  const cardContents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  ];

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <Box sx={{ bgcolor: "white", pt: 2, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                  xl: "left",
                },
                pr: { xs: 0, sm: 2 },
                fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                p: 2.5,
              }}
            >
              TheCareerTest, the world's most popular site for professional
              growth.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2} justifyContent="space-between">
            {["Abc", "Card 2", "XYZ"].map((cardTitle, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Card
                  sx={{
                    border: "1px solid #eee",
                    borderRadius: "4px",
                    transition: "transform .2s",
                    ":hover": {
                      transform: "scale(1.05)",
                    },
                    maxWidth: "100%",
                  }}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <CardHeader
                    variant="h6"
                    fontWeight="bold"
                    title={cardTitle}
                    sx={{
                      color: hoveredCardIndex === index ? "#2A2F79" : "black",
                      textAlign: "center",
                      transition: "color 0.3s ease-in-out",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ textAlign: "center",
                      color: hoveredCardIndex === index ? "#101010" : "#696969"
                     }}>
                      {cardContents[index]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const WrappedDesc = () => (
  <Box sx={{ py: 10 }}>
    <Desc />
  </Box>
);

export default WrappedDesc;
