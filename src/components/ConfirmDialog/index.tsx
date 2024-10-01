import { FunctionComponent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

/**
 * Свойства для компонента ConfirmDialog.
 *
 * @property open - Флаг, указывающий, открыт ли диалог.
 * @property title - Заголовок диалога.
 * @property content - Содержимое диалога.
 * @property onClose - Функция, вызываемая при закрытии диалога.
 * @property onConfirm - Функция, вызываемая при подтверждении действия в диалоге.
 */
interface ConfirmDialogProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * Компонент ConfirmDialog отображает диалоговое окно подтверждения.
 */
export const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="confirm-dialog-title"
    aria-describedby="confirm-dialog-description"
  >
    <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="confirm-dialog-description">
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Отмена
      </Button>
      <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
        Удалить
      </Button>
    </DialogActions>
  </Dialog>
);
