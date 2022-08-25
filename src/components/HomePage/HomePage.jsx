import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10c21dc4/images/Fall2022/boc-launch-prospects_hm_0.gif?yocs=s_" />
      </Box>
      <Box p={5}>
        <Box h="400px">
          <Text align="center" fontSize="3xl" mb={5}>
            TODAY'S TOP OFFERS
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="300" bg="blue.500">
              <Text>Today Only!</Text>
            </GridItem>
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
          </Grid>
        </Box>
      </Box>
      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw45ce316f/images/Fall2022/bc_sweaterweather_fa1_hm.jpg?yocs=s_" />
      </Box>
      <Box p={5}>
        <Box h="400px">
          <Text align="center" fontSize="3xl" mb={5}>
            TODAY'S TOP OFFERS
          </Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            <GridItem h="300" bg="blue.500">
              <Text>Today Only!</Text>
            </GridItem>
            <GridItem h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
            <GridItem w="100%" h="300" bg="blue.500" />
          </Grid>
        </Box>
      </Box>
      <Box align="center">
        <VStack>
          <Text fontSize="3xl">NEW Midnight Amber Glow</Text>

          <Text w="40%" align="center">
            Our unique blend of smooth amber, vanilla bourbon and caramel latte
            is so rich, you can almost taste it.
          </Text>

          <Box rounded="false" pl={10} pr={10}>
            SHOP THE COLLECTION
          </Box>
        </VStack>
      </Box>

      <Box mt={10} p={5}>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
          <Box bg="tomato" height="500px"></Box>
          <Box bg="tomato" height="500px"></Box>
          <Box bg="tomato" height="500px"></Box>
          <Box bg="tomato" height="500px"></Box>
          <Box bg="tomato" height="500px"></Box>
          <Box bg="tomato" height="500px"></Box>
        </SimpleGrid>
      </Box>

      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_" />
      </Box>

      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_" />
      </Box>

      <Box p={5}>
        <SimpleGrid columns={[2, 2, 3, 6]} spacing={5}>
          <Box rounded="false">TOP COLLECTION</Box>
          <Box rounded="false">TOP COLLECTION</Box>
          <Box rounded="false">TOP COLLECTION</Box>
          <Box rounded="false">TOP COLLECTION</Box>
          <Box rounded="false">TOP COLLECTION</Box>
          <Box rounded="false">TOP COLLECTION</Box>
        </SimpleGrid>
      </Box>
      <Text align="center" fontSize="3xl">
        MORE GOOD THINGS, THIS WAY
      </Text>

      <Box p={5}>
        <SimpleGrid columns={[2, 2, 3, 6]} spacing={10}>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_"
            />
            <Text fontSize="16px">Shop—it’s fast, free, easy</Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_"
            />
            <Text fontSize="16px">Sign up for texts</Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_"
            />
            <Text fontSize="16px">Sign up for emails</Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_"
            />
            <Text fontSize="16px">Checkout for auto refresh</Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_"
            />
            <Text fontSize="16px">join the VIPs</Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_"
            />
            <Text fontSize="16px">See the return policy</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mt="10">
        <Flex align="center" justify="center" gap={2}>
          <IconButton borderRadius="50%" icon={<FaInstagram />} />
          <Text>@BATHANDBODYWORKS</Text>
        </Flex>
      </Box>
    </>
  );
}

export default HomePage;
