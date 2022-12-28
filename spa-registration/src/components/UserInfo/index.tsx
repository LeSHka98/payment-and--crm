import React from 'react';
// constants
import { Registration } from 'constants/common';

type UserInfoProps = {
  user: Registration
};

const UserInfo = ({ user }: UserInfoProps) => (
  <div className="user-info-block">
    <div>
      <label className="user-info-label" htmlFor="Email">Email: </label>
      <b id="Email">{user.email}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="Password">Password: </label>
      <b id="Password">{user.password}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="FirstName">First Name: </label>
      <b id="FirstName">{user.firstName}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="LastName">Last Name: </label>
      <b id="LastName">{user.lastName}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="Passport">Passport: </label>
      <b id="Passport">{user.passport}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="Sex">Sex: </label>
      <b id="Sex">{user.sex}</b>
    </div>
    <div>
      <label className="user-info-label" htmlFor="Phone">Birthday: </label>
      <b id="Phone">{`${user.day}-${user.month}-${user.year}`}</b>
    </div>
  </div>
);

export default UserInfo;
