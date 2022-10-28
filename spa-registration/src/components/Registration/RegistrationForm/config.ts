// libraries
import * as Yup from 'yup';
import moment from 'moment';
// constants
import {
  PHONE_REGEXP, PASSPORT_REGEXP, ONLY_LATIN_REGEXP, Registration, MAX_AGE, MIN_AGE, PASSWORD_REGEXP,
} from 'constants/index';
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';

const checkAge = ({ day, month, year } : { day: number, month: number, year: number }) => {
  const difference = moment().diff(moment({ year, month, day }), 'years', true);

  return (difference < MAX_AGE) && (difference > MIN_AGE);
};

const passwordOptions = {
  length: 12,
};
const firstNameOptions = {
  minLength: 2,
  maxLength: 30,
};
const lastNameOptions = {
  minLength: 2,
  maxLength: 30,
};

export const signupSchema = Yup.object().shape({
  email: Yup.string().trim().email().required(REGISTER_YAP_ERRORS.required),
  password: Yup.string().trim()
    .min(passwordOptions.length, REGISTER_YAP_ERRORS.passwordLength)
    .matches(PASSWORD_REGEXP, REGISTER_YAP_ERRORS.passwordMessage)
    .required(REGISTER_YAP_ERRORS.required),
  repeatedPassword: Yup.string().trim()
    .test('isValid', REGISTER_YAP_ERRORS.repeatPassword, (value, textContent) => textContent.parent.password === value),
  firstName: Yup.string().trim()
    .min(firstNameOptions.minLength, REGISTER_YAP_ERRORS.tooShort)
    .max(firstNameOptions.maxLength, REGISTER_YAP_ERRORS.tooLong)
    .matches(ONLY_LATIN_REGEXP, REGISTER_YAP_ERRORS.onlyLatinLetters)
    .required(REGISTER_YAP_ERRORS.required),
  lastName: Yup.string().trim()
    .min(lastNameOptions.minLength, REGISTER_YAP_ERRORS.tooShort)
    .max(lastNameOptions.maxLength, REGISTER_YAP_ERRORS.tooLong)
    .matches(ONLY_LATIN_REGEXP, REGISTER_YAP_ERRORS.onlyLatinLetters)
    .required(REGISTER_YAP_ERRORS.required),
  passport: Yup.string().trim()
    .matches(PASSPORT_REGEXP, REGISTER_YAP_ERRORS.passportSchema)
    .required(REGISTER_YAP_ERRORS.required),
  phone: Yup.string()
    .matches(PHONE_REGEXP, REGISTER_YAP_ERRORS.invalidPhoneNumber)
    .required(REGISTER_YAP_ERRORS.required),
  day: Yup.number(),
  month: Yup.number(),
  year: Yup.number(),
  isValidDate: Yup.boolean().test(
    'isValid',
    REGISTER_YAP_ERRORS.ageLimits,
    (value, textContent) => {
      const Date = {
        day: Number(textContent.parent.day),
        month: Number(textContent.parent.month),
        year: Number(textContent.parent.year),
      };

      return checkAge(Date);
    },
  ),
  conditionRules: Yup.boolean()
    .required(REGISTER_YAP_ERRORS.required)
    .test('isValid', REGISTER_YAP_ERRORS.confirmRules, (value) => value === true),
});

export const initialValues:Registration = {
  email: '',
  password: '',
  repeatedPassword: '',
  passport: '',
  firstName: '',
  lastName: '',
  sex: 'male',
  conditionRules: false,
  conditionSMS: false,
  phone: '',
  day: moment().date(),
  month: moment().month(),
  year: moment().year() - MAX_AGE,
  isValidDate: false,
};
