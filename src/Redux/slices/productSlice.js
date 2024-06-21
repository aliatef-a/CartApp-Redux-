import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchProduct = createAsyncThunk("productSlice/fetchProduct" , async ()=> {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data
})
export const productSlice = createSlice({
    initialState: [],
    name: "productSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled , (state , action) => {
            return action.payload
        })
    },
});

// Action creators are generated for each case reducer function
export const { } = productSlice.actions;

export default productSlice.reducer;
