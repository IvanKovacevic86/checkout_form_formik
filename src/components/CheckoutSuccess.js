import React from "react";
import { Typography } from "@mui/material";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" align="left" gutterBottom mt={5}>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" align="left">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
