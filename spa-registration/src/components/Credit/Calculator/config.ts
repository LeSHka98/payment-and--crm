export const serverData = [
  { amount: 100, term: 10 },
  { amount: 200, term: 20 },
  { amount: 300, term: 30 },
  { amount: 400, term: 40 },
  { amount: 500, term: 50 },
];

type CardFormData = {
  brand: string,
  exp_month: string,
  exp_year: string,
  lastSymbols: string,
  country: string,
  funding: string,
  paymentTime: string,
  email: string,
  name: string,
  phone: string,
  cardName: string,
};

export type CreditDetailsType = {
  id: number,
  amount: number;
  term: number;
  status?: 'Active' | 'Paid';
  cardFormData?: CardFormData
};
