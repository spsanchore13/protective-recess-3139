import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function DarkModeBtn() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      ml={8}
      icon={isDark ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      isRound="true"
    ></IconButton>
  );
}
