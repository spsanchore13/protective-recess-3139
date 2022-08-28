import { RepeatIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { AppContext } from "../../Contexts/AppContext";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function UserMenu() {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSinUpVisible, setSinUpVisible] = useState(false);
  return (
    <>
      <Menu>
        <MenuButton
          borderRadius="50%"
          as={IconButton}
          aria-label="Options"
          icon={<FaUser />}
          variant="outline"
        />
        <MenuList>
          {isAuth ? (
            <MenuItem icon={<FaUser />} onClick={() => setIsAuth(false)}>
              Log Out
            </MenuItem>
          ) : (
            <MenuItem icon={<FaUser />} onClick={() => setLoginVisible(true)}>
              Login
            </MenuItem>
          )}

          {isAuth ? null : (
            <MenuItem icon={<FaUser />} onClick={() => setSinUpVisible(true)}>
              Sign Up
            </MenuItem>
          )}

          <MenuItem icon={<FaLocationArrow />}>Order Tracking</MenuItem>
          <MenuItem icon={<RepeatIcon />}>My Auto Refresh</MenuItem>
        </MenuList>
      </Menu>
      <LoginPage isOpen={isLoginVisible} setIsOpen={setLoginVisible} />
      <SignUpPage isOpen={isSinUpVisible} setIsOpen={setSinUpVisible} />
    </>
  );
}

export default UserMenu;
