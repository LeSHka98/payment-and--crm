// libraries
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
// api
import { GET_USERS } from 'api/GraphQL/quaries';
import { useQuery } from '@apollo/client';
// components
import TableRow from 'components/Users/Table/TableRow';
// constants
import { User } from 'constants/graphql';
import { USERS_TABLE_HEAD } from 'constants/usersTable';

const UsersTable = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  const [users, setUsers] = useState<Array<User>>();
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    if (data) {
      setUsers(data.userPage.usersWidget.users);
      setTotal(data.userPage.usersWidget.total);
    }
  }, [data]);

  if (loading) {
    return <Spinner className="loader" color="dark" />;
  }
  if (error) {
    return <h1 className="error">Error</h1>;
  }

  return (
    <div className="users-page">
      <div className="user-page-total-block">
        <h1>Пользователи CRM</h1>
        <Link className="add-user-btn" to="create">+ Добавить пользователя</Link>
      </div>
      {total && <p>{`Всего:  ${total}`}</p>}
      {users && (
        <div className="custom-wrapper">
          <Table bordered>
            <thead>
              <tr className="table-light">
                {USERS_TABLE_HEAD.map((elem) => <th key={elem}>{elem}</th>)}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => <TableRow key={user.id} user={user} />)}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
