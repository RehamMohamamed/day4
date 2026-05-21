import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [], // array of movie objects
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.favorites.findIndex(m => m.id === movie.id);
      
      if (index >= 0) {
        state.favorites.splice(index, 1); // remove
      } else {
        state.favorites.push(movie); // add
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
