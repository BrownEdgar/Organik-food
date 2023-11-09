import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    image: "./Photo1.png",
    title: "The Benefits of Vitamin D & How to Get It",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
  },
  {
    id: 2,
    image: "./Photo2.png",
    title: "Our Favourite Summertime Tommeto",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
  }
]

const productsSlice = createSlice({
  name: "organicFoods",
  initialState: initialState,
  reducers: {}
})



export const getAllOrganicFoods = (state) => state.organicFoods
export default productsSlice.reducer