import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, InputAdornment, Typography } from "@mui/material";

import {
  SearchContainer,
  StyledInput,
} from "@styles/layout/SearchNavbar.style";

export const SearchNavbar = () => {
  return (
    <SearchContainer direction="row" spacing={1} alignItems="center" flex={1}>
      <FormatAlignLeftIcon />
      <Typography variant="h4" color="grey.800">
        Categories
      </Typography>
      <Divider orientation="vertical" flexItem />

      <StyledInput
        placeholder="Search Items"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </SearchContainer>
  );
};
