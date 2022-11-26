import { Entry, UsersQuery } from 'constants/graphql';

export const PASSPORT_REGEXP = /^[0-9]{2}\s[0-9]{2}\s[0-9]{6}$/gm;
// /^[A-Z]{2}[0-9]{7}$/;

export const PHONE_REGEXP = /^(\+7)\((\d{3})\)(\d{3})-(\d{2})-(\d{2})$/gm;

// /^(\+375|80)\((29|25|44|33)\)(\d{3})-(\d{2})-(\d{2})$/gm;
export const ONLY_LATIN_REGEXP = /^[a-zA-Z]+$/;

export const LATIN_SPACE_HYPHEN_REGEXP = /^[А-ЯA-Z\-\s]+$/umi;
// /^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ\h-]+$/umi'

export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/gm;

export const FORBIDDEN_EMAILS = [
  'fakedemail',
  'guerrillamail',
  'yopmail',
  'asdasd',
  'mailinator',
  'trash',
  'minutemail',
  'temp',
  'mailspeed',
  'mailexpire',
  'mintemail',
  'jetable',
  'otherinbox',
  'antireg',
  'odnorazovoe',
  'bugmenot',
];

export const PAGE_SIZES = [
  '20',
  '50',
  '100',
];

export type FilterFieldsType = {
  clientID: string,
  email: string,
  lastName: string,
  snils: string,
  birthday: string,
  phone: string,
  passport: string,
  accountNumber: string,
};

export type FilterFullFields = {
  pageQueryParams?: PageQueryParams,
  variablesArray?: Entry[],
  sortParams?: SortFieldsType,
};

export type SortFieldsType = {
  direction: 'ASC' | 'DESC',
  orderBy: string,
};

export type PageQueryParams = {
  limit: number,
  offset: number
};

export type PageParams = {
  page: number,
  size: number,
};

export const DEFAULT_PAGE_NUMBER = 1;

export const DEFAULT_PAGE_SIZE = 20;

export const MAX_AGE_DIFFERENCE = 200;

export const DEFAULT_QUERY_PARAMETERS: UsersQuery = {
  entries: [],
  limit: DEFAULT_PAGE_SIZE,
  offset: 0,
};
