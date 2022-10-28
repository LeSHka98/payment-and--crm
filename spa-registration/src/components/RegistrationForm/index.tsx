// libraries
import React from 'react';
import { Formik, Form } from 'formik';
// api
import saveDataToDatabase from 'api/firebase';
// components
import Button from 'components/shared/Buttons';
import FormControlTextInput from 'components/shared/FormControls/TextInput';
import FormControlDateInputsBlock from 'components/shared/FormControls/DateInputsBlock';
import FormControlRadioGroup from 'components/shared/FormControls/RadioGroup';
import FormControlCheckBoxBlock from 'components/shared/FormControls/CheckBoxBlock';
import AdditionalInfoBlock from 'components/shared/AdditionalInfoBlock';
// constants
import { SignupSchema, initialValues } from 'components/RegistrationForm/config';
import { MIN_AGE, MAX_AGE } from 'constants/index';

const RegistrationForm = () => (
  <div>
    <h2 className="registration-form-name">Enter your personal data</h2>
    <Button className="form-button button">I&apos;m already registered</Button>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => saveDataToDatabase(values)}
      validationSchema={SignupSchema}
    >
      {() => (
        <Form className="form">
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

          <button className="button form-submit-button" type="submit">REGISTER</button>
        </Form>
      )}
    </Formik>

    <AdditionalInfoBlock />
  </div>
);

export default RegistrationForm;
