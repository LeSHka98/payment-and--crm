// libraries
import React from 'react';
// components
import TableRow from 'components/UserInfoPage/MainClientData/TableRow';
// constants
import { Passport, PersonalData } from 'constants/graphql';

type PersonalDataProps =
 {
   personalData: PersonalData,
   passport: Passport
 };

const MainClientDataBlock: React.FC<PersonalDataProps> = ({ personalData, passport }) => {
  const UserFullName = (personalData.firstName && personalData.lastName)
    ? `${personalData.lastName || ''} ${personalData.firstName || ''} ${personalData.middleName || ''}`
    : '-';

  return (
    <div className="wrapper-block custom-wrapper">
      <div className="info-block">
        <table className="user-table col-4">
          <tbody>
            <TableRow title="ID" value={personalData.borrowerId} />
            <TableRow title="Клиент" value={UserFullName} />
            <TableRow title="Дата рождения" type="date" value={personalData.birthdate} />
            <TableRow title="Пол" type="sex" value={personalData.sex} />
            <TableRow title="ИНН" value={personalData.inn} />
            <TableRow title="СНИЛС" value={personalData.snils} />
          </tbody>
        </table>
        <table className="user-table col-4">
          <tbody>
            <TableRow title="Паспорт" type="passport" value={passport.number} />
            <TableRow title="Кем выдан" value={passport.issuerName} />
            <TableRow title="Код подразделения" value={passport.issuer} />
            <TableRow title="Дата выдачи" type="date" value={passport.issueDate} />
            <TableRow title="Действителен" type="passportIsValid" value={passport.valid} />
            <TableRow title="Место рождения" value={passport.birthPlace} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainClientDataBlock;
