import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: {},
  error: {},
  confirmation: false,
  votedSuccess: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    setSuccess: (state, action) => {
      state.success.status = true;
      state.success.message = action.payload;
    },
    setError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
    },
    resetUIState: state => {
      state.loading = false;
      state.success = {};
      state.error = {};
      state.votedSuccess = false;
    },
    setConfirmation: state => {
      state.confirmation = true;
    },
    resetConfirmation: state => {
      state.confirmation = false;
    },
    setVotedSuccess: state => {
      state.votedSuccess = true;
    },
  },
});

export const { setVotedSuccess, setLoading, setSuccess, setError, resetUIState } =
  uiSlice.actions;

export default uiSlice.reducer;
export const selectedUI = state => state.ui;
export const selectedIsVoted = state => state.ui.votedSuccess