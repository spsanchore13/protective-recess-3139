import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Img,
  // useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Topbar from "./Topbar";
import TopOfferMenu from "./TopOfferMenu";
export function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // console.log(colorMode);
  // const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <Flex mb={50}>
        <Flex position="fixed" top="1rem" left="1rem" w="90%">
          <IconButton
            aria-label="Open Menu"
            mr={2}
            size="lg"
            onClick={() => changeDisplay("flex")}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
          />
          <Img
            display={["flex", "flex", "none", "none"]}
            position="absolute"
            left="5rem"
            top="0.7rem"
            w="300px"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
          />
        </Flex>
      </Flex>

      {/* {Mobile } */}

      <Flex>
        <Flex
          w="50vw"
          display={display}
          bgColor="gray.500"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex mb={10}>
            <IconButton
              position="fixed"
              top="1rem"
              left="1rem"
              aria-label="Open Menu"
              mr={2}
              size="lg"
              variant="outline"
              _hover={{ bgColor: "none" }}
              onClick={() => changeDisplay("none")}
              icon={<CloseIcon />}
            />
          </Flex>
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>

          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            About
          </Button>

          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            Contact
          </Button>
          <TopOfferMenu />
        </Flex>
      </Flex>
    </>
  );
}
