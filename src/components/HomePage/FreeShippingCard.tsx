import { ICON } from "@constants/theme.constant";
import { Box, Typography } from "@mui/material";
import { StyledFreeShippingCard } from "@styles/pages/HomePage.style";

export const FreeShippingCard = () => {
  return (
    <StyledFreeShippingCard
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
    >
      <img src={ICON.ITEM_CART} alt="item cart" width={30} height={30} />
      <Box>
        <Typography variant="h4" gutterBottom>
          Free Shipping
        </Typography>
        <Typography variant="subtitle1">For orders from %50</Typography>
      </Box>
    </StyledFreeShippingCard>
  );
};
