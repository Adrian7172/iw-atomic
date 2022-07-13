import { Box, Button, Modal, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import VideoJS from "../Video";
import {CgClose} from "react-icons/cg"




const style = {
  boxSizing: "border-box",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  height: "max-content",
  background: "white",
  padding: "1rem"
};

const Video = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box
        onClick={handleOpen}
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
          onClick={handleOpen}
          sx={{
            color: "#000",
            width: "4.2rem",
            height: "4.2rem",
          }}
        />
      </Box>
      <Modal
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          <VideoJS />
        </Box>
      </Modal>
    </div>
  );
};

export default Video;
