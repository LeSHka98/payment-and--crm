// libraries
import React from 'react';
// assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
// components
import Button from 'components/shared/Buttons';

const Header = () => (
  <header className="header">
    <div className="container block">
      <Logo />
      <Button className="button header-button">Already a customer?</Button>
    </div>
  </header>
);

export default Header;
