import { Menu, MenuButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TopOfferMenu() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        onClick={() => navigate("/product")}
        variant="link"
        fontWeight="normal"
      >
        TOP OFFERS
      </MenuButton>
      {/* <MenuList w="100vw" h="50vh" onMouseEnter={onOpen} onMouseLeave={onClose}>
    //     <MenuItem>Menu Item 1c</MenuItem>
    //     <MenuItem>Menu Item 2</MenuItem>
    //     <MenuItem>Menu Item 3</MenuItem>
    //   </MenuList> */}
    </Menu>
  );
}
