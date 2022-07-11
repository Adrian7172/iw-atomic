import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {
  IoBulbOutline,
  IoInfiniteOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { IoIosNutrition } from "react-icons/io";
import { ImLoop2 } from "react-icons/im";
import { AiOutlineLock } from "react-icons/ai";
import Card from "../card";

const Cards = () => {
  const cardContent1 = [
    {
      id: 1,
      icon: ImLoop2,
      heading: "Regular Update",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "6.2rem",
        height: "6.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "2.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
    {
      id: 2,
      icon: IoInfiniteOutline,
      heading: "Infinite Posibilities",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "7.2rem",
        height: "7.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "1.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
    {
      id: 3,
      icon: AiOutlineLock,
      heading: "Good Security",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "7.2rem",
        height: "7.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "1.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
  ];
  const cardContent2 = [
    {
      id: 1,
      icon: IoIosNutrition,
      heading: "Orange for Carrots",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "7.2rem",
        height: "7.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "1.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
    {
      id: 1,
      icon: IoBulbOutline,
      heading: "Intuitive Thinking",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "7.2rem",
        height: "7.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "1.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
    {
      id: 1,
      icon: IoVideocamOutline,
      heading: "Play Video",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "center",
        width: "35.5rem",
        height: "max-content",
        boxSizing: "border-box",
        margin: "1rem",
      },
      iconStyle: {
        width: "7.2rem",
        height: "7.2rem",
        color: "lightgray",
        lineHeight: 1,
        marginBottom: "1.7rem",
        marginLeft: "-1rem",
      },
      headingStyles: {
        color: "#000",
        fontSize: "1.8rem",
        fontWeight: "400",
        lineHeight: "1.2",
        fontFamily: "Work Sans, sans-serif",
        marginBottom: "2.2rem",
      },
      subHeadingStyles: {
        color: "#999",
        fontSize: "1.5rem",
        lineHeight: "1.8",
        fontFamily: "Work Sans, sans-serif",
      },
    },
  ];
  return (
    <Box
      sx={{
        background: "#f8f9fa !important",
        width: "100%",
        height: "max-content",
        padding: "10rem 0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "max-content",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5rem",
          }}
        >
          {cardContent1.map((data, index) => {
            return <Card key={index} {...data} />;
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "max-content",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {cardContent2.map((data, index) => {
            return <Card key={index} {...data} />;
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Box
            component={"span"}
            sx={{
              width: "max-content",
              textAlign: "center",
              marginTop: "5rem",
              color: "#fff",
              fontSize: "1.45rem",
              backgroundColor: "#000",
              borderColor: "#000",
              borderRadius: "0",
              letterSpacing: "0.1rem",
              fontWeight: "400",
              fontFamily: "Work Sans, sans-serif",
              padding: "1.89rem 2.55rem",
              cursor: "pointer",
            }}
          >
            MORE FEATURES
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cards;
