import {createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
   initialState: [] ,
   name: 'cartSlice',
   reducers: {
        addToCart: (state , action) => {
            const findProduct = state.find((product) => product.id == action.payload.id)
            console.log('findProduct', findProduct);
            if(findProduct) {
                findProduct.quntity += 1;
            } else {
                const quntity =  { ...action.payload , quntity : 1}
                state.push(quntity)
            }
            
        },
        deleteFromCart: (state , action) => {
            return state.filter((product) => product.id != action.payload.id)
        },
        clear : (state , action) => {
            return state = []
        }
   }
});

// Action creators are generated for each case reducer function
export const {addToCart , clear , deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
