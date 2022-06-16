import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/product";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stickerPrice, setStickerPrice] = useState("");
  const [markedPrice, setMarkedPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(0);
  const [color, setColor] = useState("");
  const [compatibleWith, setCompatibleWith] = useState("");

  const dispatch = useDispatch();

  const getCategories = async () => {
    const res = await axios.get("http://localhost:8080/category/all");
    const { categories } = res.data.data;
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handelAdd = () =>
    dispatch(
      addProduct({
        name,
        description,
        stickerPrice,
        markedPrice,
        category,
        image,
        stock,
        color,
        compatibleWith}
      )
    );

  return (
    <Box m={4} w="50%">
      <Heading>Add Product</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Product Name</FormLabel>
        <Input onChange={(e) => setName(e.target.value)} type="text" />
        <FormLabel>Product Description</FormLabel>
        <Input onChange={(e) => setDescription(e.target.value)} type="text" />
        <FormLabel>Product Actual Price</FormLabel>
        <Input onChange={(e) => setStickerPrice(e.target.value)} type="text" />
        <FormLabel>Product Listed Price</FormLabel>
        <Input onChange={(e) => setMarkedPrice(e.target.value)} type="text" />
        <FormLabel>Select Category</FormLabel>
        <Select
          onChange={(e) => {
            console.log(e.target.value);
            const { _id } = categories.find(
              (category) => category.name === e.target.value
            );
            setCategory(_id);
          }}
          placeholder="Select product's category"
        >
          {categories &&
            categories.map((category) => {
              return <option id={category._id}>{category.name}</option>;
            })}
        </Select>
        <FormLabel>Product Image</FormLabel>
        <Input onChange={(e) => setImage(e.target.value)} type="text" />
        <FormLabel>Product Stock</FormLabel>
        <Input onChange={(e) => setStock(e.target.value)} type="text" />
        <FormLabel>Product Color</FormLabel>
        <Input onChange={(e) => setColor(e.target.value)} type="text" />
        <FormLabel>Compatible With</FormLabel>
        <Select
          onChange={(e) => setCompatibleWith(e.target.value)}
          placeholder="Select compatible with"
        >
          <option id={"Iphone"}>Iphone</option>
          <option id={"Samsung"}>Samsung</option>
          <option id={"Vivo"}>Vivo</option>
          <option id={"Realme"}>Realme</option>
        </Select>
      </FormControl>
      <Button onClick={handelAdd} marginTop={4} colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
};

export default AddProduct;
