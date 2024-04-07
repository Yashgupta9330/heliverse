import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState:{
    page:1
  },
  reducers: {
    increment: state => {
      state.page+=1;
    },
    decrement: state =>{
      state.page-=1;
    }
  }
});

export const {increment,decrement} = pageSlice.actions;
export default pageSlice.reducer;
