import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  status: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.status = true;
    },
    disableLoading: (state) => {
      state.status = false;
    },
  },
});

export const { enableLoading, disableLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

export const selectLoadingStatus = (state: RootState) => state.loading.status;
