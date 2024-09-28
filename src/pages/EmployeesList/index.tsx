import { useState, FunctionComponent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { ModeEdit, Delete } from '@mui/icons-material';
import { Modal } from '../../components/Modal';
import { EmployeeForm } from '../../components/EmployeeForm';
import { getEmployees, saveEmployees, Employee } from '../../utils/storage';
import { ConfirmDialog } from '../../components/ConfirmDialog';
import './index.module.scss';

export const EmployeesList: FunctionComponent = () => {
  const { orgId } = useParams<{ orgId: string }>();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>(
    getEmployees().filter((emp) => emp.organizationId === orgId)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmp, setEditingEmp] = useState<Employee | null>(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [empToDelete, setEmpToDelete] = useState<string | null>(null);

  const handleAdd = () => {
    setEditingEmp(null);
    setIsModalOpen(true);
  };

  const handleEdit = (emp: Employee) => {
    setEditingEmp(emp);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setEmpToDelete(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (empToDelete) {
      const updatedEmps = employees.filter((emp) => emp.id !== empToDelete);
      setEmployees(updatedEmps);
      saveEmployees(getEmployees().filter((emp) => emp.id !== empToDelete));
      setEmpToDelete(null);
      setIsConfirmOpen(false);
    }
  };

  const cancelDelete = () => {
    setEmpToDelete(null);
    setIsConfirmOpen(false);
  };

  const handleSubmit = (values: { name: string; position: string }) => {
    if (editingEmp) {
      const updatedEmps = employees.map((emp) =>
        emp.id === editingEmp.id ? { ...emp, ...values } : emp
      );
      setEmployees(updatedEmps);
      saveEmployees(
        getEmployees().map((emp) =>
          emp.id === editingEmp.id ? { ...emp, ...values } : emp
        )
      );
    } else {
      const newEmp: Employee = {
        id: Date.now().toString(),
        organizationId: orgId!,
        ...values,
      };
      const updatedEmps = [...employees, newEmp];
      setEmployees(updatedEmps);
      saveEmployees([...getEmployees(), newEmp]);
    }
    setIsModalOpen(false);
  };

  return (
    <Container fixed>
      <Box my={4}>
        <Typography variant="h1" gutterBottom>
          Сотрудники организации
        </Typography>

        <Box gap={4} display="flex">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(-1)}
          >
            Назад к организациям
          </Button>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Добавить сотрудника
          </Button>
        </Box>
      </Box>

      {employees.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <Typography color="textSecondary">
            В организации пока нет сотрудников. Пожалуйста, добавьте нового
            сотрудника.
          </Typography>
        </Box>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Должность</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleEdit(emp)}
                    aria-label="Редактировать данные сотрудника"
                  >
                    <ModeEdit />
                  </Button>
                  <Button
                    onClick={() => handleDelete(emp.id)}
                    color="error"
                    aria-label="Удалить сотрудника"
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <ConfirmDialog
        open={isConfirmOpen}
        title="Подтверждение удаления"
        content="Вы уверены, что хотите удалить этого сотрудника?"
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmployeeForm
          initialValues={{
            name: editingEmp ? editingEmp.name : '',
            position: editingEmp ? editingEmp.position : '',
          }}
          onSubmit={handleSubmit}
        />
      </Modal>
    </Container>
  );
};
