import { createSlice } from '@reduxjs/toolkit';

const geminiSlice = createSlice({
  name: 'Gemini search',
  initialState: {
    showGeminiSearch: false,
    recommendedMovies: null,
  },
  reducers: {
    toggleGeminiSearch: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    showRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { toggleGeminiSearch, showRecommendedMovies } =
  geminiSlice.actions;

export default geminiSlice.reducer;
