// libraries
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as Burger } from 'assets/images/burger.svg';
// components
import Button from 'components/shared/Buttons';
import HeaderMobileMenu from 'components/layout/Header/HeaderMobileMenu';
// hooks
import { useAuth } from 'hooks/useAuthProvider';

type HeaderProps = {
  links?: Array<{ value: string, to: string, isEnd?: boolean }>
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { isAuth } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container block">
        <Logo />
        { isAuth
          && (
            <>
              <Burger className="burger-btn" onClick={() => setIsOpen(!isOpen)} />
              <div className="header-links">
                {
                  links.map((link) => (
                    <NavLink key={link.value} className="header-link" end={link.isEnd} to={link.to}>
                      {link.value}
                    </NavLink>
                  ))
                }
              </div>
              <HeaderMobileMenu
                isOpen={isOpen}
                links={links}
                setIsOpen={setIsOpen}
              />
            </>
          )}
        <Button className="button header-button">Already a customer?</Button>
      </div>
    </header>
  );
};

export default Header;
