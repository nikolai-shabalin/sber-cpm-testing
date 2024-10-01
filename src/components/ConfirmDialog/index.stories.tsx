import { Meta, StoryFn } from '@storybook/react';
import { ConfirmDialog } from './';

export default {
  title: 'Компоненты/ConfirmDialog',
  component: ConfirmDialog,
} as Meta<typeof ConfirmDialog>;

const Template: StoryFn<typeof ConfirmDialog> = (args) => (
  <ConfirmDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Добавьте необходимые пропсы для компонента ConfirmDialog
  open: true,
  title: 'Подтвердите действие',
  content: 'Вы уверены, что хотите продолжить?',
  onConfirm: () => alert('Подтверждено')
};
