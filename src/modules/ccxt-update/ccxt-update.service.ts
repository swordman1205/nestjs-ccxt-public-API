import { Component, Inject } from '@nestjs/common';
import { Market } from '../market.entity';
import * as schedule from 'node-schedule';
import * as ccxt from 'ccxt';

const config = require('../../config.json');

@Component()
export class CCXTUpdateService {
  constructor(
    @Inject('CCXTUpdateRepository') private readonly ccxtUpdateRepository: typeof Market) {}

  async updateData() {
    const bittrex = new ccxt.bittrex(), poloniex = new ccxt.poloniex();

    try {
      const res = await bittrex.fetchTickers();
      for (const symbol in res) {
        const market = new Market();
        market.exchange = 'bittrex';
        market.coin = symbol;
        market.value = res[symbol].baseVolume;
        market.updated = res[symbol].timestamp;

        await market.save();
      }
    } catch (e) {
      //@todo: add some logic here
    }

    try {
      const res = await poloniex.fetchTickers();
      for (const symbol in res) {
        const market = new Market();
        market.exchange = 'poloniex';
        market.coin = symbol;
        market.value = res[symbol].baseVolume;
        market.updated = res[symbol].timestamp;

        await market.save();
      }
    } catch (e) {
      //@todo: add some logic here
    }
  }

  async run() {
    await this.updateData();
    schedule.scheduleJob(`*/${config.duration} * * * *`, async () => await this.updateData());
  }
}
