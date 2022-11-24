import { configureStore } from '@reduxjs/toolkit';

import { subFormReqSlice } from './reducers/subFormReqSlice';
import subFormSlice from './reducers/subFormSlice';

const store = configureStore({
  reducer: {
    subForm: subFormSlice,
    [subFormReqSlice.reducerPath]: subFormReqSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subFormReqSlice.middleware),
});

export default store;
