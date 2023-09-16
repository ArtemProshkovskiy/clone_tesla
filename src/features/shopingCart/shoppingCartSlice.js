import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    shoppingCart: [],
};


export const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const purchase = {
                id: nanoid(),
                data: action.payload
            }
            state.shoppingCart.push(purchase);
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;

            // Find the index of the item with the matching ID
            const indexToRemove = state.shoppingCart.findIndex(
                (item) => item.data.id === itemIdToRemove
            );

            // If the item was found, remove it using splice
            if (indexToRemove !== -1) {
                state.shoppingCart.splice(indexToRemove, 1);
            }
        }

    }
})

export const {addToCart, removeFromCart} = ShoppingCartSlice.actions;