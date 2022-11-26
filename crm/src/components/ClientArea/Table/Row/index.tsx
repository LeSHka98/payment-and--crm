// libraries
import React from 'react';
// constants
import { Borrower } from 'constants/graphql';

type TableRowProps = {
  borrower: Borrower
};

const TableRow: React.FC<TableRowProps> = ({ borrower }) => (
  <tr>
    <td>{borrower.id}</td>
    <td>{borrower.fullName}</td>
    <td>{borrower.birthdate}</td>
    <td>{borrower.passportNumber}</td>
    <td>{borrower.phone}</td>
    <td>{borrower.identificationStatus}</td>
  </tr>
);

export default TableRow;
