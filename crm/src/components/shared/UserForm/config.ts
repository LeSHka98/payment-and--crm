// libraries
import * as Yup from 'yup';
// constants
import { CrmUser } from 'constants/graphql';
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';
import { USER_FORM_PHONE_REGEXP } from 'constants/common';

export const initialValues:CrmUser = {
  email: '',
  firstName: '',
  internalPhone: '',
  lastName: '',
  location: 'RU',
  mobilePhone: '',
  otherInfo: '',
  role: 'ADMIN',
  secondName: '',
  status: 'ACTIVE',
};

export const userSchema = Yup.object().shape({
  email: Yup.string().trim()
    .email()
    .required(REGISTER_YAP_ERRORS.required),
  firstName: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
  secondName: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
  lastName: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
  mobilePhone: Yup.string().required(REGISTER_YAP_ERRORS.required)
    .matches(USER_FORM_PHONE_REGEXP, REGISTER_YAP_ERRORS.invalidPhoneNumber),
  internalPhone: Yup.string().required(REGISTER_YAP_ERRORS.required)
    .matches(USER_FORM_PHONE_REGEXP, REGISTER_YAP_ERRORS.invalidPhoneNumber),
  role: Yup.string().required(REGISTER_YAP_ERRORS.required),
  status: Yup.string().required(REGISTER_YAP_ERRORS.required),
  otherInfo: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
});
