// import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";

import Topbar from "./components/Navbar/Topbar";
import AllRoutes from "./Routes/AllRoutes";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Box className="App">

      <AllRoutes />
      <Topbar />
      <HomePage />

    </Box>
  );
}

export default App;
