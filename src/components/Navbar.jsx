import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Todo App
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;