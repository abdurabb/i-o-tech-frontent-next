import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isServiceModalOpen: false, 
  isTeamInView: false,
  scrollTargets: {
    team: null,
    testimonials: null,
  },
};

const rootReducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    openServiceModal: (state) => {
      state.isServiceModalOpen = true;
    },
    closeServiceModal: (state) => {
      state.isServiceModalOpen = false;
    },
    setTeamInView: (state, action) => {
      state.isTeamInView = action.payload;
    },
    setScrollTarget: (state, action) => {
      const { section, offsetTop } = action.payload;
      state.scrollTargets[section] = offsetTop;
    },
  },
});

export default rootReducer.reducer;

export const {
  openServiceModal,
  closeServiceModal,
  setTeamInView,
  setScrollTarget, 
} = rootReducer.actions;
