import { FC, useEffect, useState } from "react";
import { Medicine } from "../PharmList/PharmList";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CartLiDescrBox,
  CartLiPriceText,
  CartLiTitle,
  ShoppingCartLi,
} from "./ShoppingCartItem.styled";
import { Button, TextField } from "@mui/material";
import { buttonStyles } from "../MedicineItem/MedicineItem.styled";

type ShoppingCartItemProp = {
  medicine: Medicine;
  updateTotalPrice: (price: number) => void;
  deleteMedicine: any;
};

export const ShoppingCartItem: FC<ShoppingCartItemProp> = ({
  medicine,
  updateTotalPrice,
  deleteMedicine,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  let totalPrice = 0;
  const CartArr = JSON.parse(localStorage.getItem("CartOrder") ?? "null");

  useEffect(() => {
    const storedQuantity = localStorage.getItem(`quantity_${medicine._id}`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity));
    } else {
      setQuantity(1);
      localStorage.setItem(`quantity_${medicine._id}`, "1");
    }
  }, [medicine._id]);

  const itemsObj: Record<string, Medicine> = CartArr.reduce(
    (acc: Record<string, Medicine>, medicine: Medicine) => {
      const quantity = parseInt(
        localStorage.getItem(`quantity_${medicine._id}`) || "0"
      );
      acc[medicine._id] = { ...medicine, quantity };
      return acc;
    },
    {}
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    localStorage.setItem(`quantity_${medicine._id}`, newQuantity.toString());
  };

  for (const elem in itemsObj) {
    if (itemsObj.hasOwnProperty(elem)) {
      const item = itemsObj[elem];
      if (item.quantity !== undefined) {
        const itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
      }
    }
  }

  updateTotalPrice(totalPrice);

  return (
    <ShoppingCartLi>
      <img src={medicine.img} alt={medicine.name} />
      <CartLiDescrBox>
        <CartLiTitle> {medicine.name}</CartLiTitle>
        <CartLiPriceText>Ціна: {medicine.price}грн</CartLiPriceText>
        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
        />
        <Button
          onClick={() => deleteMedicine(medicine._id)}
          type="submit"
          variant="contained"
          sx={buttonStyles}
          startIcon={<DeleteIcon />}
        >
          Видалити
        </Button>
      </CartLiDescrBox>
    </ShoppingCartLi>
  );
};
