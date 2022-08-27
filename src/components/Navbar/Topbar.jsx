import { Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import Topbar2 from "./Topbar2";
function Topbar() {
  return (
    <>
      {" "}
      <Flex
        bgColor="#f2f2f2"
        align="center"
        h="30px"
        w="100%"
        gap={3}
        pl={5}
        pr={5}
        display={["none", "none", "flex", "flex"]}
      >
        <Text color="pink.500">POINTS.PERKS.EXCLUSIVES</Text>
        <Link to="/home">Join Rewards!</Link>
        <Spacer />
        <FaMapMarkerAlt />
        <Text>PICK UP IN STORE</Text>
        <Link to="/home">Set Store</Link>
      </Flex>
      <Topbar2 />
    </>
  );
}

export default Topbar;
