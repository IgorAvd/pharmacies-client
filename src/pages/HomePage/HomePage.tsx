import { HomePageContainer } from "./HomePage.styled";
import { PharmList } from "../../components/PharmList/PharmList";
import { MedicinesList } from "../../components/MedicinesList/MedicinesList";
import { useAppSelector } from "../../hooks";
import { selectMedicineArr } from "../../redux/Medicine/MedicineSlice";

const HomePage = () => {
  const medicineArr = useAppSelector(selectMedicineArr);

  return (
    <main>
      <HomePageContainer>
        <PharmList />
        <MedicinesList data={medicineArr} />
      </HomePageContainer>
    </main>
  );
};

export default HomePage;
