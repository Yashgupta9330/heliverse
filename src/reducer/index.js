
import filterReducer from '../slices/filterSlice';
import userReducer from '../slices/userslice';
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer  = combineReducers({
    user: userReducer,
    filter:filterReducer
});


export default rootReducer