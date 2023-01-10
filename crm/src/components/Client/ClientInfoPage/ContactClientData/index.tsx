// libraries
import React from 'react';
// components
import RealTimeClock from 'components/shared/RealTimeClock';
// constants
import { PersonalData } from 'constants/graphql';

type PersonalDataProps = {
  personalData: PersonalData
};

const ContactClientData: React.FC<PersonalDataProps> = ({ personalData }) => {
  const addressMatch = () => {
    if (!personalData.realAddress && !personalData.registrationAddress) {
      return (
        <tr>
          <td className="first-column cell">Адрес проживания</td>
          <td className="cell">-</td>
        </tr>
      );
    }
    if (personalData.realAddress !== personalData.registrationAddress) {
      return (
        <>
          <tr>
            <td className="first-column cell">Адрес проживания</td>
            <td className="cell">{personalData.realAddress || '-'}</td>
          </tr>
          <tr>
            <td className="first-column cell">Адрес регистрации и проживания совпадают</td>
            <td className="cell">Нет</td>
          </tr>
        </>
      );
    }

    return (
      <tr>
        <td className="first-column cell">Адрес регистрации и проживания совпадают</td>
        <td className="cell">Да</td>
      </tr>
    );
  };

  return (
    <>
      <h6>Контактные данные клиента</h6>
      <div className="wrapper-block custom-wrapper">
        <div className="info-block">
          <table className="user-table col-4">
            <tbody>
              <tr>
                <td className="first-column cell">Мобильный номер</td>
                <td className="cell">{personalData.phoneNumber || '-'}</td>
              </tr>
              <tr>
                <td className="first-column cell">Email</td>
                <td className="cell">{personalData.email || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="user-table col-4">
            <tbody>
              <tr>
                <td className="first-column cell">Адрес регистрации</td>
                <td className="cell">{personalData.registrationAddress || '-'}</td>
              </tr>
              {addressMatch()}
              <tr>
                <td className="first-column cell">Часовой пояс</td>
                <td className="cell">
                  {`MSK ${personalData.timezoneUtcOffset}; ` || '-'}
                  <RealTimeClock format="HH:mm" start={personalData.dateWithOffset} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactClientData;
