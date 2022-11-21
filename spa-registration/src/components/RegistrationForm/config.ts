import * as Yup from 'yup';
import moment from 'moment';
// constants
import {
  PHONE_REGEXP, PASSPORT_REGEXP, ONLY_LATIN_REGEXP, Registration, MAX_AGE, MIN_AGE,
} from 'constants/index';
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';

const checkAge = ({ day, month, year } : { day: number, month: number, year: number }) => {
  const difference = moment().diff(moment({ year, month, day }), 'years', true);

  return (difference < MAX_AGE) && (difference > MIN_AGE);
};

const firstName = {
  minLength: 2,
  maxLength: 30,
};
const lastName = {
  minLength: 2,
  maxLength: 30,
};

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().trim()
    .min(firstName.minLength, REGISTER_YAP_ERRORS.tooShort)
    .max(firstName.maxLength, REGISTER_YAP_ERRORS.tooLong)
    .matches(ONLY_LATIN_REGEXP, REGISTER_YAP_ERRORS.onlyLatinLetters)
    .required(REGISTER_YAP_ERRORS.required),
  lastName: Yup.string().trim()
    .min(lastName.minLength, REGISTER_YAP_ERRORS.tooShort)
    .max(lastName.maxLength, REGISTER_YAP_ERRORS.tooLong)
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
