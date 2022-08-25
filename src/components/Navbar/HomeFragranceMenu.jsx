import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export default function HomeFragranceMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton variant="link" onMouseEnter={onOpen} onMouseLeave={onClose}>
        HOME FRAGRENCE
      </MenuButton>
      <MenuList w="100vw" h="50vh" onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
