import * as Yup from 'yup';
import moment from 'moment';
// constants
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';
import {
  PASSPORT_REGEXP, PHONE_REGEXP, FORBIDDEN_EMAILS, LATIN_SPACE_HYPHEN_REGEXP, MAX_AGE_DIFFERENCE,
} from 'constants/common';

const checkAge = (value: string) => {
  if (!value) {
    return true;
  }
  if (moment(value, 'DD.MM.YYYY').isValid()) {
    const difference = moment().diff(moment(value, 'DD.MM.YYYY'), 'years', true);

    return Math.abs(difference) < MAX_AGE_DIFFERENCE;
  }

  return false;
};

const checkForbiddenEmails = (value: string) => {
  if (value) {
    const mainPart = (value.split('@'))[0];

    return !FORBIDDEN_EMAILS.includes(mainPart);
  }

  return true;
};

const length = {
  email: 320,
  snils: 12,
  acNumber: 20,
};

export const searchSchema = Yup.object().shape({
  clientID: Yup.number().typeError(REGISTER_YAP_ERRORS.onlyNumbers),
  email: Yup.string().trim()
    .email()
    .max(length.email, REGISTER_YAP_ERRORS.tooLong)
    .test(
      'isEmail',
      REGISTER_YAP_ERRORS.incorrectEmail,
      (value) => checkForbiddenEmails(value),
    ),
  lastName: Yup.string().trim()
    .matches(LATIN_SPACE_HYPHEN_REGEXP, REGISTER_YAP_ERRORS.enterCorrectValue),
  passport: Yup.string().trim()
    .matches(PASSPORT_REGEXP, REGISTER_YAP_ERRORS.passportInvalid),
  phone: Yup.string()
    .matches(PHONE_REGEXP, REGISTER_YAP_ERRORS.invalidPhoneNumber),
  birthday: Yup.string()
    .test(
      'isValidDate',
      REGISTER_YAP_ERRORS.ageLimits,
      (value) => checkAge(value),
    ),
  snils: Yup.number().typeError(REGISTER_YAP_ERRORS.onlyNumbers)
    .test('isValidSnils', REGISTER_YAP_ERRORS.tooLong, (value) => (value ? (String(value).length < length.snils) : true)),
  accountNumber: Yup.number().typeError(REGISTER_YAP_ERRORS.onlyNumbers)
    .test('isValidAccountNumber', REGISTER_YAP_ERRORS.tooLong, (value) => (value ? (String(value).length < length.snils) : true)),
});

export const initialValues = {
  clientID: '',
  email: '',
  lastName: '',
  snils: '',
  birthday: '',
  phone: '',
  passport: '',
  accountNumber: '',
};
