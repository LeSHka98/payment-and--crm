import React, { useEffect, useState } from 'react';
// components
import Calculator from 'components/Credit/Calculator';
import CreditDetails from 'components/Credit/CreditDetails';
import { getFromLocalStorage } from 'helpers/localStorage';
import { CreditDetailsType } from 'components/Credit/Calculator/config';
// hooks
import { useAuth } from 'hooks/useAuthProvider';

const Credit = () => {
  const { userEmail } = useAuth();
  const [status, setStatus] = useState<CreditDetailsType['status']>();
  const shiftIndex = 1;

  useEffect(() => {
    const creditDetails: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

    if (creditDetails) {
      setStatus(creditDetails[creditDetails.length - shiftIndex].status);
    }
  }, [userEmail]);

  const render = () => (status === 'Active'
    ? <CreditDetails />
    : <Calculator setStatus={setStatus} />);

  return render();
};

export default Credit;
