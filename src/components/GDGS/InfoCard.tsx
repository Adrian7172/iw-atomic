import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import Content from "../card";
import { IoBulbOutline, IoInfiniteOutline } from "react-icons/io5";
import { IoIosNutrition } from "react-icons/io";

const InfoCard = () => {
  const cardsContent = [
    {
      id: 1,
      icon: IoBulbOutline,
      heading: "Intuitive Thinking",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "start",
        width: {xs: "90%",md:"32rem"},
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
      id: 2,
      icon: IoIosNutrition,
      heading: "Orange for Carrots",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "start",
        width: {xs: "90%",md:"32rem"},
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
        marginLeft: "-0.5rem",
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
      icon: IoInfiniteOutline,
      heading: "Infinite Posibilities",
      subHeading:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      BoxStyle: {
        textAlign: "start",
        width: {xs: "90%",md:"32rem"},
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
        marginLeft: "-0.5rem",
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
    <Card
      sx={{
        boxShadow: "0 1rem 2rem -0.8rem rgb(0 0 0 / 20%)",
        borderRadius: "0.7rem",
        maxWidth: {xs: "max-content",md:"100%"},
        margin: "auto",
        padding: "3.4rem 2.6rem",
        marginTop: "-9.3rem",
        
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {xs: "column", md: "row"},
          alignItems: 'center'
        }}
      >
        {cardsContent.map((data: object, index) => {
          return <Content key={index} {...data} />;
        })}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
