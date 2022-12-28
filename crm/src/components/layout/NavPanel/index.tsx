// libraries
import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// assets
import { ReactComponent as MoneyManLogo } from 'assets/images/moneyman-logo.svg';
import { ReactComponent as LeadsIcon } from 'assets/images/leads.svg';
import { ReactComponent as BorrowersIcon } from 'assets/images/borrowers.svg';
import { ReactComponent as PartnersIcon } from 'assets/images/partners.svg';
import { ReactComponent as PaymentsIcon } from 'assets/images/payments.svg';
import { ReactComponent as NotesIcon } from 'assets/images/sms.svg';
import { ReactComponent as VerificationIcon } from 'assets/images/verification.svg';

const NavPanel = () => (
  <Nav vertical>
    <NavItem>
      <MoneyManLogo />
    </NavItem>
    <NavItem>
      <NavLink className="custom-nav-item" to="users">
        <LeadsIcon className="nav-item-icon" />
        <div>Leads</div>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="custom-nav-item" to="/">
        <BorrowersIcon className="nav-item-icon" />
        <div>Borrowers</div>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="custom-nav-item" to="verification">
        <VerificationIcon className="nav-item-icon" />
        <div>Verification</div>
      </NavLink>
    </NavItem>
    <NavItem className="custom-nav-item">
      <NotesIcon className="nav-item-icon" />
      <div>SMS</div>
    </NavItem>
    <NavItem className="custom-nav-item">
      <PartnersIcon className="nav-item-icon" />
      <div>Partners</div>
    </NavItem>
    <NavItem className="custom-nav-item">
      <PaymentsIcon className="nav-item-icon" />
      <div>Payments</div>
    </NavItem>
  </Nav>
);

export default NavPanel;
