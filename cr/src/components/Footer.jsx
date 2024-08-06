import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import logo from "../assets/CrLogo.png";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "white", color: "black", py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={3} sx={{ marginLeft: "-10px" }}>
            <Typography variant="h6" component="div">
              <img src={logo} alt="Website Logo" width="100px" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Box
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  <RouterLink
                    to="/about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="body1">About</Typography>
                  </RouterLink>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  <RouterLink
                    to="/faq"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="body1">FAQ's</Typography>
                  </RouterLink>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  <RouterLink
                    to="/service-terms"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="body1">Terms of Service</Typography>
                  </RouterLink>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  <RouterLink
                    to="/privacy-policy"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="body1">Privacy Policy</Typography>
                  </RouterLink>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Typography
              variant="body1"
              sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}
            >
              contact@example.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
