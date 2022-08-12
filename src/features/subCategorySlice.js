import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const clientId = 'viyDF3eUM7UyGboYfR9ySQN7kxMVGdfngRyqLy5FNdg';

export const fetchAsyncSubcategory = createAsyncThunk(
  'subcategory/fetchAyncsubcategory',
  (category) => {
    let link = `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=${clientId}`;

    return axios.get(link).then((response) => response.data.results);
  }
);

const initialState = {
  subcategory: [],
  loading: false,
  error: '',
};

const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSubcategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAsyncSubcategory.fulfilled,
      (state, action) => {
        state.loading = false;
        state.subcategory = action.payload;
        state.error = '';
      }
    );

    builder.addCase(
      fetchAsyncSubcategory.rejected,
      (state, action) => {
        state.loading = false;
        state.subcategory = [];
        state.error = action.error.message;
      }
    );
  },
});

export default subcategorySlice.reducer;
