import React, { useState } from "react";

import { Box, Flex, Image, Text, Button, Badge } from "@chakra-ui/react";

export default function Card({ item }) {
  const [amount, setAmount] = useState(1);

  function incrementAmount() {
    let increment = amount + 1;
    setAmount(increment);
  }

  function decrementAMount() {
    let decrement = amount - 1;
    setAmount(decrement);
  }

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
          <Image objectFit="cover" src={item.imageURL} alt={item.name} />
        </Box>
        <Box w="60%">
          <Text fontWeight="semibold" fontSize="lg" textAlign="center">
            {item.name}
          </Text>
          <Flex direction="column" justifyContent="space-between" mt={2}>
            <Box mt={3}>
              <Text fontSize="md">
                Price:{" "}
                <Badge fontSize="md">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.price)}
                </Badge>
              </Text>
              <Text fontSize="md">
                Stock: <Badge fontSize="md">{item.stock}</Badge>
              </Text>
            </Box>
            <Box mt={2}>
              <Flex justifyContent="space-between" alignItems="center">
                {amount === 1 ? (
                  <Button
                    fontWeight="bold"
                    fontSize="xl"
                    isDisabled
                    colorScheme="red"
                  >
                    -
                  </Button>
                ) : (
                  <Button
                    fontWeight="bold"
                    fontSize="xl"
                    colorScheme="red"
                    onClick={() => decrementAMount()}
                  >
                    -
                  </Button>
                )}
                <Text fontWeight="bold">{amount}</Text>
                {amount === item.stock ? (
                  <Button
                    fontWeight="bold"
                    fontSize="xl"
                    isDisabled
                    colorScheme="teal"
                  >
                    +
                  </Button>
                ) : (
                  <Button
                    fontWeight="bold"
                    colorScheme="teal"
                    fontSize="xl"
                    onClick={() => incrementAmount()}
                  >
                    +
                  </Button>
                )}
              </Flex>
            </Box>
            <Button colorScheme="purple" mt={2}>
              Buy
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
