import { Market } from '../market.entity';

export const ccxtUpdateProviders = [
  {
    provide: 'CCXTUpdateRepository',
    useValue: Market,
  },
];
