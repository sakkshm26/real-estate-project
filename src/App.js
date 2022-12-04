import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
