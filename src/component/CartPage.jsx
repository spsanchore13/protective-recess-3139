import {
  Button,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function CartPage() {
  const { cartProduct, setTotalPrice, setTotalItems } = useContext(AppContext);

  const navigate = useNavigate();
  // console.log("cartProduct:", cartProduct);
  // const [item, setitem] = useState([]);

  // useEffect(() => {
  //   const product = JSON.parse(localStorage.getItem("product"));
  //   if (product) {
  //     setitem(product);
  //   }
  //  }, []);

  // const [cartData, setCartData] = useState([]);
  // setCartData(cartProduct);

  let total = cartProduct.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);
  setTotalItems(cartProduct.length);
  setTotalPrice(total);

  const handleDelete = (id) => {
    // let filt = cartProduct.filter((item) => {
    //   if (id !== item.id) {
    //     return item;
    //   }
    // });
    // setCartData(filt);
  };

  return (
    <TableContainer mt={100} mb={20}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize="2xl">ITEM</Th>
            <Th fontSize="2xl">Name</Th>
            <Th fontSize="2xl">QTY</Th>
            <Th fontSize="2xl">PRICE</Th>
            <Th fontSize="2xl">REMOVE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartProduct &&
            cartProduct.map((item) => (
              <Tr>
                <Td>
                  <Img boxSize="150px" src={item.image_link} />
                </Td>
                <Td>{item.name}</Td>
                <Td>1</Td>
                <Td>{item.price}</Td>
                <Td>
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th fontSize="2xl">Total Items: {cartProduct.length}</Th>
            <Th fontSize="2xl">Be Happy👏</Th>
            <Th fontSize="2xl">Price Total: {total} $</Th>
            <Th fontSize="2xl">
              <Button onClick={() => navigate("/checkout")}>Checkout</Button>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default CartPage;
