import { Box } from "@mui/material";
import React from "react";
import Top from "../components/top";
import GDGS from "../components/gdgs"
import "../styles/global.css";
import Slider from "../components/slider";
import Cards from "../components/cardsgroup";
import Images from "../components/imageGrid/ImageGrid";



const Home = () => {
  return (
    <Box>
      <Top />
      <GDGS />
      <Slider  slide ="slide1"/>
      <Cards />
      <Images />
      <Slider  slide ={"slide2"}/>
    </Box>
  );
};

export default Home;
