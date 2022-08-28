import { Box, Container } from "@chakra-ui/react";
import React from "react";

function SideNavigation() {
  return (
    <Container display={["none", "none", "flex", "flex"]}>
      <Box>Product Navigation</Box>
    </Container>
  );
}

export default SideNavigation;
