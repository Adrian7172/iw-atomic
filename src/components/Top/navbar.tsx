import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

export const Navbar = () => {
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
            {navData.map(({ id, name, icon = false, Active = false }) => {
              return (
                <Box
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
                      color: Active ? "#000": "",
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
                        marginRight: "-0.8rem"
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
