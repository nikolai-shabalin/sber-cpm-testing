import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Organization } from '../utils/storage';
import { saveOrganizations, getOrganizations } from '../utils/storage';

interface OrganizationsState {
  organizations: Organization[];
}

const initialState: OrganizationsState = {
  organizations: getOrganizations(),
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<Organization>) => {
      state.organizations.push(action.payload);
      saveOrganizations(state.organizations);
    },
    updateOrganization: (state, action: PayloadAction<Organization>) => {
      const index = state.organizations.findIndex(org => org.id === action.payload.id);
      if (index !== -1) {
        state.organizations[index] = action.payload;
        saveOrganizations(state.organizations);
      }
    },
    deleteOrganization: (state, action: PayloadAction<string>) => {
      state.organizations = state.organizations.filter(org => org.id !== action.payload);
      saveOrganizations(state.organizations);
    },
  },
});

export const { addOrganization, updateOrganization, deleteOrganization } = organizationsSlice.actions;

export default organizationsSlice.reducer;
