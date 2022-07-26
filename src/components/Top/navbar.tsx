import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { BsBoxArrowDown } from "react-icons/bs";

export const Navbar = () => {
  const [dropOne, setDropOne] = React.useState("none");
  const [dropTwo, setDropTwo] = React.useState("none");
  const [dropThree, setDropThree] = React.useState("none");

  const [innerOne, setInnerOne] = React.useState(false);
  const [innerTwo, setInnerTwo] = React.useState(false);
  const [innerThree, setInnerThree] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

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
          padding: { xs: "1rem 0", md: "4rem 0" },
          background: { xs: "#2f9eff", md: "transparent" },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: { xs: "white", md: "#000" },
                fontSize: "2.2rem",
                fontWeight: "400",
                marginBottom: "0.5rem",
                marginLeft: "-0.3rem",
                fontFamily: "Work Sans, sans-serif",
              }}
            >
              Atomic
            </Typography>
            {toggle ? (
              <CloseIcon
                onClick={() => setToggle(!toggle)}
                sx={{
                  width: "3.5rem",
                  height: "3.5rem",
                  display: { sx: "block", md: "none" },
                  cursor: "pointer",
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => setToggle(!toggle)}
                sx={{
                  width: "3.5rem",
                  height: "3.5rem",
                  display: { sx: "block", md: "none" },
                  cursor: "pointer",
                }}
              />
            )}

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
                      display: { xs: "none", md: "flex" },
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
                                                boxShadow:
                                                  "0 1px 2px 0 rgb(0 0 0 / 20%)",
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
      {toggle && (
        <Box
          sx={{
            width: "100%",
            // padding: "2rem 0",
            height: "max-content",
            background: "#595959",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "50rem",
              width: "100%",
              height: "max-content",
              background: "#595959",
              margin: "auto",
            }}
          >
            {navData.map(
              ({ id, name, icon = false, Active = false, subMenu }) => {
                return (
                  <Box
                    key={id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      // width: "100%",
                      paddingRight: "2rem",
                      marginLeft: "1.6rem",
                      marginRight: "0.8rem",
                      marginBottom: icon ? "1.4rem" : "0.4rem",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: Active ? "#000" : "",
                        fontSize: "1.28rem",
                        padding: "1rem 0.5rem",
                        letterSpacing: "0.15rem",
                        lineHeight: "1.5",
                        fontFamily: "Work Sans, sans-serif",
                      }}
                    >
                      {name}
                    </Typography>
                    {icon && (
                      <KeyboardArrowDownIcon
                        onClick={() => setInnerOne(!innerOne)}
                        sx={{
                          marginBottom: "0.3rem",
                          marginRight: "-0.8rem",
                          marginTop: "-3rem",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                    {innerOne && (
                      <Box
                        sx={{
                          position: "relative",
                          background: "inherit",
                          width: "100%",
                          height: "max-content",
                          borderRadius: ".4rem",
                          marginLeft: "2rem",
                          marginTop: "1rem",
                        }}
                      >
                        {subMenu?.map(({ name, subIcon, subSubMenu }) => {
                          return (
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: "space-between",
                                flexDirection: "column",
                                // alignItems: "center",
                                padding: "0 2rem",
                                marginTop: "0.4rem"
                              }}
                              >
                              <Typography
                                sx={{
                                  padding: "0.4rem",
                                  fontSize: "1.4rem",
                                  color: "white",
                                  fontFamily: "Work Sans, sans-serif",
                                  fontWeight: "400",
                                }}
                                >
                                {name}
                              </Typography>
                              {subIcon && (
                                <KeyboardArrowDownIcon
                                onClick={() => setInnerTwo(!innerTwo)}
                                sx={{
                                  marginBottom: "0.3rem",
                                  marginRight: "-0.8rem",
                                  marginLeft: "auto",
                                  marginTop: "-2.2rem",
                                }}
                                />
                                )}
                              {innerTwo && (
                                <Box
                                sx={{
                                  position: "relative",
                                  background: "inherit",
                                  width: "100%",
                                  zIndex: "2",
                                  height: "max-content",
                                  marginLeft: "2rem",
                                  borderRadius: ".4rem",
                                    
                                  }}
                                >
                                  {subSubMenu?.map(
                                    ({ name, subSubIcon, subSubSubMenu }) => {
                                      return (
                                        <Box
                                          sx={{
                                            display: `flex`,
                                            justifyContent: "space-between",
                                            flexDirection: " column",
                                            paddingRight: "1rem",
                                            marginBottom: "0.4rem",
                                            marginLeft: "2rem"
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              padding: "0.4rem",
                                              fontSize: "1.4rem",
                                              color: "white",
                                              fontFamily:
                                                "Work Sans, sans-serif",
                                              fontWeight: "400",
                                            }}
                                          >
                                            {name}
                                          </Typography>
                                          {subSubIcon && (
                                            <KeyboardArrowDownIcon
                                              onClick={() =>
                                                setInnerThree(!innerThree)
                                              }
                                              sx={{
                                                marginBottom: "0.3rem",
                                                // marginRight: "-2.3rem",
                                                marginLeft: "auto",
                                                marginTop: "-3rem",
                                              }}
                                            />
                                          )}
                                          {innerThree && (
                                            <Box
                                              sx={{
                                                position: "relative",
                                                background: "inherit",
                                                width: "17rem",
                                                zIndex: "4",
                                                height: "max-content",
                                                borderRadius: ".4rem",
                                                marginLeft: "4rem",
                                                // paddingTop: "1rem"
                                              }}
                                            >
                                              {subSubSubMenu?.map(({ name }) => {
                                                return (
                                                  <Box
                                                    sx={{
                                                      display: `flex`,
                                                      justifyContent:
                                                        "space-between",
                                                      alignItems: "center",
                                                      paddingRight: "1rem",
                                                      background: "inherit",
                                                      marginTop: "0.6rem"
                                                    }}
                                                  >
                                                    <Typography
                                                      sx={{
                                                        padding: "0.4rem",
                                                        fontSize: "1.4rem",
                                                        color: "white",
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
          </Box>
        </Box>
      )}
    </Box>
  );
};
