import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../utils/storage';
import { saveEmployees, getEmployees } from '../utils/storage';

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: getEmployees(),
};

/**
 * Срез состояния сотрудников.
 */
const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
      saveEmployees(state.employees);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
        saveEmployees(state.employees);
      }
    },
    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
      saveEmployees(state.employees);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
