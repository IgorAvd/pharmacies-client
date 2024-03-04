import { Button } from "@mui/material";
import { useEffect } from "react";
import { getAllMedicines } from "../../services/farmacyAncApi";
import { farmacyArray } from "../../constants/mockedFarmacy";
import { useAppDispatch } from "../../hooks";
import { setMedicineArr } from "../../redux/Medicine/MedicineSlice";
import {
  PharmListContainer,
  PharmListTitle,
  buttonStyles,
} from "./PharmList.styled";

export type Medicine = {
  _id: number;
  manufacturer: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
};

export const PharmList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getAllMedicines("anc24").then((res) => {
      dispatch(setMedicineArr(res.data));
    });
  }, [dispatch]);

  const handleClick = async (title: string) => {
    try {
      const res = await getAllMedicines(title);
      dispatch(setMedicineArr(res.data));
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };
  return (
    <PharmListContainer>
      <PharmListTitle>Виберіть аптеки зі списку:</PharmListTitle>
      {farmacyArray?.map((title) => (
        <Button
          key={title}
          variant="contained"
          sx={buttonStyles}
          onClick={() => {
            handleClick(title);
          }}
        >
          {title}
        </Button>
      ))}
    </PharmListContainer>
  );
};
