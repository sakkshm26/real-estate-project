import { Box, Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ name }) => {
  return (
    <Button
      sx={{
        padding: "15px",
        backgroundColor: "#6f6fe3",
        width: "100px",
        height: "40px",
        color: "white",
        textTransform: "none",
        "&:hover": {
          color: "white",
          backgroundColor: "#6060f7",
        },
      }}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
