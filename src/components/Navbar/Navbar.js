import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Navbar = ({ toggleDrawer }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "white", height: "100vh" }}
    >
      <List>
        <Typography
          sx={{
            color: "#5050cb",
            backgroundColor: "#e3e3fb",
            padding: "5px 12px",
            borderRadius: "2px",
            margin: "5px 70px",
          }}
        >
          Rent
        </Typography>
        <Typography sx={{ margin: "5px 0" }}>Buy</Typography>
        <Typography sx={{ margin: "7px 0" }}>Sell</Typography>
        <Typography sx={{ margin: "7px 0" }}>ManageProperty</Typography>
        <Typography sx={{ margin: "7px 0" }}>Resources</Typography>
        <Typography
          sx={{
            fontSize: 15,
            "&:hover": { cursor: "pointer" },
            padding: "7px 0",
            margin: "12px 70px",
            color: "#6f6fe3",
            borderRadius: 1,
            border: "1px solid #d1d1d1",
          }}
        >
          Login
        </Typography>
        <PrimaryButton name="Sign Up" />
      </List>
    </Box>
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 40) {
        document.getElementById("navbar").classList.add("navbar");
      } else {
        document.getElementById("navbar").classList.remove("navbar");
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container =
    global.window !== undefined ? () => global.window.document.body : undefined;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        padding: "10px 20px",
        borderBottom: "1px solid #e7e7e7",
      }}
      id="navbar"
    >
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="sticky"
          top={0}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeIcon sx={{ color: "#6f6fe3", marginRight: "5px" }} />
              <Typography sx={{ fontWeight: "600" }}>Estatery</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginLeft: 8,
                justifyContent: "space-between",
                alignItems: "center",
                width: "430px",
              }}
            >
              <Typography
                sx={{
                  color: "#5050cb",
                  backgroundColor: "#e3e3fb",
                  padding: "5px 12px",
                  borderRadius: "2px",
                }}
              >
                Rent
              </Typography>
              <Typography>Buy</Typography>
              <Typography>Sell</Typography>
              <Typography>ManageProperty</Typography>
              <Typography>Resources</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: 15,
                "&:hover": { cursor: "pointer" },
                margin: "0 25px",
                padding: "8px 20px",
                color: "#6f6fe3",
                borderRadius: 1,
                border: "1px solid #d1d1d1",
              }}
            >
              Login
            </Typography>
            <PrimaryButton name="Sign Up" />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HomeIcon sx={{ color: "#6f6fe3", marginRight: "5px" }} />
            <Typography sx={{ fontWeight: "600" }}>Estatery</Typography>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
