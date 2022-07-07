import { Box } from "@mui/material";
import React from "react";
import Top from "../components/Top";
import GDGS from "../components/GDGS"
import "../styles/global.css";

const Home = () => {
  return (
    <Box>
      <Top />
      <GDGS />
    </Box>
  );
};

export default Home;
