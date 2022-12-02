// libraries
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Modal, ModalHeader, Spinner } from 'reactstrap';
// components
import StatusBlock from 'components/UserInfoPage/StatusBlock';
import MainClientDataBlock from 'components/UserInfoPage/MainClientData';
import ContactClientData from 'components/UserInfoPage/ContactClientData';
import AdditionalClientData from 'components/UserInfoPage/AdditionalClientData';
import BreadCrumbs from 'components/shared/BreadCrumbs';
// constants
import { GET_USER_INFO } from 'api/GraphQL/quaries';
import {
  CrmGatewayQuery, Passport, PersonalData,
} from 'constants/graphql';

const UserInfoPage = () => {
  const { userId } = useParams();
  const borrowerId = Number(userId);
  const { data, loading, error } = useQuery<CrmGatewayQuery>(GET_USER_INFO, { variables: { borrowerId } });

  const [personalData, setPersonalData] = useState<PersonalData>();
  const [passportData, setPassportData] = useState<Passport>();

  const [isPassportOutOfDate, setIsPassportOutOfDate] = useState<boolean>(false);

  useEffect(() => {
    const outOdDatePassport = data && (data.mainPage.passportWidget.passport.valid === false);

    if (data) {
      setPersonalData(data.mainPage.personalDataWidget.personalData);
      setPassportData(data.mainPage.passportWidget.passport);
    }
    if (outOdDatePassport) {
      setIsPassportOutOfDate(true);
    }
  }, [data]);

  if (loading) {
    return <Spinner className="loader" color="dark" />;
  }
  if (error) {
    return <h1 className="error">Error</h1>;
  }
  if (!personalData || !passportData) {
    return <h1>Данные клиента не найдены</h1>;
  }

  return (
    <div className="user-page">
      <Modal isOpen={isPassportOutOfDate} toggle={() => setIsPassportOutOfDate(false)}>
        <ModalHeader toggle={() => setIsPassportOutOfDate(false)}>Срок действия паспорта истек</ModalHeader>
      </Modal>
      <BreadCrumbs breadCrumbs={[{ title: 'Клиенты', link: '/' }, { title: `Клиент #${borrowerId}`, link: `/${borrowerId}` }]} />
      <h1>{`Клиент #${borrowerId}`}</h1>

      <StatusBlock personalData={personalData} />
      <MainClientDataBlock passport={passportData} personalData={personalData} />
      <ContactClientData personalData={personalData} />
      <AdditionalClientData personalData={personalData} />
    </div>
  );
};

export default UserInfoPage;
