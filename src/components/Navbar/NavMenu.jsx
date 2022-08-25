import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import BodyCareMenu from "./BodyCareMenu";
import CandleMenu from "./CandleMenu";
import { DarkModeBtn } from "./DarkMode";
import FallShopMenu from "./FallShopMenu";
import GiftsMenu from "./GiftsMenu";
import HandSoapAndSanitizersMenu from "./HandSoapSanitizers";
import HomeFragranceMenu from "./HomeFragranceMenu";
import MensMenu from "./MensMenu";
import TopOfferMenu from "./TopOfferMenu";

function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="center" gap={10} display={["none", "none", "flex", "flex"]}>
      <TopOfferMenu />
      <BodyCareMenu />
      <CandleMenu />
      <HomeFragranceMenu />
      <HandSoapAndSanitizersMenu />
      <MensMenu />
      <GiftsMenu />
      <FallShopMenu />
      <DarkModeBtn />
    </Flex>
  );
}

export default NavMenu;
