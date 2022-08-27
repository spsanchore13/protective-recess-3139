import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function CartPage() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  //   console.log(cart);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>ITEM</Th>
            <Th>PRICE</Th>
            <Th>QTY</Th>
            <Th>TOTAL PRICE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart &&
            cart.map((item) => (
              <Tr>
                <Td>{item.image_link}</Td>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.price}</Td>
                <Td>{item.price}</Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default CartPage;
