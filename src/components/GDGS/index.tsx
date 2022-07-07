import { Box, Container } from "@mui/material";
import React from "react";
import Slider from "../Slider";
import GoodDesign from "./goodDesign";
import InfoCard from "./InfoCard";

const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80rem",
        background: "inherit",
      }}
    >
      <Container maxWidth="lg">
        <InfoCard />
        <GoodDesign />
        <Slider />
      </Container>
    </Box>
  );
};

export default Main;
