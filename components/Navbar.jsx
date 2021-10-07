import { Flex, Heading, Button, Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box p={3}>
      <Flex alignItems="center" justifyContent="center">
        <Box>
          <Heading size="xl">Logo</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link href="/" passHref>
            <Button colorScheme="purple" mr={3}>
              Home
            </Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button colorScheme="purple">Dashboard</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
