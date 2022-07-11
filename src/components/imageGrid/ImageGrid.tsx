import React from "react";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Images = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "50rem",
              position: "relative",

              backgroundImage:
                "url(https://preview.colorlib.com/theme/atomic/images/xslider-2.jpg.pagespeed.ic.r9N2neKBEW.webp)",
              backgroundSize: "cover",
              cursor: "pointer",
              backgroundPositionX: "-14rem",
              opacity: "0.9",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                background: "#000",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                opacity: "0",
                ":hover": {
                  transition: "all 0.3s ease",
                  opacity: "0.5",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "2rem",
                  transform: "translate(0, 8%)",
                  opacity: "0",
                  ":hover": {
                    transition: "all 0.4s ease",
                    transform: "translate(0, 0)",
                    opacity: "1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    color: "white !important",
                    lineHeight: "1.2",
                    fontWeight: "400",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  When she reached the first
                </Typography>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontFamily: "Work Sans, sans-serif",
                    color: "gray !important",
                  }}
                >
                  {" "}
                  Design, Illustration
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              position: "relative",
              height: "50rem",
              backgroundImage:
                "url(https://preview.colorlib.com/theme/atomic/images/xslider-1.jpg.pagespeed.ic.abj2HoBrGU.webp)",
              backgroundSize: "cover",
              backgroundPositionY: "-6rem",
              cursor: "pointer",
              opacity: "0.9",
            }}
          >
            {" "}
            <Box
              sx={{
                position: "absolute",
                background: "#000",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                opacity: "0",
                ":hover": {
                  transition: "all 0.3s ease",
                  opacity: "0.5",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "2rem",
                  transform: "translate(0, 8%)",
                  opacity: "0",
                  ":hover": {
                    transition: "all 0.4s ease",
                    transform: "translate(0, 0)",
                    opacity: "1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    color: "white !important",
                    lineHeight: "1.2",
                    fontWeight: "400",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Duden flows by their place
                </Typography>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontFamily: "Work Sans, sans-serif",
                    color: "gray !important",
                  }}
                >
                  {" "}
                  Design, Illustration
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              position: "relative",
              height: "50rem",
              backgroundImage:
                "url(https://preview.colorlib.com/theme/atomic/images/xslider-3.jpg.pagespeed.ic.abj2HoBrGU.webp)",
              backgroundSize: "cover",
              cursor: "pointer",
              backgroundPositionY: "-6rem",
              opacity: "0.9",
            }}
          >
            {" "}
            <Box
              sx={{
                position: "absolute",
                background: "#000",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                opacity: "0",
                ":hover": {
                  transition: "all 0.3s ease",
                  opacity: "0.5",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "2rem",
                  transform: "translate(0, 8%)",
                  opacity: "0",
                  ":hover": {
                    transition: "all 0.4s ease",
                    transform: "translate(0, 0)",
                    opacity: "1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    color: "white !important",
                    lineHeight: "1.2",
                    fontWeight: "400",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Italic Mountains
                </Typography>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontFamily: "Work Sans, sans-serif",
                    color: "gray !important",
                  }}
                >
                  {" "}
                  Design, Illustration
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              position: "relative",
              height: "50rem",
              backgroundImage:
                "url(https://preview.colorlib.com/theme/atomic/images/xslider-4.jpg.pagespeed.ic.CLPVVMCFiR.webp)",
              backgroundSize: "cover",
              cursor: "pointer",
              opacity: "0.9",
            }}
          >
            {" "}
            <Box
              sx={{
                position: "absolute",
                background: "#000",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                opacity: "0",
                ":hover": {
                  transition: "all 0.3s ease",
                  opacity: "0.5",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "2rem",
                  transform: "translate(0, 8%)",
                  opacity: "0",
                  ":hover": {
                    transition: "all 0.4s ease",
                    transform: "translate(0, 0)",
                    opacity: "1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    color: "white !important",
                    lineHeight: "1.2",
                    fontWeight: "400",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Behind the word mountains
                </Typography>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontFamily: "Work Sans, sans-serif",
                    color: "gray !important",
                  }}
                >
                  {" "}
                  Design, Illustration
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "35rem",
          background: "#0389ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "37.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "5rem",
              marginBottom: "1rem",
            }}
          >
            <CountUp end={99399} duration={5} />
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              opacity: "0.5",
            }}
          >
            Lines of codes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "37.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "5rem",
              marginBottom: "1rem",
            }}
          >
            <CountUp end={99} duration={5} />
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              opacity: "0.5",
            }}
          >
            number of projects
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "37.5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "5rem",
              marginBottom: "1rem",
            }}
          >
            <CountUp end={124} duration={5} />
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              color: "white",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              opacity: "0.5",
            }}
          >
            number of clients
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Images;
