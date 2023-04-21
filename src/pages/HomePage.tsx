import { useGetAllCategoriesQuery } from "@api/product.api";
import FreeShippingList from "@components/HomePage/FreeShippingList";
import { ProductList } from "@components/HomePage/ProductList";
import { CircularSpinner } from "@components/Shared/CircularSpinner";
import { CustomCategory } from "@components/Shared/CustomCategory";
import { IMAGE } from "@constants/theme.constant";
import { Box, Container, Grid } from "@mui/material";
import { StyledImage } from "@styles/shared/CustomCategory.style";
import { ChangeEvent, useCallback, useState } from "react";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  const handleSelectCategory = useCallback((newCategory: string) => {
    setSelectedCategory(newCategory);
    setPage(1);
  }, []);

  const { data: categories, isLoading: isGetAllCategoryLoading } =
    useGetAllCategoriesQuery();

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  const handleSelectAll = () => {
    setSelectedCategory("");
  };

  return (
    <Container>
      {/* HERO & CATEGORY */}
      <Grid container spacing={1} mb="8px">
        {/* CATEGORY */}
        <Grid item md={3}>
          <CustomCategory
            selectedCategory={selectedCategory}
            handleSelectCateogry={handleSelectCategory}
            categories={categories || []}
          />
        </Grid>
        <Grid item md={9}>
          <Box height={386} mb="8px">
            <StyledImage src={IMAGE.BACKGROUND} alt="Product Background" />
          </Box>
          <Grid container spacing={1} height={220}>
            <Grid item md={4} height="100%">
              <StyledImage src={IMAGE.BACKGROUND} alt="Product Background" />
            </Grid>
            <Grid item md={4} height="100%">
              <StyledImage src={IMAGE.BACKGROUND} alt="Product Background" />
            </Grid>
            <Grid item md={4} height="100%">
              <StyledImage src={IMAGE.BACKGROUND} alt="Product Background" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Free Shipping List */}
      <FreeShippingList />

      {/* Product List */}
      <ProductList
        handleSelectAll={handleSelectAll}
        selectedCategory={selectedCategory}
        handleChangePage={handleChangePage}
        page={page}
      />

      <Box height={100} />
      <CircularSpinner isLoading={isGetAllCategoryLoading} />
    </Container>
  );
}

export default HomePage;
