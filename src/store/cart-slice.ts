import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Item {
    id: number;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
    cover: string;
}

interface CartState {
    itemsList: Item[];
    totalQuantity: number;
}

const initialState: CartState = {
    itemsList: [],
    totalQuantity: 0, 
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Item>) {
            const newItem = action.payload;

            // check if item already exists
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.cover,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id.toString() === id);

            if (existingItem && existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id.toString() !== id);
                state.totalQuantity--;
            } else if (existingItem) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions
export default cartSlice