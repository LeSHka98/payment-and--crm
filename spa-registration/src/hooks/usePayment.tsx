// libraries
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormikValues } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// constants
import { TOAST_PARAMETERS, TOASTIFY_MESSAGE } from 'constants/toastify';
import { CreditDetailsType } from 'components/Credit/Calculator/config';
import { ROUTER_PATHS } from 'constants/router';
// helpers
import { getFormData, saveFormDataToLocalStorage } from 'helpers/payment';
import { getFromLocalStorage } from 'helpers/localStorage';
// hooks
import { useAuth } from 'hooks/useAuthProvider';

const usePayment = () => {
  const { userEmail } = useAuth();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [isPayButtonDisabled, setIsPayButtonDisabled] = useState<boolean>(false);
  const allCredits: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

  const areActiveCreditsExist = allCredits.find((credit) => credit.status === 'Active');

  const handleSubmit = async (values: FormikValues) => {
    try {
      setIsPayButtonDisabled(true);
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

      if (!paymentMethod) {
        return;
      }
      const formData = getFormData(paymentMethod, values);

      saveFormDataToLocalStorage(userEmail, formData);

      toast.success(TOASTIFY_MESSAGE.paymentSuccess, {
        ...TOAST_PARAMETERS,
        onClose: () => {
          setIsPayButtonDisabled(false);
          navigate(ROUTER_PATHS.pdf, { replace: true });
        },
      });
    } catch (e) {
      toast.error(TOASTIFY_MESSAGE.paymentError, { ...TOAST_PARAMETERS, onClose: () => setIsPayButtonDisabled(false) });
    }
  };

  return {
    handleSubmit,
    isPayButtonDisabled,
    areActiveCreditsExist,
  };
};

export default usePayment;
