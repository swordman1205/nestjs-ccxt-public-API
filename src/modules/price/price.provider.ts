import { Market } from '../market.entity';

export const priceProviders = [
  {
    provide: 'PriceRepository',
    useValue: Market,
  },
];
