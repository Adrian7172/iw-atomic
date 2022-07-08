import { Box, Grid, ListItemText, Typography } from "@mui/material";
import React from "react";

const Section = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "21rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "max-content",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3.2rem",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: "400",
          marginBottom: "4.8rem",
        }}
      >
        Good Design is a Good Start
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              fontSize: "1.8rem",
              color: "#999",
              fontWeight: "300",
              lineHeight: 1.8,
            }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
            <Box
              component={"span"}
              sx={{
                color: "#000",
              }}
            >
              Separated they live in Bookmarksgrove
            </Box>{" "}
            right at the coast of the Semantics, a large language ocean.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: "1.52rem",
              fontFamily: "Work Sans, sans-serif",
              marginBottom: "2rem",
              color: "#999",
              fontWeight: "400",
              lineHeight: 1.8,
            }}
          >
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              fontSize: "1.52rem",
              marginBottom: "2rem",
              color: "#999",
              fontWeight: "400",
              lineHeight: 1.8,
            }}
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
