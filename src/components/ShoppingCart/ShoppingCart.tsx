import React from "react";
import { Button, TextField } from "@mui/material";
import {
  ButtonBox,
  CredentialsCartContainer,
  InputStyle,
  OrderCartContainer,
  ShoppingCartContainer,
} from "./ShoppingCart.styled";
import { Medicine } from "../PharmList/PharmList";
import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { CartLiPriceText } from "../ShoppingCartItem/ShoppingCartItem.styled";
import { buttonStyles } from "../PharmList/PharmList.styled";

export const ShoppingCart = () => {
  const cartOrders: Medicine[] = JSON.parse(
    localStorage.getItem("CartOrder") || "[]"
  );

  const total = cartOrders?.reduce((acc, item) => acc + item.price, 0);
  const roundedTotal = parseFloat(total.toFixed(1));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
  };
  return (
    <ShoppingCartContainer>
      <CredentialsCartContainer onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Name"
          type="text"
          name="name"
          variant="outlined"
          required
          sx={InputStyle}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          required
          sx={InputStyle}
        />
        <TextField
          label="Phone"
          type="tel"
          name="phone"
          variant="outlined"
          required
          sx={InputStyle}
        />
        <TextField
          label="Address"
          type="text"
          name="address"
          variant="outlined"
          required
          sx={InputStyle}
        />
      </CredentialsCartContainer>
      <OrderCartContainer>
        <ul>
          {cartOrders?.map((item) => (
            <ShoppingCartItem key={item._id} medicine={item} />
          ))}
        </ul>
      </OrderCartContainer>
      <ButtonBox>
        <CartLiPriceText>Разом: {roundedTotal}грн</CartLiPriceText>
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Submit
        </Button>
      </ButtonBox>
    </ShoppingCartContainer>
  );
};
