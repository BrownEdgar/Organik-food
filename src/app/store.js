import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import organicFoodSlice from '../features/organicFoodSlice';


const store = configureStore({
  reducer: {
    products: productSlice,
    organicFoods: organicFoodSlice
  }
})

export default store