export interface Passive {
  user: string,
  amount: number,
  currency: string,
  type: string,
  status: string,
  limit_date: string,
  created_at: string,
  updated_at: string
}

export enum Currency {
  usd= 'USD',
  cop= 'COP',
  eur= 'EUR',
}
