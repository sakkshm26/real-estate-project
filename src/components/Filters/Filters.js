import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Filter from "../Filter/Filter";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { property_list } from "../../const/list";
import DatePicker from "react-multi-date-picker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Filters = ({ setList }) => {
  const [location, setLocation] = useState("New York");
  const [price, setPrice] = useState("$0 - $2,500");
  const [propertyType, setPropertyType] = useState("House");
  const [dates, setDates] = useState(new Date());

  const changeLocation = (event) => {
    setLocation(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const changePropertyType = (event) => {
    setPropertyType(event.target.value);
  };

  const handleSearch = () => {
    let tempList = property_list;

    if (location === "New York") {
      tempList = tempList.filter((item) => item.location === "New York");
    } else {
      tempList = tempList.filter((item) => item.location === "California");
    }

    tempList = tempList.filter((item) =>
      dates.length
        ? dates[0].day >= item.from && dates[0].day <= item.to
        : new Date().getDate() >= item.from && new Date().getDate() <= item.to
    );

    if (price === "$0 - $2,500") {
      tempList = tempList.filter(
        (item) => item.price >= 0 && item.price < 2500
      );
    } else if (price === "$2,500 - $5,000") {
      tempList = tempList.filter(
        (item) => item.price >= 2500 && item.price < 5000
      );
    } else if (price === "$5,000 - $10,000") {
      tempList = tempList.filter(
        (item) => item.price >= 5000 && item.price < 10000
      );
    } else {
      tempList = tempList.filter((item) => item.price >= 10000);
    }

    if (propertyType === "House") {
      tempList = tempList.filter((item) => item.type === "house");
    } else {
      tempList = tempList.filter((item) => item.type === "flat");
    }

    setList(tempList);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginTop: 5,
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          // flexDirection: { xs: "column", lg: "row" }
        }}
      >
        <Box sx={{ padding: "10px 20px", width: "200px" }}>
          <Typography
            sx={{ fontWeight: "600", color: "#9b9b9b", fontSize: 15 }}
          >
            Location
          </Typography>
          <FormControl sx={{ width: "230px" }}>
            <Select
              value={location}
              onChange={changeLocation}
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
              <MenuItem value={"New York"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  New York, USA
                </Typography>
              </MenuItem>
              <MenuItem value={"California"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  California, USA
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            borderLeft: "1px solid #d1d1d1",
            height: "40px",
          }}
        ></Box>

        <Box sx={{ padding: "10px 20px", width: "200px" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#9b9b9b",
              fontSize: 15,
              marginBottom: "6px",
            }}
          >
            When
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <DatePicker
              style={{ width: "120px", fontWeight: "600" }}
              value={dates}
              onChange={setDates}
              multiple={true}
              minDate={"2022-12-04T14:07:04.749Z"}
              maxDate={"2022-12-18T14:07:04.749Z"}
            />
            <CalendarMonthIcon sx={{ color: "#6f6fe3" }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            borderLeft: "1px solid #d1d1d1",
            height: "40px",
          }}
        ></Box>

        <Box sx={{ padding: "10px 20px", width: "200px" }}>
          <Typography
            sx={{ fontWeight: "600", color: "#9b9b9b", fontSize: 15 }}
          >
            Price
          </Typography>
          <FormControl sx={{ width: "230px" }}>
            <Select
              value={price}
              onChange={changePrice}
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
              <MenuItem value={"$0 - $2,500"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  $0 - $2,500
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
          </FormControl>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            borderLeft: "1px solid #d1d1d1",
            height: "40px",
          }}
        ></Box>

        <Box sx={{ padding: "10px 20px", width: "200px" }}>
          <Typography
            sx={{ fontWeight: "600", color: "#9b9b9b", fontSize: 15 }}
          >
            Property Type
          </Typography>
          <FormControl sx={{ width: "230px" }}>
            <Select
              value={propertyType}
              onChange={changePropertyType}
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
              <MenuItem value={"House"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  House
                </Typography>
              </MenuItem>
              <MenuItem value={"Flat"}>
                <Typography sx={{ fontSize: 17, fontWeight: "700" }}>
                  Flat
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            borderLeft: "1px solid #d1d1d1",
            height: "40px",
          }}
        ></Box>

        <Box sx={{ display: { xs: "none", lg: "block" } }}>
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
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
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
            margin: "20px 0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
