// libraries
import React from 'react';
import { ErrorMessage, Field } from 'formik';

type CheckBoxBlockProps = {
  name: string,
  labelText?: string,
  isError?: boolean,
  children?: React.ReactNode
};

const FormControlCheckBoxBlock = ({
  name, labelText, isError, children,
}:CheckBoxBlockProps) => (
  <>
    <div className="check-group">
      <Field className="checkbox" id={name} name={name} type="checkbox" />
      {children
        ? <label className="form-label-check" htmlFor={name}>{ children }</label>
        : (labelText && <label className="form-label-check" htmlFor={name}>{ labelText }</label>)}
    </div>
    {isError && (
      <p className="form-error">
        <ErrorMessage name={name} />
      </p>
    )}
  </>
);

export default FormControlCheckBoxBlock;
