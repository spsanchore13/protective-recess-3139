// import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";

import Topbar from "./components/Navbar/Topbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box className="App">

      <AllRoutes />
      <Topbar />

    </Box>
  );
}

export default App;
