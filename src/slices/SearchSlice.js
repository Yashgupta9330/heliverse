import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: ''
  },
  reducers: {
    setsearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { setsearch } = searchSlice.actions;
export default searchSlice.reducer;
