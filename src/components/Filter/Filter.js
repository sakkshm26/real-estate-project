import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";

const Filter = ({ property, list, setList }) => {
  const [searchValue, setSearchValue] = useState("SearchBar");
  const [value, setValue] = useState(
    property === "When"
      ? "Select Move-in Date"
      : property === "Price"
      ? "$500 - $2,500"
      : "House"
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ padding: "10px 20px", width: "200px" }}>
      <Typography sx={{ fontWeight: "600", color: "#9b9b9b", fontSize: 15 }}>
        {property}
      </Typography>
      {property === "Location" ? (
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: "700",
            marginTop: "8px",
            marginBottom: "7px",
          }}
        >
          Search with search bar
        </Typography>
      ) : (
        <FormControl sx={{ width: "230px" }}>
          {property === "When" ? (
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                height: "40px",
                marginLeft: "-14px",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={"Select Move-in Date"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  Select Move-in Date
                </Typography>
              </MenuItem>
              <MenuItem value={"Any"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  Any
                </Typography>
              </MenuItem>
            </Select>
          ) : property === "Price" ? (
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                height: "40px",
                marginLeft: "-14px",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={value}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  {value}
                </Typography>
              </MenuItem>
              <MenuItem value={"$2,500 - $5,000"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  $2,500 - $5,000
                </Typography>
              </MenuItem>
              <MenuItem value={"$5,000 - $10,000"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  $5,000 - $10,000
                </Typography>
              </MenuItem>
              <MenuItem value={"$10,000 +"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  $10,000 +
                </Typography>
              </MenuItem>
            </Select>
          ) : (
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                height: "40px",
                marginLeft: "-14px",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={value}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  {value}
                </Typography>
              </MenuItem>
              <MenuItem value={"Flat"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  Flat
                </Typography>
              </MenuItem>
            </Select>
          )}
        </FormControl>
      )}
    </Box>
  );
};

export default Filter;
