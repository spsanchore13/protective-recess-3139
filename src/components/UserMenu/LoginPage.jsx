import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../Contexts/AppContext";

function fetchUser(user) {
  // console.log(user);
  return axios.post("https://reqres.in/api/login", user);
}

function LoginPage(props) {
  const { setToken, setIsAuth } = useContext(AppContext);
  const { isOpen, setIsOpen } = props;
  const onClose = () => {
    setIsOpen(false);
  };

  const [user, setUser] = useState({
    email: "eve.holt@reqres.in",
    password: "eve.holt@reqres.in",
  });

  const handleClick = (e) => {
    e.preventDefault();
    fetchUser(user).then((res) => {
      setToken(res.data.token);
      setIsAuth(true);
      setIsOpen(false);
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>First Email</FormLabel>
              <Input
                name="email"
                value={user.email}
                onChange={handleChange}
                type="email"
                placeholder="First name"
              />
              <FormLabel>Enter Password</FormLabel>
              <Input
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
                placeholder="First name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginPage;
