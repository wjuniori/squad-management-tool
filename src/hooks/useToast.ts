import { useContext } from 'react';
import {
  ToastContextData,
  ToastContext,
} from '../providers/Toast/ToastProvider';
import { ErrorMessage } from '../@types/message';

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(ErrorMessage.NoToastProvider);
  }

  return context;
};

export default useToast;
