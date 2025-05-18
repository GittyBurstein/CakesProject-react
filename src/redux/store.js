import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cakesReducer } from './reducers/GalleryHomeReducers'; // Ensure this path is correct
import { ShopingCartReducer } from './reducers/ShopingCartReducer'; // Ensure this path is correct
import RecepiesReducer from './reducers/RecepiesReducer';

// Importing the reducers from their respective files
const rootReducer = combineReducers({
    cakesList: cakesReducer,
    invitedCakeList: ShopingCartReducer,
    myRecepiesCakesList: RecepiesReducer,
});

// Correctly pass rootReducer as `reducer`
export const store = configureStore({ reducer: rootReducer });
export default store;