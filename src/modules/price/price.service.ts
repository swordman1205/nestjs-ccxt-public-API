import { Component, Inject } from '@nestjs/common';
import { Market } from '../market.entity';

@Component()
export class PriceService {
  constructor(
    @Inject('PriceRepository') private readonly priceRepository: typeof Market
  ) {}

  async getData(pair) {
    if (!pair) {
      return this.priceRepository.findAll<Market>();
    } else {
      return this.priceRepository.findAll<Market>({ where: { coin: pair }});
    }
  }
}
