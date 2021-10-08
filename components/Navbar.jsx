import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box p={3} w="full">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading color="purple.400" size="xl">
            Phonepedia
          </Heading>
        </Box>
        <Box>
          <Flex>
            <Link href="/" passHref>
              <Text
                fontWeight="normal"
                fontSize="lg"
                cursor="pointer"
                colorScheme="purple"
                _hover={{ textDecoration: "underline", fontWeight: "semibold" }}
                mr={3}
              >
                Home
              </Text>
            </Link>
            <Link href="/transaction" passHref>
              <Text
                fontWeight="normal"
                fontSize="lg"
                cursor="pointer"
                colorScheme="purple"
                _hover={{
                  textDecoration: "underline",
                  fontWeight: "semibold",
                }}
              >
                Transaction
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
