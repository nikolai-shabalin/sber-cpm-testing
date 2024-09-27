import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrganizationsList } from './pages/OrganizationsList';
import { EmployeesList } from './pages/EmployeesList';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrganizationsList />} />
        <Route
          path="/organizations/:orgId/employees"
          element={<EmployeesList />}
        />
      </Routes>
    </Router>
  );
};
