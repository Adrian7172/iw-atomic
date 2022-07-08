import { Box, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

const Video = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        background: "transparent",
        border: " 2px solid rgba(0,0,0,.1)",
        right: "27.5rem",
        top: "13.5rem",
        display: " grid",
        placeItems: "center",
        borderRadius: "50%",
        width: "8rem",
        height: "8rem",
        cursor: "pointer",
        ":hover": {
          transition: "all 0.3s ease ",
          background: "transparent",
          width: "9rem",
          height: "9rem",
          right: "27rem",
          top: "13rem",
        },
      }}
    >
      <PlayArrowIcon
        sx={{
          color: "#000",
          width: "4.2rem",
          height: "4.2rem",
        }}
      />
    </Box>
  );
};

export default Video;
