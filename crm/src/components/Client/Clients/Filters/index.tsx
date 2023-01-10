// libraries
import React from 'react';
import { Formik, Form } from 'formik';
// components
import FormControlTextInput from 'components/shared/FormControls/TextInput';
import { Button } from 'reactstrap';
// constants
import { initialValues, searchSchema } from 'components/Client/Clients/Filters/config';
import { FilterFieldsType } from 'constants/common';
// static
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';

type FiltersProps = {
  applyFilter: (values: FilterFieldsType) => void,
  resetFilter: (values: FilterFieldsType) => void,
};

const Filters: React.FC<FiltersProps> = ({ applyFilter, resetFilter }) => (
  <Formik
    initialValues={initialValues}
    onReset={resetFilter}
    onSubmit={applyFilter}
    validationSchema={searchSchema}
  >
    {() => (
      <Form className="form">
        <div className="custom-wrapper form-wrapper">
          <FormControlTextInput isError labelText="ID" name="clientID" />
          <FormControlTextInput isError labelText="Email" name="email" />
          <FormControlTextInput isError labelText="Last Name" name="lastName" />
          <FormControlTextInput isError labelText="SNILS" name="snils" />
          <FormControlTextInput
            isError
            labelText="Birthday"
            mask="99.99.9999"
            name="birthday"
            placeholder="00.00.0000"
          />
          <FormControlTextInput
            isError
            labelText="Phone"
            mask="+7(999)999-99-99"
            name="phone"
            placeholder="+7(___) ___-__-__"
          />
          <FormControlTextInput
            isError
            labelText="Passport"
            mask="99 99 999999"
            name="passport"
            placeholder="00 00 000000"
          />
          <FormControlTextInput isError labelText="Account number" name="accountNumber" />
        </div>

        <div className="form-control-buttons">
          <Button type="submit">Search</Button>
          <button className="reset" type="reset">
            <CloseIcon />
            <span>Reset</span>
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default Filters;
