import {
  Box,
  Button,
  Divider,
  HStack,
  Img,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CartPage from "./CartPage";

function ProductSection({ product }) {
  // console.log(product);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const handleAdd = (item) => {
    // console.log(item);
    setCart([...cart, item]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <SimpleGrid p={5}>
        <HStack>
          <Text fontSize="3xl">ALL BODY CARE</Text>
          <Spacer />
          <Text>Pagination</Text>
        </HStack>
        <Divider mt={2} />
        <Box mt={5}>
          <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_" />
        </Box>
        <SimpleGrid mt={5} columns={[2, 3, 4, 4]} spacing={5}>
          <Button>ALL BODY CARE</Button>
          <Button>FRAGRANCE </Button>
          <Button>BATH & SHOWER</Button>
          <Button>MOISTURIZERS </Button>
          <Button>AROMATHERAPY </Button>
          <Button>MEN'S </Button>
        </SimpleGrid>
        <HStack mt={10} justify="center">
          <Text>FILTER BY:</Text>
          <SimpleGrid columns={[2, 3, 4, 4]} spacing={5}>
            <Select placeholder="Product Type">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Fragrance Name">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Fragrance Category">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Sort By">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </SimpleGrid>
        </HStack>
        <Divider mt={5} mb={2} />
        <Text ml={5}>SHOP YOUR STORE: set store</Text>
        <Divider mt={2} />
      </SimpleGrid>
      <SimpleGrid columns={[2, 3, 4, 4]} spacing={5} p={5}>
        {product &&
          product.map((item) => (
            <Box key={item.id}>
              <VStack>
                <Img src={item.image_link} alt="Not Found" />
                <Text>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text>{item.product_type}</Text>
                <Text>{item.price}</Text>
                <Button onClick={() => handleAdd(item)}>Add To Cart</Button>
              </VStack>
            </Box>
          ))}
      </SimpleGrid>
      <CartPage />
    </>
  );
}

export default ProductSection;
