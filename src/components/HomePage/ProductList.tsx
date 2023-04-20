import { useGetAllProductsQuery } from "@api/product.api";
import { ProductCard } from "@components/Shared/ProductCard";
import { IMAGE } from "@constants/theme.constant";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { StyledShowMoreButton } from "@styles/pages/HomePage.style";
import { ChangeEvent, useState } from "react";

type ProductListProps = {
  selectedCategory: string;
  page: number;
  handleChangePage: (event: ChangeEvent<unknown>, value: number) => void;
  handleSelectAll: () => void;
};

export const ProductList = ({
  selectedCategory,
  page,
  handleChangePage,
  handleSelectAll,
}: ProductListProps) => {
  const { data: products } = useGetAllProductsQuery({
    page,
    size: 12,
    category: selectedCategory || undefined,
  });

  return (
    <Box mt="19px">
      {/* Title */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py="28px"
        mb="19px"
      >
        <Typography variant="h5">
          {selectedCategory || "All Products"}
        </Typography>
        <StyledShowMoreButton variant="outlined" onClick={handleSelectAll}>
          Show All
        </StyledShowMoreButton>
      </Stack>

      {/* Products */}
      <Grid container spacing={1}>
        {products?.result.map((product) => (
          <Grid key={product.id} item md={3}>
            <ProductCard
              id={product.id}
              img={product.images[0].url}
              name={product.name}
              isAvailable={product.countInStock > 0}
              price={product.price}
              rate={product.rating}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Stack alignItems="center" mt="24px">
        <Pagination
          count={products?.totalPages}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>
    </Box>
  );
};
