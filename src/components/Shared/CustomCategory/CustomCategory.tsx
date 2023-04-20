import { useGetAllCategoriesQuery } from "@api/product.api";
import { ICON } from "@constants/theme.constant";
import { Stack, Typography } from "@mui/material";
import { StyledCategoryList } from "@styles/shared/CustomCategory.style";
import { memo, useCallback, useState } from "react";
import { CircularSpinner } from "../CircularSpinner";
import { CategoryItem } from "./CategoryItem";

type CustomCategoryProps = {
  categories: string[];
  handleSelectCateogry: (category: string) => void;
  selectedCategory: string;
};

export const CustomCategory = memo(
  ({
    categories,
    handleSelectCateogry,
    selectedCategory,
  }: CustomCategoryProps) => {
    const handleListItemClick = useCallback((category: string) => {
      handleSelectCateogry(category);
    }, []);

    return (
      <StyledCategoryList
        subheader={
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            ml={"16px"}
            py="24px"
          >
            <img src={ICON.MENU_WHITE} width={30} height={30} />
            <Typography variant="h3">Categories</Typography>
          </Stack>
        }
      >
        {categories?.map((category) => (
          <CategoryItem
            key={category}
            selectedCategory={selectedCategory}
            onClickListItem={handleListItemClick}
            category={category}
          />
        ))}
      </StyledCategoryList>
    );
  }
);
