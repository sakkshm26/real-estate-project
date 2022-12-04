import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import BathroomIcon from "@mui/icons-material/Bathroom";
import RepeatIcon from "@mui/icons-material/Repeat";

const PropertyCard = ({ property }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        margin: "20px 0",
        boxShadow: "0px 0px 21px -9px #858585",
        borderRadius: 2,
        width: { xs: "100%", sm: "350px" },
      }}
    >
      {property ? (
        <Box>
          <Box
            component="img"
            src={require(`../../assets/${property.image}`)}
            sx={{
              height: "250px",
              width: { xs: "100%", sm: "350px" },
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: { xs: "15px 10px", md: "15px 20px" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ color: "#9b9b9b", fontWeight: "600" }}>
                <Typography
                  component="span"
                  sx={{ fontSize: 20, fontWeight: "700", color: "#6f6fe3" }}
                >
                  ${property.price.toLocaleString()}
                </Typography>{" "}
                /month
              </Typography>
              <FavoriteBorderIcon sx={{ color: "#6f6fe3" }} />
            </Box>
            <Typography
              sx={{ fontSize: 20, fontWeight: "700", margin: "5px 0" }}
            >
              {property.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "600", fontSize: 15, color: "#9b9b9b" }}
            >
              {property.address}
            </Typography>
            <Box
              sx={{ borderTop: "1px solid #d1d1d1", margin: "13px 0" }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BedIcon sx={{ color: "#6f6fe3", marginRight: "6px" }} />
                <Typography
                  sx={{ fontSize: "14px", color: "#9b9b9b", fontWeight: "600" }}
                >
                  {property.beds} beds
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BathroomIcon sx={{ color: "#6f6fe3", marginRight: "6px" }} />
                <Typography
                  sx={{ fontSize: "14px", color: "#9b9b9b", fontWeight: "600" }}
                >
                  {property.bathrooms} bathrooms
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <RepeatIcon sx={{ color: "#6f6fe3", marginRight: "6px" }} />
                <Typography
                  sx={{ fontSize: "14px", color: "#9b9b9b", fontWeight: "600" }}
                >
                  {property.area} m<sup>2</sup>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default PropertyCard;
