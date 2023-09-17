import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface AnimalsSlice {
  bears: number;
  fish: number;
}

const initialState: AnimalsSlice = {
  bears: 0,
  fish: 0,
};

export const AnimalsSliceName = "animals";

const slice = createSlice({
  name: AnimalsSliceName,
  initialState,
  reducers: {
    incrementBears(state) {
      state.bears += 1;
    },
    setFish(state, { payload }: { payload: number }) {
      state.fish = payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(action.payload);
      const nextState = {
        ...state,
        ...action.payload[AnimalsSliceName],
      };
      return nextState;
    },
  },
});

export const { incrementBears, setFish } = slice.actions;

export const { reducer: AnimalsSlice } = slice;
