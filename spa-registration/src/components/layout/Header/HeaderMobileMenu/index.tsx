// libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
// static
import { ReactComponent as Close } from 'assets/images/close.svg';

type HeaderMobileMenuProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: Array<{ value: string, to: string, isEnd?: boolean }>
};

const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({ isOpen, setIsOpen, links }) => (
  <div className={`header-mobile-menu ${isOpen ? 'active' : ''}`}>
    <Close onClick={() => setIsOpen(!isOpen)} />
    <div className="header-mobile-links">
      {
          links.map((link) => (
            <NavLink
              key={link.value}
              className="header-mobile-link"
              end={link.isEnd}
              onClick={() => setIsOpen(!isOpen)}
              to={link.to}
            >
              {link.value}
            </NavLink>
          ))
        }
    </div>
  </div>
);

export default HeaderMobileMenu;
