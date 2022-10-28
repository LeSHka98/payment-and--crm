// libraries
import * as Yup from 'yup';
// constants
import { REGISTER_YAP_ERRORS } from 'constants/registerYupErrors';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().trim().email().required(REGISTER_YAP_ERRORS.required),
  password: Yup.string().trim().required(REGISTER_YAP_ERRORS.required),
});
