import { Box, Container, Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import { FaFacebookSquare, FaTwitter, FaGithub } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const data = [
    {
      title: "learn more",
      subData: ["How its work", "Usefull Tools", "Pricing", "Sitemap"],
    },
    {
      title: "support",
      subData: ["FAQ", "Contact Us", "Help Desk", "Knowledgebase"],
    },
    {
      title: "about us",
      subData: ["About us", "carrer", "Terms of Service", "Privacy Policy"],
    },
  ];

  return (
    <Box
      sx={{
        background: "#f8f9fa !important",
        width: "100%",
        height: "max-content",
        padding: { lg: "10rem 0", xs: "10rem 1rem" },
      }}
    >
      <Box
        sx={{
          maxWidth: "120rem",
          margin: "auto",
          boxSizing: "border-box",
          paddingLeft: "5rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            md={2}
            lg={3}
            xs={12}
            sx={{
              marginRight: "4rem",
              marginBottom: { xs: "3rem", md: "0" },
            }}
          >
            <Typography
              component={"h2"}
              sx={{
                color: "#ccc",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                lineHeight: "1.2",
                fontWeight: "400",
                textAlign: "left",
                marginBottom: "1rem",
                fontFamily: "Work Sans, sans-serif",
              }}
            >
              ABOUT
            </Typography>
            <Typography
              sx={{
                color: "#999",
                fontSize: "1.5rem",
                fontWeight: "400",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.8",
              }}
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </Typography>
          </Grid>
          {data.map(({ title, subData }: { title: string; subData: any }) => {
            return (
              <Grid
                md={2}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: { xs: "3rem", md: "0" },
                }}
              >
                <Typography
                  component={"h2"}
                  sx={{
                    color: "#ccc",
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    lineHeight: "1.2",
                    fontWeight: "400",
                    textAlign: "left",
                    marginBottom: "0.8rem",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  {title}
                </Typography>

                {subData.map((item: string) => {
                  return (
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: "1.8",
                        fontFamily: "Work Sans, sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Grid>
            );
          })}
          <Grid
            md={3}
            lg={2.5}
            xs={12}
            sx={{
              marginTop: "1rem",
              marginBottom: "2rem"
            }}
          >
            <Box
              component={"span"}
              sx={{
                width: "max-content",
                textAlign: "center",
                color: "#fff",
                marginTop: "2rem",
                fontSize: "1.5rem",
                backgroundColor: "#0389ff",
                borderColor: "#0389ff",
                borderRadius: "0",
                letterSpacing: "0.1rem",
                fontWeight: "400",
                fontFamily: "Work Sans, sans-serif",
                padding: "1rem 1rem",
                cursor: "pointer",
                ":hover": {
                  transition: "all 0.3s ease",
                  backgroundColor: "#2f9eff",
                },
              }}
            >
              DOWNLOAD FOR FREE
            </Box>
            <Typography
              sx={{
                color: "#999",
                fontSize: "1.5rem",
                fontWeight: "400",
                fontFamily: "Work Sans, sans-serif",
                marginTop: "3rem",
              }}
            >
              Connect with us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <FaFacebookSquare
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  margin: "0.5rem",
                }}
              />
              <FaTwitter
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  margin: "0.5rem",
                }}
              />
              <FaGithub
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  margin: "0.5rem",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            fontSize: "1.5rem",
            fontWeight: "400",
            marginTop: "10rem",
            marginBottom: "3rem",
            fontFamily: "Work Sans, sans-serif",
            color: "#999",
            marginLeft: "-0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Copyright ©2022 All rights reserved | This template is made with&nbsp;
          <BsFillSuitHeartFill />
          &nbsp;by&nbsp;
          <a target={"_blank"}
            style={{
              textDecoration: "none",
            }}
            href="https://colorlib.com/"
          ><Typography
          
          sx={{
            color: "#0389ff !important",
            fontSize:"1.5rem",
            fontFamily: "Work Sans, sans-serif",
            marginTop: "0.2rem"
            
          }}
          >Colorlib</Typography>
            
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
