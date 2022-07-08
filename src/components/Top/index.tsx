import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Section from "./designBetter";
import { Navbar } from "./navbar";
import Video from "./video";

const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80rem",
        backgroundImage:
          "url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.REhBBaqspE.webp)",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Section />
      {/* <Video /> */}
    </Box>
  );
};

export default Main;
