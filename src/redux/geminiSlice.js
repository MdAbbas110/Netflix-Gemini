import { createSlice } from '@reduxjs/toolkit';

const geminiSlice = createSlice({
  name: 'Gemini search',
  initialState: {
    showGeminiSearch: false,
    recommendedMovies: null,
    recommendedMoviesNames: null,
  },
  reducers: {
    toggleGeminiSearch: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    showRecommendedMovies: (state, action) => {
      // this action is an object now and we can destructure it and use
      const { movieNames, movieResults } = action.payload;
      state.recommendedMovies = movieResults;
      state.recommendedMoviesNames = movieNames;
    },
  },
});

export const { toggleGeminiSearch, showRecommendedMovies } =
  geminiSlice.actions;

export default geminiSlice.reducer;
