import { createSlice } from '@reduxjs/toolkit';

const geminiSlice = createSlice({
  name: 'Gemini search',
  initialState: {
    showGeminiSearch: false,
  },
  reducers: {
    toggleGeminiSearch: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
  },
});

export const { toggleGeminiSearch } = geminiSlice.actions;

export default geminiSlice.reducer;
