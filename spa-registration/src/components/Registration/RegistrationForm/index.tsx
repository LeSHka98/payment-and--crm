// libraries
import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
// api
import { createUserAndRegister } from 'api/FireBase/firebase';
// components
import Button from 'components/shared/Buttons';
import FormControlTextInput from 'components/shared/FormControls/TextInput';
import FormControlDateInputsBlock from 'components/shared/FormControls/DateInputsBlock';
import FormControlRadioGroup from 'components/shared/FormControls/RadioGroup';
import FormControlCheckBoxBlock from 'components/shared/FormControls/CheckBoxBlock';
import AdditionalInfoBlock from 'components/Registration/AdditionalInfoBlock';
// constants
import { MIN_AGE, MAX_AGE, Registration } from 'constants/common';
import { signupSchema, initialValues } from 'components/Registration/RegistrationForm/config';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const registerUser = (values: Registration) => createUserAndRegister(values, navigate);

  return (
    <div>
      <h2 className="registration-form-name">Enter your personal data</h2>
      <Link to="/login">
        <Button className="green-button button">I&apos;m already registered</Button>
      </Link>
      <Formik
        initialValues={initialValues}
        onSubmit={registerUser}
        validationSchema={signupSchema}
      >
        {() => (
          <Form className="form">
            <FormControlTextInput isError labelText="Email *" name="email" />
            <FormControlTextInput isError labelText="Password *" name="password" />
            <FormControlTextInput isError labelText="Repeat Password *" name="repeatedPassword" />
            <FormControlTextInput isError labelText="First Name *" name="firstName" />
            <FormControlTextInput isError labelText="Last Name *" name="lastName" />
            <FormControlTextInput isError labelText="Passport *" name="passport" />

            <FormControlTextInput isError labelText="Phone *" mask="+375(99)999-99-99" name="phone" />

            <FormControlDateInputsBlock
              from={MAX_AGE}
              isError
              labelText="Birthday *"
              to={MIN_AGE}
            />

            <FormControlRadioGroup
              labelText="Sex"
              name="sex"
              radioData={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
            />

            <FormControlCheckBoxBlock isError labelText="I have read and accept the privacy policy" name="conditionRules" />
            <FormControlCheckBoxBlock name="conditionSMS">
              I expressly consent to receive communications through WhatsApp in order to
              streamline both the management of pre-contracted and contracted services.
              More information about WhatsApp privacy here
            </FormControlCheckBoxBlock>

            <button className="button orange-button" type="submit">REGISTER</button>
          </Form>
        )}
      </Formik>

      <AdditionalInfoBlock />
    </div>
  );
};

export default RegistrationForm;
