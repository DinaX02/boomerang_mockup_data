import { configureStore } from "@reduxjs/toolkit";
import PublishSlice from "./publicarSlice";
import RentSlice from "./rentSlice";

const store = configureStore({
  reducer: {
    Publicar1: PublishSlice,
    Rent: RentSlice,
  },
});

export default store;