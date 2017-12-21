import { Market } from '../market.entity';

export const exchangeProviders = [
  {
    provide: 'ExchangeRepository',
    useValue: Market
  }
];
