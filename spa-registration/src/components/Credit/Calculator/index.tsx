// libraries
import React, { useState } from 'react';
import Range from 'rc-slider';
// helpers
import { getOtherFieldFromServerData, roundEnteredData } from 'helpers/Calculator';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/LocalStorage';
// hooks
import { useAuth } from 'hooks/useAuthProvider';
// styles
import 'rc-slider/assets/index.css';

type CalculatorProps = {
  setStatus: React.Dispatch<React.SetStateAction<'Active' | 'Paid'>>
};

const Calculator: React.FC<CalculatorProps> = ({ setStatus }) => {
  const { userEmail } = useAuth();
  const [fields, setFields] = useState<{ amount: number, term: number }>({ amount: 100, term: 10 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(Number(e.target.value))) {
      setFields({ ...fields, [e.target.name]: Number(e.target.value) });
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roundedValue = roundEnteredData(e);

    const fieldsParameters = (e.target.name === 'amount')
      ? { amount: roundedValue, term: getOtherFieldFromServerData('amount', roundedValue) }
      : { amount: getOtherFieldFromServerData('term', roundedValue), term: roundedValue };

    setFields(fieldsParameters);
  };

  const handleSwiper = (value: number | number []) => {
    if (typeof (value) === 'number') {
      setFields({ term: getOtherFieldFromServerData('amount', value), amount: value });
    }
  };

  const saveCreditData = () => {
    const credits = getFromLocalStorage(userEmail);

    setStatus('Active');

    if (credits) {
      credits.push({ ...fields, status: 'Active', id: credits.length });
      saveToLocalStorage(userEmail, credits);

      return;
    }
    saveToLocalStorage(userEmail, [{ ...fields, status: 'Active', id: 0 }]);
  };

  return (
    <div>
      <h2 className="calculator-header">Apply for a loan!</h2>
      <div className="calculator-block">
        <p className="calculator-caption">Your line of credit is active</p>
        <div className="calculator-inner-block">
          <div className="amount">
            <span className="input-name">How much do you need ?</span>
            <div className="calculator-input-block">
              <input
                className="calculator-input"
                name="amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={fields.amount}
              />
              <span>€</span>
            </div>
          </div>
          <div className="sum-slider">
            <Range
              className="slider"
              marks={{
                100: 100, 200: 200, 300: 300, 400: 400, 500: 500,
              }}
              max={500}
              min={100}
              onChange={handleSwiper}
              step={100}
              value={fields.amount}
            />
          </div>
          <div className="term">
            <span className="input-name">Total length</span>
            <div className="calculator-input-block">
              <input
                className="calculator-input"
                name="term"
                onBlur={handleBlur}
                onChange={handleChange}
                value={fields.term}
              />
              <span>m</span>
            </div>
          </div>
        </div>
      </div>
      <button className="button orange-button" onClick={saveCreditData}>REQUEST YOUR LOAN!</button>
    </div>
  );
};

export default Calculator;
