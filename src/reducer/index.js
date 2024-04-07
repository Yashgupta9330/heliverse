
import searchReducer from '@/slices/SearchSlice';
import filterReducer from '../slices/filterSlice';
import userReducer from '../slices/userslice';
import pageReducer from '@/slices/pageSlice';
import  selectedUsersReducer from '@/slices/MemberSlice';
import {combineReducers} from "@reduxjs/toolkit";


const rootReducer  = combineReducers({
    user: userReducer,
    filter:filterReducer,
    search:searchReducer,
    page:pageReducer,
    selectedUser:selectedUsersReducer
});


export default rootReducer