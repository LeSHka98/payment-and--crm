import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// constants
import { CreditDetailsType } from 'components/Credit/Calculator/config';
import { ROUTER_PATHS } from 'constants/router';
// helpers
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/localStorage';
// hooks
import { useAuth } from 'hooks/useAuthProvider';
// static
import { ReactComponent as BizumIcon } from 'assets/images/bizum.svg';
import { ReactComponent as StripeIcon } from 'assets/images/stripe.svg';

const Payment = () => {
  const { userEmail } = useAuth();
  const navigate = useNavigate();
  const [creditDetails, setCreditDetails] = useState<CreditDetailsType>();
  const [credits, setCredits] = useState<Array<CreditDetailsType>>();
  const shiftIndex = 1;
  const oneHundredAndTenPercents = 1.1;
  const tenPercents = 0.1;
  const totalPrice = creditDetails && Math.round(oneHundredAndTenPercents * creditDetails.amount);

  useEffect(() => {
    const creditData: Array<CreditDetailsType> = getFromLocalStorage(userEmail);

    if (creditData) {
      setCredits(creditData);
      setCreditDetails(creditData[creditData.length - shiftIndex]);
    }
  }, [userEmail]);

  const payForCredit = (type?: string) => {
    if (type === 'stripe') {
      navigate(ROUTER_PATHS.stripe, { replace: true });

      return;
    }

    const newCredits = credits.map((credit, index) => {
      if (index === credits.length - shiftIndex) {
        return { ...credit, status: 'Paid' };
      }

      return credit;
    });

    saveToLocalStorage(userEmail, newCredits);
    navigate(ROUTER_PATHS.creditList, { replace: true });
  };

  return (
    <div>
      <h2>Renew line of credit</h2>
      <div>
        <div className="payment-total">
          <span className="payment-total-text">Total amount to pay:</span>
          <span className="payment-total-number">
            { creditDetails ? `${totalPrice}  €` : '-'}
          </span>
        </div>
        <div className="payment-details">
          <div className="payment-details-clear-sum">
            <span>Monthly fee</span>
            <span>{ creditDetails ? `${creditDetails.amount}  €` : '-'}</span>
          </div>
          <div className="payment-details-clear-quota">
            <span>Monthly payment</span>
            <span>{ creditDetails ? `${tenPercents * creditDetails.amount}  €` : '-'}</span>
          </div>
        </div>
      </div>
      <div>
        <p>Choose one of the four payment methods to return your monthly fee:</p>
        <div className="payment-card">
          <div className="payment-card-top">
            <span className="payment-card-name">Pay with Stripe</span>
            <StripeIcon />
          </div>
          <button className="button orange-button" onClick={() => payForCredit('stripe')}>PAY WITH Stripe</button>
        </div>
        <div className="payment-card">
          <div className="payment-card-top">
            <span className="payment-card-name">Pay with Bizum</span>
            <BizumIcon />
          </div>
          <button className="button orange-button" onClick={() => payForCredit()}>PAY WITH bizum €224</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
