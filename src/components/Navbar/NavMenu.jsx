import { Flex } from "@chakra-ui/react";

import UserMenu from "../UserMenu/UserMenu";
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
  return (
    <>
      <Flex
        justify="center"
        gap={10}
        display={["none", "none", "flex", "flex"]}
        p={5}
      >
        <TopOfferMenu />
        <BodyCareMenu />
        <CandleMenu />
        <HomeFragranceMenu />
        <HandSoapAndSanitizersMenu />
        <MensMenu />
        <GiftsMenu />
        <FallShopMenu />
        <DarkModeBtn />
        <UserMenu />
      </Flex>
    </>
  );
}

export default NavMenu;
