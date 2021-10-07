import React from "react";
import { Flex, Heading, Button, Box, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box p={3}>
      <Flex alignItems="center" justifyContent="center">
        <Box>
          <Heading size="xl">Logo</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="purple">Dashboard</Button>
        </Box>
      </Flex>
    </Box>
  );
}
