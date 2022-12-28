// libraries
import React from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
// api
import { logIn } from 'api/FireBase/firebase';
// assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
// components
import FormControlTextInput from 'components/shared/FormControls/TextInput';
// constants
import { loginInitialValues, loginSchema } from 'components/Login/LoginForm/config';
import { Login } from 'constants/common';

const LoginForm = () => {
  const navigate = useNavigate();

  const login = (values: Login) => logIn(values, navigate);

  return (
    <div className="login-form">
      <Logo />
      <h3>Log in into your account</h3>
      <Formik
        initialValues={loginInitialValues}
        onSubmit={login}
        validationSchema={loginSchema}
      >
        {() => (
          <Form>
            <FormControlTextInput isError labelText="Email" name="email" />
            <FormControlTextInput isError labelText="Password" name="password" type="password" />
            <button className="button orange-button" type="submit">LOG IN</button>
          </Form>
        )}
      </Formik>
      <Link className="login-link" to="/registration">
        Registration
      </Link>
    </div>
  );
};

export default LoginForm;
