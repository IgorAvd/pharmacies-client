import { FC, useEffect, useState } from "react";
import { Medicine } from "../PharmList/PharmList";
import {
  CartLiDescrBox,
  CartLiPriceText,
  CartLiTitle,
  ShoppingCartLi,
} from "./ShoppingCartItem.styled";
import { TextField } from "@mui/material";

type ShoppingCartItemProp = {
  medicine: Medicine;
};

export const ShoppingCartItem: FC<ShoppingCartItemProp> = ({ medicine }) => {
  const [quantity, setQuantity] = useState(1);

  const [existingItems, setExistingItems] = useState<Medicine[]>([]);
  const data = localStorage.getItem("CartOrder") || "[]";

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setExistingItems(parsedData);
    }
  }, [data]);

  const handleQuantityChange = (newQuantity: number, id: number) => {
    setQuantity(newQuantity);

    const updatedItems = existingItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setExistingItems(updatedItems);
    localStorage.setItem("CartOrder", JSON.stringify(updatedItems));
  };

  return (
    <ShoppingCartLi>
      <img src={medicine.img} alt={medicine.name} />
      <CartLiDescrBox>
        <CartLiTitle> {medicine.name}</CartLiTitle>
        <CartLiPriceText>Ціна: {medicine.price}грн</CartLiPriceText>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) =>
            handleQuantityChange(parseInt(e.target.value), medicine._id)
          }
          inputProps={{ min: 1 }}
        />
      </CartLiDescrBox>
    </ShoppingCartLi>
  );
};
