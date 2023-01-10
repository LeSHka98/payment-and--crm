// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// api
import { MutationFunctionOptions, MutationResult } from '@apollo/client';
// components
import { Button, Spinner } from 'reactstrap';
import FormControlUserTextInput from 'components/shared/FormControls/UserTextInput';
import FormControlUserSelect from 'components/shared/FormControls/UserSelect';
import FormControlUserTextArea from 'components/shared/FormControls/UserTextArea';
// constants
import { initialValues, userSchema } from 'components/shared/UserForm/config';
import {
  AddUser, CreateMutation, CrmUser, EditMutation, UpdateUser,
} from 'constants/graphql';
import { ROLES, STATUSES } from 'constants/userEditCreateForm';

type UserFormProps = {
  mutate: (options?: MutationFunctionOptions) => Promise<unknown>,
  mutation: MutationResult<EditMutation | CreateMutation>
  defaultInfo?: CrmUser,
  mutationResult?: AddUser | UpdateUser,
  toastMessage: { success: string, fail: string },
};

const delay = 5000;
const previousPage = -1;

const UserForm = ({
  mutate, mutation, defaultInfo, mutationResult, toastMessage,
}:UserFormProps) => {
  const navigate = useNavigate();
  const [isToastShown, setIsToastShown] = useState<boolean>(false);

  const handleEffect = useCallback(() => {
    if (mutationResult?.status === 'FAILED') {
      toast.error(toastMessage.fail);
      setIsToastShown(true);

      return setTimeout(() => {
        setIsToastShown(false);
      }, delay);
    }
    if (mutationResult?.status === 'SUCCESS') {
      toast.success(toastMessage.success);
      setIsToastShown(true);

      return setTimeout(() => {
        setIsToastShown(false);
        navigate('/users');
      }, delay);
    }

    return null;
  }, [
    toastMessage,
    navigate,
    mutationResult?.status,
  ]);

  useEffect(() => {
    const timeId = handleEffect();

    return () => clearTimeout(timeId);
  }, [handleEffect]);

  const saveChanges = (values: FormikValues) => {
    mutate({ variables: { user: values } });
  };

  if (mutation.error) {
    return <h1 className="error">Error</h1>;
  }

  return (
    <>
      <ToastContainer
        autoClose={delay}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop={false}
        position="top-center"
        rtl={false}
        theme="colored"
      />
      <div className={isToastShown ? 'user-form-modal' : 'user-form-modal-disabled'} />
      <div className={mutation.loading ? 'user-form-modal' : 'user-form-modal-disabled'}>
        <Spinner className="user-form-loader" color="dark">Submitting...</Spinner>
      </div>
      <Formik
        initialValues={defaultInfo || initialValues}
        onSubmit={saveChanges}
        validateOnChange={false}
        validationSchema={userSchema}
      >
        {(props) => (
          <Form>
            <div className="user-form-title-block">
              <h1>{`${defaultInfo ? 'Изменить' : 'Добавить'} пользователя CRM`}</h1>
              <div className="user-form-buttons">
                <Button type="submit">Сохранить</Button>
                <Button onClick={() => navigate(previousPage)} outline>Отмена</Button>
              </div>
            </div>
            <div className="form-wrapper custom-wrapper">
              <div className="col-5 user-form-controls-block">
                <FormControlUserTextInput isError labelText="Email" name="email" props={props} />
                <FormControlUserTextInput isError labelText="Имя" name="firstName" props={props} />
                <FormControlUserTextInput isError labelText="Отчество" name="secondName" props={props} />
                <FormControlUserTextInput isError labelText="Фамилия" name="lastName" props={props} />
              </div>
              <div className="col-5 user-form-controls-block">
                <FormControlUserTextInput isError labelText="Телефон" name="internalPhone" props={props} />
                <FormControlUserTextInput isError labelText="Мобильный телефон" name="mobilePhone" props={props} />

                <FormControlUserSelect isError labelText="Роль" name="role">
                  { ROLES.map(({ text, value }) => <option key={value} value={value}>{text}</option>)}
                </FormControlUserSelect>

                <FormControlUserSelect isError labelText="Статус" name="status">
                  { STATUSES.map(({ text, value }) => <option key={value} value={value}>{text}</option>)}
                </FormControlUserSelect>
                <FormControlUserTextArea isError labelText="Прочая информация" name="otherInfo" props={props} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
