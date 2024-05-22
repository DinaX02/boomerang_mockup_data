import { createSlice } from "@reduxjs/toolkit";

const RentSlice = createSlice({
  name: "Rent",
  initialState: {
    progressRentList: [],
  },
  reducers: {
    addProgressRent: (state, action) => {
      // Replace everything in progressRentList with action.payload
      state.progressRentList = action.payload;
    },
    updateProgressRent: (state, action) => {
      const { updatedData } = action.payload;
      state.progressRentList = { ...state.progressRentList, ...updatedData };
    },

    removeProgressRent: (state, action) => {
      const indexToRemove = action.payload;
      state.progressRentList = state.progressRentList.filter((_, index) => index !== indexToRemove);
    },
  },
});

export const { addProgressRent, updateProgressRent } = RentSlice.actions;

export default RentSlice.reducer;
