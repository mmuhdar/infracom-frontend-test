import React from "react";

import { Box, Flex, Image, Text, Button, Badge } from "@chakra-ui/react";

export default function Card({ item }) {
  return (
    <Box
      key={item.id}
      border="2px"
      p={2}
      rounded="lg"
      borderColor="gray.300"
      _hover={{
        borderColor: "purple.400",
        color: "purple",
        transform: "scale(1.1)",
        transition: "0.3s",
      }}
    >
      <Flex>
        <Box w="40%" mx="auto">
          <Image src={item.imageURL} alt={item.name} />
        </Box>
        <Box w="60%">
          <Text fontWeight="semibold" textAlign="center">
            {item.name}
          </Text>
          <Flex direction="column" justifyContent="space-between">
            <Box>
              <Flex justifyContent="space-around">
                <Text front fontSize="sm">
                  Price: <Badge>{item.price}</Badge>
                </Text>
                <Badge>{item.stock}</Badge>
              </Flex>
            </Box>
            <Button colorScheme="purple">Buy</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
