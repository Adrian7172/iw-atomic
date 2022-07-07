import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Section = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        // background: "red",
        marginTop: "8.1rem",
      }}
    >
      <Box
      sx={{
        marginLeft: "2.1rem",

      }}
      >
      <Typography
        variant="h1"
        sx={{
          color: "#000",
          width: "50rem",
          fontSize: "5rem",
          fontWeight: "400",
          lineHeight: "1.5",
          letterSpacing: "0.005rem",
          fontFamily: "Work Sans, sans-serif",
          marginBottom: "1.65rem"
        }}
        >
        Design a better website template.
      </Typography>
      <Typography variant="h3"
      sx={{
        width: "55rem",
        fontSize: "1.8rem",
        fontWeight: "300",
        color: "#999",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "6.59rem"
      }}
      >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>

      <Box component={"span"}
      sx={{
        width: "max-content",
        textAlign: "center",
        marginTop: "5rem",
        color: "#fff",
        fontSize: "1.45rem",
        backgroundColor: "#0389ff",
        borderColor: "#0389ff",
        borderRadius: "0",
        letterSpacing: "0.1rem",
        fontWeight: "400",
        fontFamily: "Work Sans, sans-serif",
        padding: "1.89rem 2.55rem",
        cursor: "pointer",
        ":hover": {
          transition: "all 0.3s ease",
          backgroundColor: "#2f9eff"
        }
      }}
      >FREE DOWNLOAD</Box>
      </Box>
    </Container>
  );
};

export default Section;
