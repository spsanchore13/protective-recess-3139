import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { totalItems, totalPrice } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/otp");
  };

  return (
    <>
      <Stack pt={50} pb={100}>
        <Breadcrumb fontWeight="medium" fontSize="sm" p={5}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid columns={[1, 2, 2, 2, 2]} p={5} spacing={5}>
          <FormControl w="85%" border="1px" borderColor="pink.500" p={5}>
            <Stack spacing={5}>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" />
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
              <FormLabel>Address 1</FormLabel>
              <Input placeholder="Address 1..." />
              <FormLabel>Address 2</FormLabel>
              <Input placeholder="Address 2..." />
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
              <FormLabel>Payment Option</FormLabel>
              <Select placeholder="Select Payment Method">
                <option>COD</option>
                <option>UPI</option>
                <option>Paypal</option>
              </Select>
              <Input
                _hover={{ bgColor: "red.500", cursor: "pointer" }}
                variant="solid"
                bgColor="pink.500"
                type="submit"
                value="Pay"
                onClick={handleSubmit}
              />
            </Stack>
          </FormControl>

          <VStack border="1px" borderColor="pink.500" p={5}>
            <Text fontSize="3xl">Checkout Details</Text>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_" />

            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw925906e6/images/Fall2022/midnight-amber-glow-gwp_fa1_hm_to.jpg?yocs=s_" />

            <Text fontSize="2xl" color="red.600">
              Total Items : {totalItems} items in your cart
            </Text>
            <Text fontSize="2xl" color="pink.500">
              Total Price : {totalPrice} $
            </Text>
          </VStack>
        </SimpleGrid>
      </Stack>
    </>
  );
}

export default CheckoutPage;
