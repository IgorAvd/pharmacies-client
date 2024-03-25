import {
  HomePageContainer,
  firstSpanStyle,
  secondSpanStyle,
} from "./HomePage.styled";
import { PharmList } from "../../components/PharmList/PharmList";
import { MedicinesList } from "../../components/MedicinesList/MedicinesList";
import { useAppSelector } from "../../hooks";
import { selectMedicineArr } from "../../redux/Medicine/MedicineSlice";
import Ticker from "../../components/Ticker";

const HomePage = () => {
  const medicineArr = useAppSelector(selectMedicineArr);

  return (
    <main style={{ display: "grid" }}>
      <Ticker
        content={
          <div style={{ display: "inline" }}>
            <span style={firstSpanStyle}>Сьогодні день знижок!</span>
            <span style={secondSpanStyle}>Сьогодні день знижок!</span>
          </div>
        }
      />
      <HomePageContainer>
        <PharmList />
        <MedicinesList data={medicineArr} />
      </HomePageContainer>
    </main>
  );
};

export default HomePage;
