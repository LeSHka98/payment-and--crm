// libraries
import React from 'react';
import { useMutation } from '@apollo/client';
// api
import { CREATE_USER } from 'api/GraphQL/mutations';
// components
import UserForm from 'components/shared/UserForm';
import BreadCrumbs from 'components/shared/BreadCrumbs';
// constants
import { CreateMutation } from 'constants/graphql';
import { TOAST_MESSAGE } from 'constants/userEditCreateForm';

const CreateUser = () => {
  const [createUser, create] = useMutation<CreateMutation>(CREATE_USER);
  const toastMessage = { success: TOAST_MESSAGE.createSuccess, fail: TOAST_MESSAGE.createFail };

  return (
    <div className="user-create-edit">
      <BreadCrumbs breadCrumbs={[{ title: 'Пользователи', link: '/users' }, { title: 'Добавить пользовател CRM', link: '/' }]} />
      <UserForm mutate={createUser} mutation={create} mutationResult={create?.data?.addUser} toastMessage={toastMessage} />
    </div>
  );
};

export default CreateUser;
