import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import {
  fetchTransaction,
  deleteTransaction,
  updateTransaction,
} from "../store/transaction/action";

export default function TableTransaction() {
  const dispatch = useDispatch();
  const toast = useToast();
  const transactions = useSelector(
    ({ transaction }) => transaction.transactions
  );
  const isLoading = useSelector(({ transaction }) => transaction.isLoading);

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);

  async function deleteItem(id) {
    const response = await deleteTransaction(id);
    if (response.success) {
      toast({
        title: response.success,
        status: "success",
        position: "top-end",
        duration: 3000,
        isClosable: true,
      });
      dispatch(fetchTransaction());
    } else {
      toast({
        title: response.err,
        status: "error",
        position: "top-end",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  async function updateStatus(id) {
    const response = await updateTransaction(id);
    if (response.success) {
      toast({
        title: response.success,
        status: "success",
        position: "top-end",
        duration: 3000,
        isClosable: true,
      });
      dispatch(fetchTransaction());
    } else {
      toast({
        title: response.err,
        status: "error",
        position: "top-end",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box p={3}>
      {isLoading ? (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      ) : (
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
                    {transaction.status === "unpaid" ? (
                      <Badge colorScheme="yellow">{transaction.status}</Badge>
                    ) : (
                      <Badge colorScheme="green">{transaction.status}</Badge>
                    )}
                  </Td>
                  <Td>
                    <Flex>
                      {transaction.status === "unpaid" ? (
                        <IconButton
                          colorScheme="teal"
                          aria-label="Confirm"
                          icon={<CheckIcon />}
                          mr={2}
                          onClick={() => updateStatus(transaction.id)}
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
                        onClick={() => deleteItem(transaction.id)}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </Box>
  );
}
