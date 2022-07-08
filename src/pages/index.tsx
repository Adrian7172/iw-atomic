import { Box } from "@mui/material";
import React from "react";
import Top from "../components/top";
import GDGS from "../components/gdgs"
import "../styles/global.css";
import Slider from "../components/slider";

const Home = () => {
  return (
    <Box>
      <Top />
      <GDGS />
      <Slider />
    </Box>
  );
};

export default Home;
