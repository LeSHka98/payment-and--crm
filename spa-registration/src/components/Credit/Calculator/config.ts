export const serverData = [
  { amount: 100, term: 10 },
  { amount: 200, term: 20 },
  { amount: 300, term: 30 },
  { amount: 400, term: 40 },
  { amount: 500, term: 50 },
];

export type CreditDetailsType = {
  id: number,
  amount: number;
  term: number;
  status?: 'Active' | 'Paid';
};
