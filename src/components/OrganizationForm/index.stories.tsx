import { StoryFn, Meta } from '@storybook/react';
import { OrganizationForm } from '.';

export default {
  title: 'Компоненты/OrganizationForm',
  component: OrganizationForm,
} as Meta<typeof OrganizationForm>;

const Template: StoryFn<typeof OrganizationForm> = (args) => (
  <OrganizationForm {...args} />
);

export const Default = Template.bind({});
