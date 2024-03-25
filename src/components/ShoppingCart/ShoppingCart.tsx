import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  ButtonBox,
  CredentialsCartContainer,
  InputStyle,
  OrderCartContainer,
  ShoppingCartContainer,
  buttonStyles,
} from "./ShoppingCart.styled";
import { Medicine } from "../PharmList/PharmList";
import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { CartLiPriceText } from "../ShoppingCartItem/ShoppingCartItem.styled";

import CustomModal from "../Modal";

export const ShoppingCart = () => {
  const [total, setTotal] = useState<number>(0);
  const [cartOrders, setCartOrders] = useState<Medicine[]>([]);
  const [modal, setModal] = useState(false);
  const cartOrdersStored: Medicine[] = JSON.parse(
    localStorage.getItem("CartOrder") || "[]"
  );

  useEffect(() => {
    if (cartOrdersStored) {
      setCartOrders(cartOrdersStored);
    }
  }, []);

  useEffect(() => {
    const total = cartOrders?.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartOrders]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
  };

  const updateTotalPrice = (price: number) => {
    setTotal(price);
  };

  const deleteMedicine = (id: any) => {
    const updatedCartOrders = cartOrders.filter((item) => item._id !== id);
    setCartOrders(updatedCartOrders);
    localStorage.setItem("CartOrder", JSON.stringify(updatedCartOrders || []));
    localStorage.removeItem(`quantity_${id}`);
  };

  return (
    // <div style={{ display: "flex", margin: " 0 auto", padding: "0 25px" }}>
    <div style={{ display: "flex", margin: " 0 auto" }}>
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
              <ShoppingCartItem
                key={item._id}
                updateTotalPrice={updateTotalPrice}
                medicine={item}
                deleteMedicine={deleteMedicine}
              />
            ))}
          </ul>
        </OrderCartContainer>
        <ButtonBox>
          <CartLiPriceText>Разом: {total.toFixed(1)}грн</CartLiPriceText>
          <Button
            onClick={() => setModal(true)}
            type="submit"
            variant="contained"
            sx={buttonStyles}
          >
            Оформити замовлення
          </Button>

          {modal && (
            <CustomModal open={modal} onClose={() => setModal(false)} />
          )}
        </ButtonBox>
      </ShoppingCartContainer>
    </div>
  );
};
