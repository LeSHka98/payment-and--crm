// libraries
import React from 'react';
// constants
import { PersonalData } from 'constants/graphql';
// helpers

type PersonalDataProps = {
  personalData: PersonalData
};

type ClientStatusType = {
  true: { text: string, class: string },
  false: { text: string, class: string },
};

type IdStatusType = {
  FULL_IDENTIFICATION: { text: string, class: string },
  UPRID: { text: string, class: string },
  NO_IDENTIFICATION: { text: string, class: string },
};

const clientStatus: ClientStatusType = {
  true: { text: 'Заблокирован', class: 'blocked' },
  false: { text: 'Активен', class: 'active' },
};

const idStatus: IdStatusType = {
  FULL_IDENTIFICATION: { text: 'Полная', class: 'full' },
  UPRID: { text: 'Упрощенная', class: 'uprid' },
  NO_IDENTIFICATION: { text: 'Не идентифицирован', class: 'no-id' },
};

const StatusBlock: React.FC<PersonalDataProps> = ({ personalData }) => (
  <>
    <h6>Информация о клиенте</h6>
    <div className="wrapper-block custom-wrapper">
      <div className="info-block">
        <div className="fragment">
          <span className="fragment-first-elem">Признак идентификации</span>
          <span className={idStatus[personalData.identificationStatus as unknown as keyof IdStatusType]?.class}>
            {idStatus[personalData.identificationStatus as unknown as keyof IdStatusType]?.text || '-'}
          </span>
        </div>
        <div className="fragment">
          <span className="fragment-first-elem">Статус клиента</span>
          <span className={clientStatus[personalData.blocked as unknown as keyof ClientStatusType]?.class}>
            {clientStatus[personalData.blocked as unknown as keyof ClientStatusType]?.text || '-'}
          </span>
        </div>
      </div>
    </div>
  </>
);

export default StatusBlock;
