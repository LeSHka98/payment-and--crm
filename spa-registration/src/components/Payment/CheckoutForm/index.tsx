// libraries
import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
// components
import FormControlTextInput from 'components/shared/FormControls/TextInput';
import CardInput from 'components/shared/FormControls/CardInput';
// constants
import { paymentSchema, paymentInitialValues } from 'components/Payment/CheckoutForm/config';
// hooks
import usePayment from 'hooks/usePayment';

const previousPage = -1;

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, isPayButtonDisabled, areActiveCreditsExist } = usePayment();

  useEffect(() => {
    if (!areActiveCreditsExist) {
      navigate(previousPage);
    }
  }, [navigate, areActiveCreditsExist]);

  return (
    <Formik
      initialValues={paymentInitialValues}
      onSubmit={handleSubmit}
      validationSchema={paymentSchema}
    >
      {(props) => (
        <Form>
          <FormControlTextInput isError labelText="Name" name="name" props={props} />
          <FormControlTextInput isError labelText="Email" name="email" props={props} />
          <FormControlTextInput isError labelText="Phone" mask="+375(99)999-99-99" name="phone" props={props} />
          <CardInput isError labelText="Card" name="card" props={props} />
          <FormControlTextInput isError labelText="Name on Card" name="cardName" props={props} />
          <button className="button payment-button" disabled={isPayButtonDisabled} type="submit">Pay</button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
