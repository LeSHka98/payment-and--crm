// libraries
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// constants
import { User } from 'constants/graphql';
// helpers
import { formatStatus } from 'helpers/Crm/User/table';

type TableRowType = {
  user: User
};

const TableRow: React.FC<TableRowType> = ({ user }) => (
  <tr>
    <td>
      <Link className="users-link" to={`${user.id}`}>{user.id}</Link>
    </td>
    <td>
      <Link className="users-link" to={`${user.id}`}>{user.name}</Link>
    </td>
    <td>{user.email}</td>
    <td>{formatStatus(user.status)}</td>
    <td>{moment(user.lastLoginDate).format('DD:MM:YYYY')}</td>
  </tr>
);

export default TableRow;
