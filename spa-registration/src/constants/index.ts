export const PASSPORT_REGEXP = /^[A-Z]{2}[0-9]{7}$/;

export const PHONE_REGEXP = /^(\+375|80)\((29|25|44|33)\)(\d{3})-(\d{2})-(\d{2})$/gm;

export const ONLY_LATIN_REGEXP = /^[a-zA-Z]+$/;

export const breadCrumbs = [
  'PERSONAL INFORMATION',
  'TELL US ABOUT YOU',
  'RECEIVE LOAN',
  'DEBIT',
  'CONFIRMATION',
];

export type Registration = {
  passport: string,
  firstName: string,
  lastName: string,
  sex: 'male' | 'female',
  conditionRules: boolean,
  conditionSMS: boolean,
  phone: string,
  day: number,
  month: number,
  year: number,
  isValidDate: boolean,
};

export const MAX_AGE = 90;

export const MIN_AGE = 18;
