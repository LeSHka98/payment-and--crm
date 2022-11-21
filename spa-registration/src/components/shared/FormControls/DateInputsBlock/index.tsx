// libraries
import React, { useMemo } from 'react';
import { ErrorMessage, Field, useFormikContext } from 'formik';
// constants
import { Registration } from 'constants/index';
// helpers
import { getDaysList, getYearsList, getMonthsList } from 'helpers/Dates';

type BirthdayInputsBlockProps = {
  labelText?: string,
  isError?: boolean,
  from: number,
  to: number,
};

const FormControlDateInputsBlock: React.FC<BirthdayInputsBlockProps> = ({
  labelText, isError, from, to,
}) => {
  const { values } = useFormikContext<Registration>();
  const { month, year } = values;

  const dayList = useMemo(() => getDaysList(year, month), [month, year]);
  const yearList = useMemo(() => getYearsList(from, to), [from, to]);
  const monthList = useMemo(() => getMonthsList(), []);

  return (
    <>
      {labelText && <label className="form-label">{ labelText }</label>}
      <div className="birthday-block">
        <div className="birthday-block-day">
          <Field as="select" className="form-birthday-input" name="day">
            { dayList.map((day:number) => <option key={day} value={day}>{day}</option>)}
          </Field>
        </div>
        <div className="birthday-block-month">
          <Field as="select" className="form-birthday-input" name="month">
            { monthList.map((currentMonth:string, i: number) => <option key={currentMonth} value={i}>{currentMonth}</option>)}
          </Field>
        </div>
        <div className="birthday-block-year">
          <Field as="select" className="form-birthday-input" name="year" placeholder="Year">
            { yearList.map((y:number) => <option key={y} value={y}>{y}</option>)}
          </Field>
        </div>
      </div>
      { isError && (
        <p className="form-error">
          <ErrorMessage name="isValidDate" />
        </p>
      )}
    </>
  );
};

export default FormControlDateInputsBlock;
