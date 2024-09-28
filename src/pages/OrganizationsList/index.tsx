import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Modal } from '../../components/Modal';
import { ModeEdit, Visibility, Delete } from '@mui/icons-material';
import { OrganizationForm } from '../../components/OrganizationForm';
import {
  getOrganizations,
  saveOrganizations,
  Organization,
} from '../../utils/storage';
import { ConfirmDialog } from '../../components/ConfirmDialog';
import './index.module.scss';

export const OrganizationsList: React.FC = () => {
  const [organizations, setOrganizations] =
    useState<Organization[]>(getOrganizations());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null);

  console.log('organizations', organizations);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [orgToDelete, setOrgToDelete] = useState<string | null>(null);

  const handleAdd = () => {
    setEditingOrg(null);
    setIsModalOpen(true);
  };

  const handleEdit = (org: Organization) => {
    setEditingOrg(org);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setOrgToDelete(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (orgToDelete) {
      const updatedOrgs = organizations.filter((org) => org.id !== orgToDelete);
      setOrganizations(updatedOrgs);
      saveOrganizations(updatedOrgs);
      setOrgToDelete(null);
      setIsConfirmOpen(false);
    }
  };

  const cancelDelete = () => {
    setOrgToDelete(null);
    setIsConfirmOpen(false);
  };

  const handleSubmit = (values: { name: string; address: string }) => {
    if (editingOrg) {
      const updatedOrgs = organizations.map((org) =>
        org.id === editingOrg.id ? { ...org, ...values } : org
      );
      setOrganizations(updatedOrgs);
      saveOrganizations(updatedOrgs);
    } else {
      const newOrg: Organization = { id: Date.now().toString(), ...values };
      const updatedOrgs = [...organizations, newOrg];
      setOrganizations(updatedOrgs);
      saveOrganizations(updatedOrgs);
    }
    setIsModalOpen(false);
  };

  return (
    <Container fixed>
      <Box my={4}>
        <Typography variant="h1" gutterBottom>
          Организации
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Добавить организацию
        </Button>
      </Box>
      {organizations.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <Typography color="textSecondary">
            Нет доступных организаций. Пожалуйста, добавьте новую организацию.
          </Typography>
        </Box>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Адрес</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organizations.length === 0 && (
              <Typography>Нет организаций</Typography>
            )}
            {organizations.map((org) => (
              <TableRow key={org.id}>
                <TableCell>{org.name}</TableCell>
                <TableCell>{org.address}</TableCell>
                <TableCell align="right">
                  <Button
                    href={`/organizations/${org.id}/employees`}
                    color="primary"
                    aria-label="Посмотреть сотрудников"
                  >
                    <Box display="flex" gap={1}>
                      <Visibility /> Сотрудники
                    </Box>
                  </Button>
                  <Button
                    onClick={() => handleEdit(org)}
                    aria-label="Редактировать"
                  >
                    <ModeEdit />
                  </Button>
                  <Button
                    onClick={() => handleDelete(org.id)}
                    color="error"
                    aria-label="Удалить организацию"
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
        content="Вы уверены, что хотите удалить эту организацию?"
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <OrganizationForm
          initialValues={{
            name: editingOrg ? editingOrg.name : '',
            address: editingOrg ? editingOrg.address : '',
          }}
          onSubmit={handleSubmit}
        />
      </Modal>
    </Container>
  );
};
