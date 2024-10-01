import { configureStore } from '@reduxjs/toolkit';
import organizationsReducer from './organizationsSlice';
import employeesReducer from './employeesSlice';

/**
 * Конфигурация и создание Redux store.
 *
 * Store включает в себя два редьюсера:
 * - organizations: отвечает за состояние организаций
 * - employees: отвечает за состояние сотрудников
 */
const store = configureStore({
  reducer: {
    organizations: organizationsReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
