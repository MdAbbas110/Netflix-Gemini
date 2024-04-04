import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'Movies',
  initialState: {
    trailerVide: null,
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRated: null,
  },
  reducers: {
    addMovieTrailer: (state, action) => {
      state.trailerVide = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addTopRated,
} = moviesSlice.actions;
export default moviesSlice.reducer;

//reducer ke ander jo bhi keys hote hain usko actions kahte hain aur uski value functions hoti hai
