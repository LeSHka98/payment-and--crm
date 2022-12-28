// libraries
import React from 'react';
import InputMask from 'react-input-mask';
import {
  ErrorMessage, Field, FormikProps, FormikValues,
} from 'formik';
// constants
import { Registration } from 'constants/common';
import { PaymentFormType } from 'components/Payment/CheckoutForm/config';

type CustomInputProps = {
  name: string,
  labelText?: string,
  placeholder?: string,
  isError?: boolean,
  mask? :string,
  type?: string,
  props?: FormikProps<FormikValues & PaymentFormType>,
};

const FormControlTextInput = ({
  name, labelText, isError, placeholder, mask, type, props,
}:CustomInputProps) => {
  const hasErrorClass = props?.errors[name] && props?.touched[name];

  const insertField = mask
    ? (
      <Field className={`${hasErrorClass ? 'input-invalid' : ''} form-input`} id={name} name={name} placeholder={placeholder}>
        {({ field } : { field: FormikProps<Registration> }) => (
          <InputMask
            className={`${hasErrorClass ? 'input-invalid' : ''} form-input`}
            mask={mask}
            {...field}
            id="Phone"
          />
        )}
      </Field>
    )
    : (
      <Field
        className={`${hasErrorClass ? 'input-invalid' : ''} form-input`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );

  return (
    <>
      {labelText && <label className="form-label" htmlFor={name}>{ labelText }</label>}

      {insertField}

      {isError && (
      <p className="form-error">
        <ErrorMessage name={name} />
      </p>
      )}
    </>
  );
};

export default FormControlTextInput;
