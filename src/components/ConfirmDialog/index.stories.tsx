// src/stories/ConfirmDialog.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {ConfirmDialog} from './';

export default {
  title: 'Компоненты/ConfirmDialog',
  component: ConfirmDialog,
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args) => <ConfirmDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Добавьте необходимые пропсы для компонента ConfirmDialog
  open: true,
  title: 'Подтвердите действие',
  content: 'Вы уверены, что хотите продолжить?',
  onConfirm: () => alert('Подтверждено'),
  onCancel: () => alert('Отменено'),
};
