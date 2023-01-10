// libraries
import React from 'react';
import { Link } from 'react-router-dom';
// constants
import { Borrower } from 'constants/graphql';

type TableRowProps = {
  borrower: Borrower
};

const TableRow: React.FC<TableRowProps> = ({ borrower }) => (
  <tr>
    <td>
      <Link className="table-row-link" to={`${borrower.id}`}>{borrower.id}</Link>
    </td>
    <td>
      <Link className="table-row-link" to={`${borrower.id}`}>{borrower.fullName}</Link>
    </td>
    <td>{borrower.birthdate}</td>
    <td>{borrower.passportNumber}</td>
    <td>{borrower.phone}</td>
    <td>{borrower.identificationStatus}</td>
  </tr>
);

export default TableRow;
