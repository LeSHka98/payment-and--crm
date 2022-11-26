import { FilterFieldsType } from 'constants/index';

export const token = 'eyJhbGciOiJIUzUxMiJ9.eyJleHRyYSI6e30sIm1ldGFkYXRhIjp7InVzZXJJZCI6MSwicGVybWlzc2lvbnMiOnsiQWRtaW4iOltdfX0sImlhdCI6MTY2MzIyNDU3Miwic3ViIjoiYWRtaW4ifQ.kCzQj26b91lTHok30A8embmnGAVC1ft4IKQ9ElyEieJKIkHFvwkIYGmdOSe6UISk2_A9jid9DT1-9PrgyufMQg';

export type Borrower = {
  id: number,
  fullName: string,
  birthdate: string,
  identificationStatus: boolean,
  passportNumber: string,
  phone: string,
};

type Borrowers = {
  borrowers: Borrower[],
  recordsAmount: number
};

type BorrowersWidget = {
  borrowersWidget: Borrowers
};

export type Data = {
  mainPage: BorrowersWidget
};

export const APPROPRIATE_FIELDS: FilterFieldsType = {
  clientID: 'BORROWER_ID',
  birthday: 'BIRTHDATE',
  accountNumber: 'ACCOUNT_NUMBER',
  email: 'EMAIL',
  passport: 'PASSPORT',
  phone: 'PHONE',
  snils: 'INN_OR_SNILS',
  lastName: 'LAST_NAME',
};

export type Entry = {
  type: string,
  value: unknown,
};

export type UsersQuery = {
  entries: Entry[],
  limit?: number,
  offset?: number,
  sort? : {
    direction: 'ASC' | 'DESC',
    orderBy: string,
  },
};

export type FieldForFormat = 'birthday' | 'phone' | 'passport';
