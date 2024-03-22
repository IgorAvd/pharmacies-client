import { FC } from "react";
import { MedicineLi, PriceText, buttonStyles } from "./MedicineItem.styled";
import { Medicine } from "../PharmList/PharmList";
import { Button } from "@mui/material";

type MedicineItemItemProp = {
  medicine: Medicine;
};
export const MedicineItem: FC<MedicineItemItemProp> = ({ medicine }) => {
  const handleClick = () => {
    const existingItems: Medicine[] = JSON.parse(
      localStorage.getItem("CartOrder") || "[]"
    );
    const isAlreadyInCart = existingItems.some(
      (item) => item._id === medicine._id
    );
    if (!isAlreadyInCart) {
      let updateMedicine = { ...medicine, quantity: 1 };
      const updatedItems = [...existingItems, updateMedicine];
      localStorage.setItem("CartOrder", JSON.stringify(updatedItems));
      alert(`${medicine.name} додано в кошик!`);
    } else {
      alert(`${medicine.name} вже у кошику.`);
    }
  };
  return (
    <MedicineLi>
      <img src={medicine.img} alt={medicine.name} />
      <PriceText>Ціна: {medicine.price}грн</PriceText>
      <Button variant="contained" sx={buttonStyles} onClick={handleClick}>
        Додати у кошик
      </Button>
    </MedicineLi>
  );
};
