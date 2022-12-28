// libraries
import * as Yup from 'yup';
// constants
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';
import { ALLOWED_EMAIL_ENDINGS, NO_NUMBERS_REGEXP } from 'constants/common';

export type PaymentFormType = {
  email: string,
  name: string,
  phone: string,
  cardName: string,
  card: boolean,
};

export const paymentInitialValues = {
  email: '',
  name: '',
  phone: '',
  cardName: '',
  card: false,
};

const checkEmailIsAllowed = (email: string) => {
  if (email) {
    const backEmailPart = email?.split('@')[1];
    const foundEnding = ALLOWED_EMAIL_ENDINGS.find((ending) => ending === backEmailPart);

    return !!foundEnding;
  }

  return true;
};

export const paymentSchema = Yup.object().shape({
  email: Yup.string().trim().email()
    .test('Email', REGISTER_YAP_ERRORS.domain, (value) => checkEmailIsAllowed(value))
    .required(REGISTER_YAP_ERRORS.required),
  name: Yup.string().trim().matches(NO_NUMBERS_REGEXP, REGISTER_YAP_ERRORS.onlyLetters).required(REGISTER_YAP_ERRORS.required),
  phone: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
  cardName: Yup.string().matches(NO_NUMBERS_REGEXP, REGISTER_YAP_ERRORS.onlyLetters).trim()
    .uppercase(REGISTER_YAP_ERRORS.uppercase)
    .strict()
    .required(REGISTER_YAP_ERRORS.required),
  card: Yup.boolean().required(REGISTER_YAP_ERRORS.required)
    .test('test', REGISTER_YAP_ERRORS.required, (value) => value),
});
