import { Component, Inject } from '@nestjs/common';
import { Market } from '../market.entity';

@Component()
export class ExchangeService {
  constructor(
    @Inject('ExchangeRepository') private readonly exchangeRepository: typeof Market) {}

  async getData(name) {
    if (name) {
      return this.exchangeRepository.findAll<Market>({
        where: { exchange: name },
        attributes: ['id', 'coin', 'value']
      });
    } else {
      return this.exchangeRepository.findAll<Market>({
        attributes: ['id', 'coin', 'value']
      });
    }
  }
}
