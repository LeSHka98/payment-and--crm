import React, { useEffect, useState } from 'react';
// constants
import { CreditDetailsType } from 'components/Credit/Calculator/config';
// helpers
import { getFromLocalStorage } from 'helpers/localStorage';
// hooks
import { useAuth } from 'hooks/useAuthProvider';
//  static
import { ReactComponent as StatusActive } from 'assets/images/status_active.svg';
import { ReactComponent as StatusPaid } from 'assets/images/status_paid.svg';

const CreditList = () => {
  const { userEmail } = useAuth();
  const [credits, setCredits] = useState<Array<CreditDetailsType>>();

  useEffect(() => {
    const creditData: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

    if (creditData) {
      setCredits(creditData);
    }
  }, [userEmail]);

  return (
    <div>
      {
      credits
        ? credits.map((credit) => (
          <div key={credit.id} className="credit-list-item">
            <div>
              <div className="credit-list-amount">
                { credit && (
                <div>
                  <span>Amount</span>
                  <span>{` ${credit.amount} €`}</span>
                </div>
                ) }
              </div>
              <div className="credit-list-term">
                { credit && (
                <div>
                  <span>Term</span>
                  <span>{` ${credit.term} m`}</span>
                </div>
                ) }
              </div>
            </div>
            <div className="credit-list-status">
              { credit.status === 'Active' ? <StatusActive /> : <StatusPaid />}
              { credit && credit.status }
            </div>
          </div>
        ))
        : <h2>No Credits</h2>
    }
    </div>
  );
};

export default CreditList;
