import { ReactNode, FunctionComponent } from 'react';
import { Modal as MuiModal, Box } from '@mui/material';

/**
 * Свойства компонента Modal.
 *
 * @property open - Определяет, открыт ли модальный диалог.
 * @property onClose - Функция, вызываемая при закрытии модального диалога.
 * @property children - Дочерние элементы, отображаемые внутри модального диалога.
 */
interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

/**
 * Компонент модального окна.
 */
export const Modal: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  children,
}) => (
  <MuiModal open={open} onClose={onClose} aria-labelledby="modal-title">
    <Box sx={style}>{children}</Box>
  </MuiModal>
);
