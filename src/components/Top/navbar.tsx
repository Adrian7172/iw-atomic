import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export const Navbar = () => {
  const [dropOne, setDropOne] = React.useState("none");
  const [dropTwo, setDropTwo] = React.useState("none");
  const [dropThree, setDropThree] = React.useState("none");

  const navData = [
    {
      id: 1,
      name: "Home",
      Active: "true",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "services",
      icon: "true",
      subMenu: [
        {
          name: "Service 1",
        },
        {
          name: "Service 2",
        },
        {
          name: "Service 3",
          subIcon: "true",
          subSubMenu: [
            {
              name: "Service 1",
            },
            {
              name: "Service 2",
            },
            {
              name: "Service 3",
              subSubIcon: "true",
              subSubSubMenu: [
                {
                  name: "Service 1",
                },
                {
                  name: "Service 2",
                },
                {
                  name: "Service 3",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "gallery",
    },
    {
      id: 5,
      name: "blog",
    },
    {
      id: 6,
      name: "contact",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          padding: "4rem 0",
          background: "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> 
          </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#000",
                fontSize: "2.2rem",
                fontWeight: "400",
                marginBottom: "0.5rem",
                marginLeft: "-0.3rem",
                fontFamily: "Work Sans, sans-serif",
              }}
            >
              Atomic
            </Typography>
            {navData.map(
              ({ id, name, icon = false, Active = false, subMenu }) => {
                return (
                  <Box
                    onMouseEnter={() => {
                      if (icon) {
                        setDropOne("");
                      } else setDropOne("none");
                    }}
                    onMouseLeave={() => {
                      setDropOne("none");
                    }}
                    key={id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "max-content",
                      marginLeft: "1.6rem",
                      marginRight: "0.8rem",
                      marginBottom: "0.4rem",
                      cursor: "pointer",
                      color: "gray",
                      ":hover": {
                        color: "#999",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: Active ? "#000" : "",
                        fontSize: "1.28rem",
                        padding: "2rem 0.5rem",
                        letterSpacing: "0.15rem",
                        lineHeight: "1.5",
                        fontFamily: "Work Sans, sans-serif",
                      }}
                    >
                      {name}
                    </Typography>
                    {icon && (
                      <KeyboardArrowDownIcon
                        sx={{
                          marginBottom: "0.3rem",
                          marginRight: "-0.8rem",
                        }}
                      />
                    )}
                    {subMenu && (
                      <Box
                        onMouseEnter={() => {
                          setDropOne("");
                        }}
                        onMouseLeave={() => {
                          setDropOne("none");
                        }}
                        sx={{
                          display: `${dropOne}`,
                          position: "absolute",
                          background: "white",
                          width: "17rem",
                          height: "max-content",
                          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
                          borderRadius: ".4rem",
                          top: "6rem",
                          marginLeft: "-.5rem",
                          padding: "2rem 0",
                        }}
                      >
                        {subMenu.map(({ name, subIcon, subSubMenu }) => {
                          return (
                            <Box
                              onMouseEnter={() => {
                                if (subIcon) {
                                  setDropTwo("");
                                } else setDropTwo("none");
                              }}
                              onMouseLeave={() => {
                                setDropTwo("none");
                              }}
                              sx={{
                                display: `flex`,
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "0 2rem",
                              }}
                            >
                              <Typography
                                sx={{
                                  padding: "0.4rem",
                                  fontSize: "1.4rem",
                                  color: "gray",
                                  fontFamily: "Work Sans, sans-serif",
                                  fontWeight: "400",
                                }}
                              >
                                {name}
                              </Typography>
                              {subIcon && (
                                <KeyboardArrowDownIcon
                                  sx={{
                                    marginBottom: "0.3rem",
                                    marginRight: "-0.8rem",
                                  }}
                                />
                              )}
                              {subSubMenu && (
                                <Box
                                  onMouseEnter={() => {
                                    setDropOne("");
                                    setDropTwo("");
                                  }}
                                  onMouseLeave={() => {
                                    setDropTwo("none");
                                  }}
                                  sx={{
                                    display: `${dropTwo}`,
                                    position: "absolute",
                                    background: "white",
                                    width: "17rem",
                                    zIndex: "2",
                                    height: "max-content",
                                    top: "7rem",
                                    marginLeft: "15rem",
                                    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
                                    borderRadius: ".4rem",
                                    padding: "2rem 1.5rem",
                                  }}
                                >
                                  {subSubMenu.map(
                                    ({ name, subSubIcon, subSubSubMenu }) => {
                                      return (
                                        <Box
                                          onMouseEnter={() => {
                                            setDropOne("");
                                            setDropTwo("");
                                            if (subSubIcon) {
                                              setDropThree("");
                                            } else setDropThree("none");
                                          }}
                                          onMouseLeave={() => {
                                            setDropThree("none");
                                          }}
                                          sx={{
                                            display: `flex`,
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingRight: "1rem",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              padding: "0.4rem",
                                              fontSize: "1.4rem",
                                              color: "gray",
                                              fontFamily:
                                                "Work Sans, sans-serif",
                                              fontWeight: "400",
                                            }}
                                          >
                                            {name}
                                          </Typography>
                                          {subSubIcon && (
                                            <KeyboardArrowDownIcon
                                              sx={{
                                                marginBottom: "0.3rem",
                                                marginRight: "-0.8rem",
                                              }}
                                            />
                                          )}
                                          {subSubSubMenu && (
                                            <Box
                                              onMouseEnter={() => {
                                                setDropOne("");
                                                setDropTwo("");
                                                setDropThree("");
                                              }}
                                              sx={{
                                                display: `${dropThree}`,
                                                position: "absolute",
                                                background: "white",
                                                width: "17rem",
                                                zIndex: "4",
                                                height: "max-content",
                                                top: "7rem",
                                                marginLeft: "15rem",
                                                boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
                                                borderRadius: ".4rem",
                                                padding: "2rem 1.5rem",
                                              }}
                                            >
                                              {subSubSubMenu.map(({ name }) => {
                                                return (
                                                  <Box
                                                    onMouseEnter={() => {
                                                      setDropOne("");
                                                      setDropTwo("");
                                                      setDropThree("");
                                                    }}
                                                    sx={{
                                                      display: `flex`,
                                                      justifyContent:
                                                        "space-between",
                                                      alignItems: "center",
                                                      paddingRight: "1rem",
                                                    }}
                                                  >
                                                    <Typography
                                                      sx={{
                                                        padding: "0.4rem",
                                                        fontSize: "1.4rem",
                                                        color: "gray",
                                                        fontFamily:
                                                          "Work Sans, sans-serif",
                                                        fontWeight: "400",
                                                      }}
                                                    >
                                                      {name}
                                                    </Typography>
                                                  </Box>
                                                );
                                              })}
                                            </Box>
                                          )}
                                        </Box>
                                      );
                                    }
                                  )}
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                );
              }
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
