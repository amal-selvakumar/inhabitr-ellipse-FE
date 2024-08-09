import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: null, 
  quantity: 0,
};

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = furnitureSlice.actions;

export default furnitureSlice.reducer;
