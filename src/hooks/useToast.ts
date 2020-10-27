import { useContext } from 'react';
import { ToastContextData, ToastContext } from '../contexts/Toast/ToastContext';
import { ErrorMessage } from '../@types/message';

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(ErrorMessage.NoToastProvider);
  }

  return context;
};

export default useToast;
