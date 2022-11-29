import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "PLN";
}

export interface ProductsState {
  products: ProductModel[];
}

const initialState: ProductsState = {
  products: [
    {
      id: "1",
      name: "Star Wars: Mroczne Widmo",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "2",
      name: "Star Wars: Atak Klonów",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "3",
      name: "Star Wars: Zemsta Sithów",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "4",
      name: "Star Wars: Nowa Nadzieja",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "5",
      name: "Star Wars: Imperium Kontratakuje",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "6",
      name: "Star Wars: Powrót Jedi",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "7",
      name: "Star Wars: Przebudzenie Mocy",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "8",
      name: "Star Wars: Ostatni Jedi",
      description: "super",
      price: 80,
      currency: "PLN",
    },
    {
      id: "9",
      name: "Star Wars: Skywalker. Odrodzenie",
      description: "super",
      price: 80,
      currency: "PLN",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.products;

export const productsReducer = productsSlice.reducer;
