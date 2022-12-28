import { FilterFieldsType } from 'constants/common';

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

export type Passport = {
  birthPlace: string,
  borrowerId: number,
  issueDate: string,
  issuer: string,
  issuerName: string,
  number: string,
  valid: boolean,
};

export type PersonalData = {
  associatedWithPublicOfficial: boolean,
  attestedIncome: number,
  beneficialOwner: boolean,
  birthdate: string,
  blocked: boolean,
  borrowerId: number,
  company: string,
  creationDate: Date,
  dateWithOffset: Date,
  dependents: string,
  education: string,
  email: string,
  employment: string,
  firstName: string,
  foreignPublicOfficial: boolean,
  foreignTaxResident: boolean,
  identificationStatus: string,
  industry: string,
  inn: string,
  lastName: string,
  lastWorkplaceExperience: string,
  middleName: string,
  otherBeneficiaries: boolean,
  phoneNumber: string,
  publicOfficial: boolean,
  realAddress: string,
  referenceName: string,
  referencePhone: string,
  referenceType: string,
  registrationAddress: string,
  sex: string,
  snils: string,
  timezoneUtcOffset: number,
  usTaxResident: boolean,
  workPhone: string,
  workPhoneExtension: string,
};

export type User = {
  email: string,
  id: number,
  lastLoginDate: Date,
  name: string,
  role: string,
  status: string,
  userId: number,
};

export type CrmUser = {
  administratorId?: number | string,
  userAccountId?: number | string,
  email: string,
  firstName: string,
  internalPhone: string,
  lastName: string,
  location: CrmUserLocation,
  mobilePhone: string,
  otherInfo: string,
  role: CrmUserRole,
  secondName: string,
  status: CrmUserStatus,
  __typename?: string,
};

type CrmUserRole = 'ADMIN' | 'CALL_CENTER' | 'CALL_CENTER_T2';
type CrmUserStatus = 'ACTIVE' | 'INACTIVE';
type CrmUserLocation = 'RU';

type PersonalDataWidget = {
  personalData: PersonalData,
};

type PassportWidget = {
  passport: Passport,
};

type UsersWidget = {
  status: string,
  total: number,
  users: User[],
};

export type MainPage = {
  borrowersWidget: Borrowers,
  passportWidget: PassportWidget,
  personalDataWidget: PersonalDataWidget,
};

export type UserPage = {
  usersWidget: UsersWidget,
};

export type CrmGatewayQuery = {
  mainPage: MainPage,
  userPage: UserPage,
  crmUserDataWidget: CrmUser,
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

export type EditMutation = {
  updateUser: UpdateUser;
};

export type UpdateUser = {
  errors: string[],
  status: string,
};

export type CreateMutation = {
  addUser: AddUser;
};

export type AddUser = {
  errors: string[],
  status: string,
};
