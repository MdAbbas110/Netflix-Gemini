import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'Movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVide: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVide = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;

//reducer ke ander jo bhi keys hote hain usko actions kahte hain aur uski value functions hoti hai
