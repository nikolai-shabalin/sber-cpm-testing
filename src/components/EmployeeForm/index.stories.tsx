import { Meta, StoryFn } from '@storybook/react';
import { EmployeeForm } from './';

export default {
  title: 'Компоненты/EmployeeForm',
  component: EmployeeForm,
} as Meta<typeof EmployeeForm>;

const Template: StoryFn<typeof EmployeeForm> = (args) => (
  <EmployeeForm {...args} />
);

export const Default = Template.bind({});
