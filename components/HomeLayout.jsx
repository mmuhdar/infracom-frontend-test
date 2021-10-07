import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Spinner, Grid, Box, Flex, Text } from "@chakra-ui/react";

import { fetchItem } from "../store/item/action";
import Card from "./Card";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const items = useSelector(({ item }) => item.items);
  const isLoading = useSelector(({ item }) => item.isLoading);

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);

  return (
    <Box mt={10} p={5}>
      {!isLoading ? (
        <Grid
          templateColumns={{
            xl: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={8}
        >
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </Grid>
      ) : (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      )}
    </Box>
  );
}
