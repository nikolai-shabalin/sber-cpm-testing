// src/stories/EmployeeForm.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EmployeeForm } from './';

export default {
  title: 'Компоненты/EmployeeForm',
  component: EmployeeForm,
} as ComponentMeta<typeof EmployeeForm>;

const Template: ComponentStory<typeof EmployeeForm> = (args) => <EmployeeForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Добавьте необходимые пропсы для компонента EmployeeForm
  initialValues: {
    name: '',
    position: '',
    department: '',
  },
  onSubmit: (values) => alert(`Submitted: ${JSON.stringify(values)}`),
  onCancel: () => alert('Cancelled'),
};
