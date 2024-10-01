import { configureStore } from '@reduxjs/toolkit';
import organizationsReducer from './organizationsSlice';
import employeesReducer from './employeesSlice';

const store = configureStore({
  reducer: {
    organizations: organizationsReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
