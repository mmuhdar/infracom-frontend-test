import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTransaction } from "../store/transaction/action";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Badge,
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

export default function TableTransaction() {
  const dispatch = useDispatch();
  const transactions = useSelector(
    ({ transaction }) => transaction.transactions
  );

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);
  return (
    <Box p={3}>
      <Table variant="striped" colorScheme="purple">
        <TableCaption placement="top">Transaction</TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Code</Th>
            <Th>Price</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction, idx) => {
            return (
              <Tr key={transaction.id}>
                <Td>{idx + 1}</Td>
                <Td>{transaction.transaction_code}</Td>
                <Td>{transaction.price}</Td>
                <Td>{transaction.amount}</Td>
                <Td>
                  <Badge colorScheme="yellow">{transaction.status}</Badge>
                </Td>
                <Td>
                  <Flex>
                    {transaction.status === "unpaid" ? (
                      <IconButton
                        colorScheme="teal"
                        aria-label="Confirm"
                        icon={<CheckIcon />}
                        mr={2}
                      />
                    ) : (
                      <IconButton
                        colorScheme="teal"
                        aria-label="Confirm"
                        icon={<CheckIcon />}
                        isDisabled
                        mr={2}
                      />
                    )}
                    <IconButton
                      colorScheme="red"
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
