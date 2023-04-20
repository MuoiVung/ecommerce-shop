import {
  COLORS,
  FONT_WEIGHT,
  ICON,
  IMAGE,
  LINE_HEIGHT,
} from "@constants/theme.constant";
import {
  Box,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { StyledImage } from "@styles/shared/CustomCategory.style";
import {
  StyledAvailable,
  StyledProductCard,
} from "@styles/shared/ProductCard.style";

type ProductCardProps = {
  img: string;
  name: string;
  id: number;
  rate: number;
  price: number;
  sale?: number;
  isAvailable: boolean;
};

export const ProductCard = ({
  img = IMAGE.PRODUCT,
  name,
  id,
  rate = 5,
  price,
  isAvailable = true,
  sale,
}: ProductCardProps) => {
  return (
    <StyledProductCard>
      <Paper
        elevation={6}
        sx={{
          width: "240px",
          height: "200px",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <StyledImage src={img || IMAGE.PRODUCT} alt="product" />
      </Paper>
      <Stack mt="16px" spacing={0.5}>
        <Typography variant="h3" maxWidth={200} noWrap>
          {name}
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="baseline">
          <Typography
            fontSize={18}
            lineHeight={LINE_HEIGHT.NORMAL}
            fontWeight={FONT_WEIGHT.BOLD}
          >
            ID:
          </Typography>
          <Typography variant="subtitle2">{id}</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Rating value={rate} readOnly />
          {sale && (
            <Typography variant="subtitle2" color={COLORS.RED}>
              {sale}% Off
            </Typography>
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">$ {price.toFixed(2)}</Typography>
          <IconButton>
            <img src={ICON.ADD_CART} alt="add cart" width={28} height={28} />
          </IconButton>
        </Stack>

        <Box>
          <StyledAvailable
            sx={{
              backgroundColor: isAvailable ? COLORS.GREEN_50 : COLORS.RED_50,
              borderColor: isAvailable
                ? COLORS.BORDER_GREEN_50
                : COLORS.BORDER_RED_50,
            }}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </StyledAvailable>
        </Box>
      </Stack>
    </StyledProductCard>
  );
};
