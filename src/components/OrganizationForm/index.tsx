import { FunctionComponent } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

interface OrganizationFormProps {
  initialValues: {
    name: string;
    address: string;
  };
  onSubmit: (values: { name: string; address: string }) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
  address: Yup.string().required('Обязательное поле'),
});

export const OrganizationForm: FunctionComponent<OrganizationFormProps> = ({
  initialValues,
  onSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting, resetForm }) => (
      <Form>
        <Box display="flex" flexDirection="column" gap={2}>
          <Field
            as={TextField}
            name="name"
            label="Название организации"
            variant="outlined"
            fullWidth
            helperText={<ErrorMessage name="name" />}
            error={Boolean(ErrorMessage.name)}
          />
          <Field
            as={TextField}
            name="address"
            label="Адрес"
            variant="outlined"
            fullWidth
            helperText={<ErrorMessage name="address" />}
            error={Boolean(ErrorMessage.name)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Сохранить
            </Button>
            <Button
              type="reset"
              variant="outlined"
              onClick={() => resetForm()}
              disabled={isSubmitting}
            >
              Очистить
            </Button>
          </Box>
        </Box>
      </Form>
    )}
  </Formik>
)
