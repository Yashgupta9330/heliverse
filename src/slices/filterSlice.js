import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
    initialState:{
    gender: '',
    domain:'',
    available:''
  },
  reducers: {
    setgender: (state, action) => {
      state.gender = action.payload;
    },
    setdomain: (state, action) => {
        state.domain = action.payload;
      },
      setavailable: (state, action) => {
        state.available = action.payload;
      }
  }
});

// Action creators are generated for each case reducer function
export const { setgender,setdomain,setavailable } = filterSlice.actions;
export default filterSlice.reducer;
