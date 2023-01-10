// libraries
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
// api
import { useQuery } from '@apollo/client';
import { GET_USER } from 'api/GraphQL/quaries';
// constants
import { CrmGatewayQuery, CrmUser } from 'constants/graphql';
// components
import BreadCrumbs from 'components/shared/BreadCrumbs';
import TableItem from 'components/Users/UserPage/TableItem';
// static
import { ReactComponent as PencilIcon } from 'assets/images/pencil.svg';

const UserPage = () => {
  const { userId } = useParams();
  const { data, loading, error } = useQuery<CrmGatewayQuery>(GET_USER, { variables: { userId } });
  const [user, setUser] = useState<CrmUser>();

  useEffect(() => {
    if (data) {
      setUser(data.crmUserDataWidget);
    }
  }, [data]);

  if (loading) {
    return <Spinner className="loader" color="dark" />;
  }
  if (error) {
    return <h1 className="error">Error</h1>;
  }
  if (!user) {
    return <h2>Информация о пользователе не найдена</h2>;
  }

  return (
    <div className="user-page">
      <BreadCrumbs breadCrumbs={
            [{ title: 'Пользователи', link: '/users' }, { title: `Пользователь #${userId}`, link: `/${userId}` }]
          }
      />
      <div className="user-page-title-block">
        <h1>{`Пользователь #${userId}`}</h1>
        <Link to="edit">
          <PencilIcon />
        </Link>
      </div>
      <div className="user-info-block custom-wrapper">
        <table className="user-table col-4">
          <tbody>
            <TableItem text="ID" value={user.administratorId} />
            <TableItem text="Аккаунт ID" value={user.userAccountId} />
            <TableItem text="Email" value={user.email} />
            <TableItem text="Имя" value={user.firstName} />
            <TableItem text="Отчество" value={user.secondName} />
            <TableItem text="Фамилия" value={user.lastName} />
          </tbody>
        </table>
        <table className="user-table col-4">
          <tbody>
            <TableItem text="Роль" value={user.role} />
            <TableItem text="Телефон" value={user.internalPhone} />
            <TableItem text="Мобильный телефон" value={user.mobilePhone} />
            <TableItem text="Статус" value={user.status} />
            <TableItem text="Прочее" value={user.otherInfo} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
