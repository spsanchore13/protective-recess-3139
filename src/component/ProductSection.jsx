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
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function ProductSection({ product }) {
  const { setCartProduct, cartProduct } = useContext(AppContext);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(data));
  // }, [data]);

  const handleAdd = (item) => {
    // setData([...data, item]);
    setCartProduct([...cartProduct, item]);
  };

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
                <Img
                  boxSize="200px"
                  src={item.api_featured_image}
                  alt="Not Found"
                />
                <Text>Name: {item.name}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.product_type}</Text>
                <Text>Price: {item.price} $</Text>
                <Button onClick={() => handleAdd(item)}>Add To Cart</Button>
              </VStack>
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
}

export default ProductSection;
