import React from 'react';
// components
import LoginForm from 'components/Login/LoginForm';
import Footer from 'components/layout/Footer';
import ImagesBlock from 'components/shared/ImagesBlock';

const LoginPage = () => (
  <>
    <div className="login-page">
      <LoginForm />
    </div>
    <div className="green-background">
      <ImagesBlock />
    </div>
    <Footer />
  </>
);

export default LoginPage;
