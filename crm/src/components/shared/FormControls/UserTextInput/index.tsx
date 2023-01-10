// libraries
import React from 'react';
import InputMask from 'react-input-mask';
import {
  ErrorMessage, Field, FormikProps, FormikValues,
} from 'formik';
// constants
import { CrmUser } from 'constants/graphql';

type CustomInputProps = {
  name: string,
  labelText?: string,
  placeholder?: string,
  isError?: boolean,
  mask? :string,
  type?: string,
  props?: FormikProps<FormikValues & CrmUser>,
};

const FormControlUserTextInput = ({
  name, labelText, isError, placeholder, mask, type, props,
}:CustomInputProps) => {
  const hasErrorClass = props?.errors[name] && props?.touched[name];

  const insertField = mask
    ? (
      <Field className={`${hasErrorClass ? 'is-invalid' : ''} form-user-input`} id={name} name={name}>
        {({ field } : { field: FormikProps<FormikValues> }) => (
          <InputMask
            className="form-user-input"
            mask={mask}
            {...field}
            id="Phone"
            placeholder={placeholder}
          />
        )}
      </Field>
    )
    : (
      <Field
        className={`${hasErrorClass && 'is-invalid'} form-user-input`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );

  return (
    <div>
      <div className="user-text-input-block">
        {labelText && <label htmlFor={name}>{ labelText }</label>}

        {insertField}
      </div>

      {isError && (
        <p className="form-error">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  );
};

export default FormControlUserTextInput;
