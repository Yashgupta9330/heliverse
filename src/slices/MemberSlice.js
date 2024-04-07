import { createSlice } from '@reduxjs/toolkit';

export const selectedUsersSlice = createSlice({
  name: 'selectedUser',
  initialState: {
    members: []
  },
  reducers: {
    addUser: (state, action) => {
      state.members.push(action.payload);
    },
    removeUser: (state, action) => {
      state.members = state.members.filter(userId => userId !== action.payload);
    },
    clearSelectedUsers: state => {
      state.members = [];
    }
  }
});

export const { addUser, removeUser, clearSelectedUsers } = selectedUsersSlice.actions;
export default selectedUsersSlice.reducer;
