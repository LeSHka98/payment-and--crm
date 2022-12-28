import moment from 'moment';

const shiftIndex = 1;

export const getDaysList = (year: number, month: number) => {
  const daysInMonth = moment({ year, month }).daysInMonth();

  return Array.from({ length: daysInMonth }, (_, index) => index + shiftIndex);
};

export const getYearsList = (from: number, to: number) => {
  const minAllowed = Number(moment().subtract(from, 'years').year()); // Current - 90
  const maxAllowed = Number(moment().subtract(to, 'years').year()); // Current - 18

  return Array.from({ length: maxAllowed - minAllowed + shiftIndex }, (_, index) => index + minAllowed);
};

export const getMonthsList = () => moment.months();
