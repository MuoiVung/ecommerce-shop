import { ICON } from "@constants/theme.constant";
import { ListItemButton } from "@mui/material";
import { StyledListItemText } from "@styles/shared/CustomCategory.style";
import { memo } from "react";

type CategoryItemProps = {
  selectedCategory: string;
  onClickListItem: (category: string) => void;

  category: string;
};
export const CategoryItem = memo(
  ({
    selectedCategory,
    onClickListItem,

    category,
  }: CategoryItemProps) => {
    return (
      <ListItemButton
        selected={selectedCategory === category}
        onClick={() => onClickListItem(category)}
      >
        <StyledListItemText primary={category} />
        <img src={ICON.ARROW} width={8} height={20} />
      </ListItemButton>
    );
  }
);
