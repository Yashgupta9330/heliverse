import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// following the docs, they assign configureStore to a const
const store = configureStore({
    reducer: rootReducer
});
export default store;