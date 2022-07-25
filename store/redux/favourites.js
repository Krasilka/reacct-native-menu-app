import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      // action and payload are provided by redux
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;

export default favouritesSlice.reducer;
