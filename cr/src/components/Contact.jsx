import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import lottie from "lottie-web";
import animationData from "../assets/ContactAnimation.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const animationContainerRef = useRef(null);

  const handleClick = () => {
    window.alert("Details Submitted");
  };

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [animationData]);

  const isValidEmail = (email) => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

  const handleEmailFocus = () => {
    setIsValid(true);
  };

  const handleEmailBlur = () => {
    setIsValid(email !== "" && isValidEmail(email)); // Validate email on blur
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        padding: { lg: 7, sm: 2, xs: 2 },
      }}
    >
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} sm={9} md={6}>
          <Paper elevation={0} sx={{ padding: 5 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  style: { borderRadius: "5px", maxWidth: "90%", mx: "auto" },
                  disableUnderline: true,
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "transparent" },
                      "&:hover fieldset": { borderColor: "transparent" },
                      "&.Mui-focused fieldset": { borderColor: "transparent" },
                    },
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleEmailFocus} // Handle focus event
                onBlur={handleEmailBlur} // Handle blur event
                error={!isValid} // Show error if email is invalid
                helperText={!isValid ? "Invalid email format" : ""}
                InputProps={{
                  style: { borderRadius: "5px", maxWidth: "90%", mx: "auto" },
                  disableUnderline: true,
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "transparent" },
                      "&:hover fieldset": { borderColor: "transparent" },
                      "&.Mui-focused fieldset": { borderColor: "transparent" },
                    },
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                  style: { borderRadius: "5px", maxWidth: "90%", mx: "auto" },
                  disableUnderline: true,
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "transparent" },
                      "&:hover fieldset": { borderColor: "transparent" },
                      "&.Mui-focused fieldset": { borderColor: "transparent" },
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                disabled={!isValid}
                onClick={handleClick}
                sx={{
                  bgcolor: "#2a2f79",
                  "&:hover": { bgcolor: "#1c1d27" },
                  marginTop: 2,
                  width: "90%",
                  mx: "auto",
                  height: "3rem",
                  fontSize: "16px",
                  padding: "14px 24px",
                  lineHeight: "56px",
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={6} sx={{ marginTop: 3 }}>
          <div
            ref={animationContainerRef}
            style={{ width: "100%", height: "400px" }}
          ></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
