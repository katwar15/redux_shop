import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Item {
  name: string;
  price: number;
  id: string;
  quantity: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemsWithoutGivenItem = state.items.filter(
        (item) => item.id !== id
      );
      state.items = itemsWithoutGivenItem;
    },
  },
});

// to jest destrukturyzacja: ale tu musimy nazywać tak jak to zdefiniowałaś
// bo możesz też to napisać w ten sposób np., ale jest to dłuższy sposob:
// export const addItemsToTheCart = cartSlice.action.AddItem = po prostu definiujesz zmienną z wcześniej zdefiniowaną zmienną
export const { addItem, removeItem } = cartSlice.actions;

export const selectItemQuantity = (state: RootState) => {
  return state.cart.items.length;
};

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

export default cartSlice.reducer;
