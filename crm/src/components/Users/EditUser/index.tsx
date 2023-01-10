// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
// api
import { GET_USER } from 'api/GraphQL/quaries';
import { EDIT_USER } from 'api/GraphQL/mutations';
// components
import UserForm from 'components/shared/UserForm';
import BreadCrumbs from 'components/shared/BreadCrumbs';
// constants
import { CrmGatewayQuery, CrmUser, EditMutation } from 'constants/graphql';
import { TOAST_MESSAGE } from 'constants/userEditCreateForm';

const toastMessage = { success: TOAST_MESSAGE.editSuccess, fail: TOAST_MESSAGE.editFail };

const EditUser = () => {
  const { userId } = useParams();
  const getUser = useQuery<CrmGatewayQuery>(GET_USER, { variables: { userId } });
  const [editUser, edit] = useMutation<EditMutation>(EDIT_USER);
  const [defaultInfo, setDefaultInfo] = useState<CrmUser>();

  useEffect(() => {
    if (getUser.data) {
      const removeKey = '__typename';
      const { [removeKey]: removedValue, ...others } = getUser.data.crmUserDataWidget;

      setDefaultInfo(others);
    }
  }, [getUser.data]);

  if (getUser.loading) {
    return <Spinner className="loader" color="dark" />;
  }
  if (getUser.error) {
    return <h1 className="error">Error</h1>;
  }

  const renderUserForm = () => {
    if (defaultInfo) {
      return (
        <UserForm
          defaultInfo={defaultInfo}
          mutate={editUser}
          mutation={edit}
          mutationResult={edit?.data?.updateUser}
          toastMessage={toastMessage}
        />
      );
    }

    return <h1>Данные пользователя не найдены</h1>;
  };

  return (
    <div className="user-create-edit">
      <BreadCrumbs breadCrumbs={[{ title: 'Пользователи', link: '/users' }, { title: 'Изменить пользовател CRM', link: '/' }]} />
      { renderUserForm() }
    </div>
  );
};

export default EditUser;
