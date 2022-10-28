// libraries
import React from 'react';
import InputMask from 'react-input-mask';
import { ErrorMessage, Field, FormikProps } from 'formik';
// constants
import { Registration } from 'constants/index';

type CustomInputProps = {
  name: string,
  labelText?: string,
  placeholder?: string,
  isError?: boolean,
  mask? :string,
  type?: string,
};

const FormControlTextInput = ({
  name, labelText, isError, placeholder, mask, type,
}:CustomInputProps) => {
  const insertField = mask
    ? (
      <Field className="form-input" id={name} name={name} placeholder={placeholder}>
        {({ field } : { field: FormikProps<Registration> }) => (
          <InputMask
            className="form-input"
            mask={mask}
            {...field}
            id="Phone"
          />
        )}
      </Field>
    )
    : <Field className="form-input" id={name} name={name} placeholder={placeholder} type={type} />;

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
