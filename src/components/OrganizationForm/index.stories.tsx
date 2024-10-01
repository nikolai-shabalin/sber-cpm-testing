import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OrganizationForm } from '.';

export default {
  title: 'Компоненты/OrganizationForm',
  component: OrganizationForm,
} as ComponentMeta<typeof OrganizationForm>;

const Template: ComponentStory<typeof OrganizationForm> = (args) => <OrganizationForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  organizationName: 'Пример организации',
  organizationType: 'Тип организации',
  onSubmit: (data) => alert(`Submitted: ${JSON.stringify(data)}`),
};
