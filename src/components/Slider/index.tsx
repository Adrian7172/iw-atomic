import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { Image } from "@mui/icons-material";

const Slider = ({ slide }: { slide: string }) => {
  const [current, setCurrent] = React.useState(0);
  const sliderData1 = [
    "https://preview.colorlib.com/theme/atomic/images/xslider-2.jpg.pagespeed.ic.r9N2neKBEW.webp",
    "https://preview.colorlib.com/theme/atomic/images/xslider-3.jpg.pagespeed.ic.vCxQ_fqCHp.webp",
    "https://preview.colorlib.com/theme/atomic/images/xslider-4.jpg.pagespeed.ic.CLPVVMCFiR.webp",
  ];
  const sliderData2 = [
    "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”",
    "“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”",
  ];

  const slideLength = sliderData1.length;

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
        height: "50rem",
        background: "inherit",
        marginTop: slide === "slide1" ? "15rem": "0",
        marginBottom: slide === "slide1" ? "10rem": "0",
      }}
    >
      {slide == "slide1" &&
        sliderData1.map((data, index) => {
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

      {slide === "slide2" &&
        sliderData2.map((data, index) => {
          return (
            <Container
              key={index}
              maxWidth="xl"
              sx={{
                position: "relative",
                height: "100%",
                backgroundSize: "100%",
                display: current === index ? "grid" : "none",
                transitionDelay: "3s",
                opacity: current === index ? "1" : "0",
                background: "inherit",
                placeItems: "center",
              }}
            >

              <Box 
              sx={{
                maxWidth: "74rem",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
                
              }}
              >


              <Typography
              sx={{
                width:"max-content",
                height: "13rem",
                fontSize: "10rem",
                fontFamily: "Work Sans, sans-serif",
              }}>“</Typography>
              <Typography
              sx={{
                height: "18rem",
                fontSize: "1.8rem",
                lineHeight: "2",
                fontFamily: "Work Sans, sans-serif",
                width: "100%",
                textAlign: "center"
              }}>
                {data}
              </Typography>


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
                        backgroundColor: "black",
                        opacity: current === index ? "1" : "0.4",
                        transition: "all 0.1s ease",
                        cursor: "pointer",
                      }}
                    ></Box>
                  );
                })}
              </Box>
              </Box>
            </Container>
          );
        })}
    </Box>
  );
};

export default Slider;
