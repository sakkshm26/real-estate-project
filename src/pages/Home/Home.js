import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { property_list } from "../../const/list";

const Home = () => {
  const [value, setValue] = useState("SearchBar");
  const [list, setList] = useState(property_list);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ padding: { xs: "0 10px", md: "0 80px" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          sx={{ fontSize: "30px", fontWeight: "700", textAlign: "center" }}
        >
          Search properties to rent
        </Typography>
        <FormControl sx={{ width: "250px", marginTop: { xs: 3, sm: 0 } }}>
          <Select
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "40px" }}
          >
            <MenuItem value={"SearchBar"}>Search with search bar</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Filters setList={setList} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "40px 0",
        }}
      >
        {list.length ? (
          list.map((property, id) => (
            <PropertyCard key={id} property={property} />
          ))
        ) : (
          <Typography sx={{ fontSize: 20, marginTop: 4 }}>
            No matching results
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Home;
