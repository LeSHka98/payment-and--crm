// libraries
import React, { ReactNode } from 'react';
import {
  ErrorMessage, Field,
} from 'formik';

type CustomInputProps = {
  name: string,
  labelText?: string,
  isError?: boolean,
  children?: ReactNode,
  options?: Array<{ value: string, text:string }>,
};

const FormControlUserSelect = ({
  name, labelText, isError, children, options,
}:CustomInputProps) => {
  const select = options
    ? (
      <Field as="select" className="form-select" id={name} name={name}>
        { options.map(({ value, text }) => <option key={value} value={value}>{text}</option>) }
      </Field>
    )
    : (
      <Field as="select" className="form-select" id={name} name={name}>
        { children }
      </Field>
    );

  return (
    <div>
      <div className="user-select-block">
        {labelText && <label htmlFor={name}>{ labelText }</label>}

        {select}
      </div>

      {isError && (
        <p className="form-error">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  );
};

export default FormControlUserSelect;
