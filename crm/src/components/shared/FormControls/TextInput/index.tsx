// libraries
import React from 'react';
import InputMask from 'react-input-mask';
import {
  ErrorMessage, Field, FormikProps, FormikValues,
} from 'formik';

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
      <Field className="form-control" id={name} name={name}>
        {({ field } : { field: FormikProps<FormikValues> }) => (
          <InputMask
            className="form-control"
            mask={mask}
            {...field}
            id="Phone"
            placeholder={placeholder}
          />
        )}
      </Field>
    )
    : <Field className="form-control" id={name} name={name} placeholder={placeholder} type={type} />;

  return (
    <div>
      {labelText && <label className="form-label" htmlFor={name}>{ labelText }</label>}

      {insertField}

      {isError && (
      <p className="form-error">
        <ErrorMessage name={name} />
      </p>
      )}
    </div>
  );
};

export default FormControlTextInput;
