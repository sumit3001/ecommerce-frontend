import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as lee } from "react-router-dom";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Covers-Cart
            </Text>
            <br />{" "}
            <Text color={"red.400"} as={"span"}>
              Cover's 4 SmartPhone
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Purchase the Cover for your SmartPhone you Love the most!!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link to={"/shop"} as={lee}>
              <Button
                rounded={"full"}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.400",
                }}
              >
                Shop Now
              </Button>{" "}
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Cover Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
        />
      </Flex>
    </Stack>
  );
}
