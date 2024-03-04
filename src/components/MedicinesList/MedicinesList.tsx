import { FC } from "react";
import { MedicinesUl } from "./MedicinesList.styled";
import { MedicineItem } from "../MedicineItem/MedicineItem";
import { Medicine } from "../PharmList/PharmList";

type MedicinesListProp = {
  data: Medicine[];
};
export const MedicinesList: FC<MedicinesListProp> = ({ data }) => {
  return (
    <MedicinesUl>
      {data?.map((item) => (
        <MedicineItem key={item._id} medicine={item} />
      ))}
    </MedicinesUl>
  );
};
