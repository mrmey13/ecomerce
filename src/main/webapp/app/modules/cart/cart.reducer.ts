import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiURL = 'https://61baa6ed48df2f0017e5ab51.mockapi.io/api/product';

export type Cart = {
  id: string;
  imgSrc: string;
  name: string;
  info: string;
  note?: string;
  price: number;
  quantity: number;
};

type CartState = {
  status: 'idle' | 'pending' | 'succeed' | 'reject';
  counter: number;
  cartList: Array<Cart>;
};

const initialState: CartState = {
  status: 'idle',
  counter: 0,
  cartList: [],
};

export const fetchCarts = createAsyncThunk('cart/fetchCarts', async () => {
  const response = await axios({
    method: 'GET',
    url: `${ApiURL}`,
  });
  return response.data;
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async (id: string | number, thunkAPI) => {
  const response = await axios({
    method: 'DELETE',
    url: `${ApiURL}/${id}`,
  });
  if (response.status === 200) {
    thunkAPI.dispatch(fetchCarts());
  }
});

export const changeQuantity = createAsyncThunk('cart/changeQuantity', async (arg: Cart, thunkAPI) => {
  const response = await axios({
    method: 'PUT',
    url: `${ApiURL}/${arg.id}`,
    data: arg,
  });
  if (response.status === 200) {
    thunkAPI.dispatch(fetchCarts());
  }
});

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state) {
      state.counter + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.cartList = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {});
  },
});

export const { increment } = CartSlice.actions;

export default CartSlice.reducer;
