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

function SignUpPage(props) {
  console.log(props);
  const { isOpen, setIsOpen } = props;
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" />
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
              <FormLabel>Phone No</FormLabel>
              <Input placeholder="Phone No" />
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUpPage;
