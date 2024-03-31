import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'Movies',
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

//reducer ke ander jo bhi keys hote hain usko actions kahte hain aur uski value functions hoti hai
