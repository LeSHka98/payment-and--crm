// libraries
import { FormikValues } from 'formik';
import moment from 'moment';
import { PaymentMethod } from '@stripe/stripe-js';
// components
import { CreditDetailsType } from 'components/Credit/Calculator/config';
// constants
import { DATE_FORMATS } from 'constants/dateFormats';
// helpers
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/localStorage';

const shiftIndex = 1;

export const getFormData = (paymentMethod: PaymentMethod, values: FormikValues) => ({
  brand: paymentMethod.card.brand,
  exp_month: paymentMethod.card.exp_month,
  exp_year: paymentMethod.card.exp_year,
  lastSymbols: paymentMethod.card.last4,
  country: paymentMethod.card.country,
  funding: paymentMethod.card.funding,
  paymentTime: moment().format(DATE_FORMATS.timeAndDate),
  ...values,
});

export const saveFormDataToLocalStorage = (userEmail: string, formData: object) => {
  const allCredits: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

  const newCredits = allCredits.map((credit, index) => {
    if (index === allCredits.length - shiftIndex) {
      return { ...credit, status: 'Paid', cardFormData: formData };
    }

    return credit;
  });

  saveToLocalStorage(userEmail, newCredits);
};
