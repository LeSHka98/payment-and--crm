// libraries
import React from 'react';
import { ErrorMessage, Field } from 'formik';

type RadioGroupProps = {
  name: string,
  labelText?: string,
  radioData?: Array<{ label:string, value: string }>,
  isError?: boolean,
  children?: React.ReactNode,
};

const FormControlRadioGroup = ({
  name, labelText, radioData, isError, children,
}:RadioGroupProps) => {
  if (children) {
    return (
      <>
        <span className="form-label">{labelText}</span>
        <div className="radio-group" role="group">
          {children}
        </div>
        {isError && (
          <p className="form-error">
            <ErrorMessage name={name} />
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <span className="form-label">{labelText}</span>
      <div className="radio-group" role="group">
        {radioData
          ? radioData.map((obj) => (
            <span key={obj.value} className="radio-elem">
              <label className="radio-elem-caption" htmlFor={obj.value}>{obj.label}</label>
              <Field id={obj.value} name={name} type="radio" value={obj.value} />
            </span>
          ))
          : <h5>Data is not provided</h5>}
      </div>
      {isError && (
        <p className="form-error">
          <ErrorMessage name={name} />
        </p>
      )}
    </>
  );
};

export default FormControlRadioGroup;
