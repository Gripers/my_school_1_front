import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: '',
};

const subFormSlice = createSlice({
  name: 'subForm',
  initialState,
  reducers: {
    updCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { updCourse } = subFormSlice.actions;

export default subFormSlice.reducer;
