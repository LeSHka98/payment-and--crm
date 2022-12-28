// libraries
import { ToastOptions } from 'react-toastify';

export const TOASTIFY_MESSAGE = {
  paymentSuccess: 'Оплачено',
  paymentError: 'Ошибка оплаты !',
};

export const TOAST_PARAMETERS: ToastOptions = {
  autoClose: 3000,
  closeOnClick: true,
  draggable: true,
  hideProgressBar: true,
  position: 'top-center',
  rtl: false,
  theme: 'colored',
};
