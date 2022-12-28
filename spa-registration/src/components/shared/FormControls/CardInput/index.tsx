// libraries
import React, { useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { FormikProps, FormikValues } from 'formik';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
// constants
import { PaymentFormType } from 'components/Payment/CheckoutForm/config';

type CustomInputProps = {
  labelText?: string,
  name: string,
  isError?: boolean,
  props?: FormikProps<FormikValues & PaymentFormType>,
};

const CardInput = ({
  labelText, isError, name, props,
}:CustomInputProps) => {
  const {
    setFieldValue, setFieldTouched, errors, touched,
  } = props;

  const [cardError, setCardError] = useState<string>();
  const formikError = touched[name] && errors[name]?.toString();

  const cardElementOptions = {
    hidePostalCode: true,
    classes: {
      base: `form-input ${(cardError || formikError) ? 'input-invalid' : ''}`,
    },
    style: {
      base: {
        fontSize: '16px',
      },
    },
  };

  const handleCardChange = (e: StripeCardElementChangeEvent) => {
    setFieldValue(name, e?.complete);
    setCardError(e?.error?.message);
  };

  return (
    <>
      {labelText && <label className="form-label" htmlFor="card">{ labelText }</label>}

      <CardElement
        id="card"
        onBlur={() => setFieldTouched(name, true)}
        onChange={handleCardChange}
        options={cardElementOptions}
      />

      {(isError && touched[name]) && <p className="form-error">{cardError || formikError}</p> }
    </>
  );
};

export default CardInput;
