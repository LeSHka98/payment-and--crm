// libraries
import React, { useState } from 'react';
// assets
import { ReactComponent as ArrowUpIcon } from 'assets/images/sort-up.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/images/sort-down.svg';
// components
import { Collapse } from 'reactstrap';
import TableRow from 'components/UserInfoPage/AdditionalClientData/TableRow';
// constants
import { PersonalData } from 'constants/graphql';

type PersonalDataProps = {
  personalData: PersonalData
};

const AdditionalClientData: React.FC<PersonalDataProps> = ({ personalData }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  return (
    <>
      <div className="collapse-open-btn" onClick={() => setIsCollapseOpen(!isCollapseOpen)}>
        <h6>Дополнительная информация (ПОДФТ)</h6>
        {isCollapseOpen ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />}
      </div>
      <Collapse isOpen={isCollapseOpen}>
        <div className="wrapper-block custom-wrapper">
          <table className="user-table col-4">
            <tbody>
              <TableRow title="ПДЛ" value={personalData.publicOfficial} />
              <TableRow title="ИПДЛ" value={personalData.foreignPublicOfficial} />
              <TableRow title="Связан с ПДЛ" value={personalData.associatedWithPublicOfficial} />
              <TableRow title="Сам себе бенефициарный владелец" value={personalData.beneficialOwner} />
              <TableRow title="Другой выгодоприобретатель" value={personalData.otherBeneficiaries} />
              <TableRow title="Иностранный налоговый резидент" value={personalData.foreignTaxResident} />
              <TableRow title="Налоговый резидент США" value={personalData.usTaxResident} />
            </tbody>
          </table>
        </div>
      </Collapse>
    </>
  );
};

export default AdditionalClientData;
