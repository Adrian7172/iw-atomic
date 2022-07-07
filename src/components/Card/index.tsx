import { Box, Typography } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";

interface define {
  store: IconType;
}
const Card = ({
  icon,
  heading,
  subHeading,
  BoxStyle,
  iconStyle,
  headingStyles,
  subHeadingStyles,
}: {
  icon: IconType;
  heading: string;
  subHeading: string;
  BoxStyle: object;
  iconStyle: object;
  headingStyles: object;
  subHeadingStyles: object;
}) => {
  const store: define = { store: icon };
  return (
    <Box sx={BoxStyle}>
      <store.store style={iconStyle} />
      <Typography sx={headingStyles}>{heading}</Typography>

      <Typography sx={subHeadingStyles}>
        {subHeading}
      </Typography>
    </Box>
  );
};

export default Card;
