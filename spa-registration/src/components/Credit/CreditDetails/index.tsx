// libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// helpers
import { getFromLocalStorage } from 'helpers/LocalStorage';
import { CreditDetailsType } from 'components/Credit/Calculator/config';
// hooks
import { useAuth } from 'hooks/useAuthProvider';
// static
import { ReactComponent as StatusActive } from 'assets/images/status_active.svg';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

const CreditDetails = () => {
  const { userEmail } = useAuth();
  const [creditData, setCreditData] = useState<CreditDetailsType>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const shiftIndex = 1;

  useEffect(() => {
    const creditDetails: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

    if (creditDetails) {
      setCreditData(creditDetails[creditDetails.length - shiftIndex]);
    }
  }, [userEmail]);

  return (
    <div>
      <h2 className="credit-details-header">Credit line</h2>
      <div className="credit-details-block">
        <div className="credit-details-top">
          <div>
            <p className="credit-details-plan">You plan:</p>
            <p className="credit-details-amount">{ creditData && `${creditData.amount} €` }</p>
          </div>
          <div className="credit-details-status">
            <StatusActive />
            { creditData && creditData.status }
          </div>
        </div>
        <div className="credit-details-accordion">
          <table>
            <tbody>
              <tr className="credit-details-table-row">
                <td>Amount</td>
                <td>{ creditData && `${creditData.amount} €` }</td>
              </tr>
              <tr className="credit-details-table-row">
                <td>Term</td>
                <td>{ creditData && `${creditData.term} m` }</td>
              </tr>
            </tbody>
          </table>
          {isOpen && (
          <table>
            <tbody>
              <tr className="credit-details-table-row">
                <td>Payment calendar</td>
                <td>Show</td>
              </tr>
              <tr className="credit-details-table-row">
                <td>loan status</td>
                <td>Outstanding</td>
              </tr>
            </tbody>
          </table>
          )}
          <button className="credit-details-accordion-button" onClick={() => setIsOpen(!isOpen)}>
            { isOpen ? 'See less' : 'See more'}
            <ArrowDown className={isOpen ? 'credit-details-arrow revert' : 'credit-details-arrow'} />
          </button>
        </div>
        <div />
      </div>
      <Link className="credit-details-to-payment" to="payment">
        <span>To payment</span>
        <span>&#8250;</span>
      </Link>
    </div>
  );
};

export default CreditDetails;
