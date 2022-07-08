import React from "react";
import { Box, Container } from "@mui/material";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { Image } from "@mui/icons-material";

const Slider = () => {
  const [current, setCurrent] = React.useState(0);
  const sliderData = [
    "https://preview.colorlib.com/theme/atomic/images/xslider-2.jpg.pagespeed.ic.r9N2neKBEW.webp",
    "https://preview.colorlib.com/theme/atomic/images/xslider-3.jpg.pagespeed.ic.vCxQ_fqCHp.webp",
    "https://preview.colorlib.com/theme/atomic/images/xslider-4.jpg.pagespeed.ic.CLPVVMCFiR.webp",
  ];

  const slideLength = sliderData.length;

  const HandleRight = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  };
  const HandleLeft = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
  };

  React.useEffect(() => {
    setCurrent(0);
  }, []);

  // auto slide
  React.useEffect(() => {
    let slider = setInterval(
      () => [setCurrent(current === slideLength - 1 ? 0 : current + 1)],
      5000
    );
    return () => {
      clearInterval(slider);
    };
  });
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "60rem",
        background: "inherit",
        marginTop: "15rem",
        marginBottom: "20rem",
      }}
    >
      {sliderData.map((data, index) => {
        return (
          <Container
            key={index}
            maxWidth="xl"
            sx={{
              position: "relative",
              height: "100%",
              backgroundImage: `url(${data})`,
              backgroundSize: "100%",
              display: current === index ? "grid" : "none",
              transitionDelay: "3s",
              opacity: current === index ? "1" : "0",
              backgroundRepeat: "no-repeat",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "max-content",
                marginTop: "auto",
                marginBottom: "5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {Array.from({ length: 3 }).map((item: any, index: number) => {
                return (
                  <Box
                    onClick={() => {
                      setCurrent(index);
                    }}
                    sx={{
                      boxSizing: "border-box",
                      width: " 1rem",
                      height: "1rem",
                      marginRight: "1rem",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      opacity: current === index ? "1" : "0.4",
                      transition: "all 0.1s ease",
                      cursor: "pointer",
                    }}
                  ></Box>
                );
              })}
            </Box>
            <Box
              onClick={HandleRight}
              sx={{
                position: "absolute",
                display: "grid",
                placeItems: "center",
                width: "4rem",
                height: "4rem",
                background: "#000",
                opacity: "0.1",
                borderRadius: "50%",
                right: "5rem",
                cursor: "pointer",
                ":hover": {
                  opacity: "1",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <AiFillCaretRight
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "-0.2rem",
                  color: "#fff",
                }}
              />
            </Box>
            <Box
              onClick={HandleLeft}
              sx={{
                position: "absolute",
                display: "grid",
                placeItems: "center",
                width: "4rem",
                height: "4rem",
                background: "#000",
                opacity: "0.1",
                borderRadius: "50%",
                left: "5rem",
                cursor: "pointer",
                ":hover": {
                  opacity: "1",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <AiFillCaretLeft
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginLeft: "-0.4rem",
                  color: "#fff",
                }}
              />
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default Slider;
