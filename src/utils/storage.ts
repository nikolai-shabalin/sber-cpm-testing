export interface Organization {
  id: string;
  name: string;
  address: string;
}

export interface Employee {
  id: string;
  organizationId: string;
  name: string;
  position: string;
}

const ORG_KEY = 'organizations';
const EMP_KEY = 'employees';

export const getOrganizations = (): Organization[] => {
  const data = localStorage.getItem(ORG_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveOrganizations = (organizations: Organization[]) => {
  localStorage.setItem(ORG_KEY, JSON.stringify(organizations));
};

export const getEmployees = (): Employee[] => {
  const data = localStorage.getItem(EMP_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEmployees = (employees: Employee[]) => {
  localStorage.setItem(EMP_KEY, JSON.stringify(employees));
};
