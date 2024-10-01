import { Meta, StoryFn } from '@storybook/react';
import { Modal } from './';

export default {
  title: 'Компоненты/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
