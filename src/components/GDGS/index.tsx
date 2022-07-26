import { Box, Container } from "@mui/material";
import React from "react";
import Slider from "../slider";
import GoodDesign from "./goodDesign";
import InfoCard from "./InfoCard";

const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        background: "inherit",
      }}
    >
      <Container maxWidth="lg">
        <InfoCard />
        <GoodDesign />
      </Container>
    </Box>
  );
};

export default Main;
