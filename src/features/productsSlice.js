import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const clientId = 'viyDF3eUM7UyGboYfR9ySQN7kxMVGdfngRyqLy5FNdg';

export const fetchAsyncProducts = createAsyncThunk(
  'products/fetchAsyncProducts',
  (category) => {
    let link = `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=${clientId}`;
    return axios.get(link).then((response) => response.data.results);
  }
);

const initialState = {

  products: [],
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });

    builder.addCase(fetchAsyncProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
   
  },
});

export default productsSlice.reducer;
// const { actions, reducer } = getProductSlice
// export const { save } = actions;
// export default reducer;
