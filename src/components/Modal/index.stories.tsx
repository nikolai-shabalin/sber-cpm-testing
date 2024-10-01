import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './';

export default {
  title: 'Компоненты/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Пример модального окна',
  content: 'Это содержимое модального окна.',
  onClose: () => alert('Modal closed'),
};
