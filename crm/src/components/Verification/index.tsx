// libraries
import React from 'react';
// components
import VerificationTable from 'components/Verification/Table';
import ClientPhoto from 'components/Verification/ClientPhoto';

const Verification = () => (
  <div className="verification-page">
    <h1>Verification</h1>
    <VerificationTable />
    <ClientPhoto />
  </div>
);

export default Verification;
