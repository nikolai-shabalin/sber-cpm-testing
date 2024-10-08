import { FunctionComponent } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

/**
 * Компонент формы сотрудника.
 *
 * @interface EmployeeFormProps
 * @property initialValues - Начальные значения формы.
 * @property onSubmit - Функция, вызываемая при отправке формы.
 */
interface EmployeeFormProps {
  initialValues: {
    name: string;
    position: string;
  };
  onSubmit: (values: { name: string; position: string }) => void;
}

/**
 * Компонент формы для ввода данных сотрудника.
 */
export const EmployeeForm: FunctionComponent<EmployeeFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    position: Yup.string().required('Обязательное поле'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2}>
            <Field
              as={TextField}
              name="name"
              label="Имя сотрудника"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="name" />}
              error={Boolean(ErrorMessage.name)}
            />
            <Field
              as={TextField}
              name="position"
              label="Должность"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="position" />}
              error={Boolean(ErrorMessage)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Сохранить
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
