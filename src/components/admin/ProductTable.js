import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";

const ProductTable = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="purple">
        <TableCaption>Product</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products === 0
            ? "No Products"
            : products.map(({ name, description }) => (
                <Tr>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                  <Td>
                    <Stack spacing={4} direction="row" align="center">
                      <Button colorScheme="teal" size="md">
                        Edit
                      </Button>
                      <Button colorScheme="teal" size="md">
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
