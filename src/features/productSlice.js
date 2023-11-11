import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    type: "Vegetable",
    name: "Calabrese Broccoli",
    image: "products/broccoli.png",
    oldprice: 20.0,
    newprice: 13.0,
  },
  {
    type: "Fresh",
    name: "Fresh Banana Fruites",
    image: "products/banana.png",
    oldprice: 20.0,
    newprice: 14.0,
  },
  {
    type: "Millets",
    name: "White Nuts",
    image: "products/nuts.png",
    oldprice: 20.0,
    newprice: 15.0,
  },
  {
    type: "Vegetable",
    name: "Vegan Red Tomato",
    image: "products/tomato.png",
    oldprice: 20.0,
    newprice: 17.0,
  },
  {
    type: "Health",
    name: "Mung Bean",
    image: "products/bean.png",
    oldprice: 20.0,
    newprice: 11.0,
  },
  {
    type: "Nuts",
    name: "Brown Hazelnut",
    image: "products/hazelnut.png",
    oldprice: 20.0,
    newprice: 12.0,
  },
  {
    type: "Fresh",
    name: "Eggs",
    image: "products/eggs.png",
    oldprice: 20.0,
    newprice: 17.0,
  },
  {
    type: "Fresh",
    name: "Zelco Suji Elaichi Rusk",
    image: "products/sujirusk.png",
    oldprice: 20.0,
    newprice: 15.0,
  },
];


const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});

export default productsSlice.reducer;
