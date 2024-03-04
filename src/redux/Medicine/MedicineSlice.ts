import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Medicine } from '../../components/PharmList/PharmList';

type MedicineState = {
    medicineArr: Medicine[];
};

const initialState: MedicineState = {
    medicineArr: [],
};

export const medicineSlice = createSlice({
    name: 'medicine',
    initialState,
    reducers: {
        setMedicineArr(state, action: PayloadAction<Medicine[]>) {
            state.medicineArr = action.payload;
        },
    },
});

export const { setMedicineArr } = medicineSlice.actions;
export const medicineReducer = medicineSlice.reducer;

//Selector

export const selectMedicineArr = (state: RootState) => state.medicine.medicineArr;
