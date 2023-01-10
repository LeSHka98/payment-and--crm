// libraries
import React from 'react';
import {
  ErrorMessage, Field, FormikProps, FormikValues,
} from 'formik';
import { CrmUser } from 'constants/graphql';

type CustomInputProps = {
  name: string,
  labelText?: string,
  placeholder?: string,
  isError?: boolean,
  type?: string,
  props?: FormikProps<FormikValues & CrmUser>,
};

const FormControlUserTextArea = ({
  name, labelText, isError, placeholder, type, props,
}:CustomInputProps) => {
  const hasErrorClass = props?.errors[name] && props?.touched[name];

  return (
    <div>
      <div className="user-textarea-block">
        {labelText && <label htmlFor={name}>{ labelText }</label>}

        <Field
          as="textarea"
          className={`${hasErrorClass ? 'is-invalid' : ''} form-user-textarea`}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>

      {isError && (
        <p className="form-error">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  );
};

export default FormControlUserTextArea;
