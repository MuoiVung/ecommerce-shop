import { Grid } from "@mui/material";
import { FreeShippingCard } from "./FreeShippingCard";

function FreeShippingList() {
  return (
    <Grid container spacing={1}>
      <Grid item md={3}>
        <FreeShippingCard />
      </Grid>
      <Grid item md={3}>
        <FreeShippingCard />
      </Grid>
      <Grid item md={3}>
        <FreeShippingCard />
      </Grid>
      <Grid item md={3}>
        <FreeShippingCard />
      </Grid>
    </Grid>
  );
}

export default FreeShippingList;
