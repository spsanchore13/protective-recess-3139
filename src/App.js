// import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";
import HomePage from "./components/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar";

function App() {
  return (
    <Box className="App">
      <Topbar />
      <Navbar />
      <HomePage />
    </Box>
  );
}

export default App;
