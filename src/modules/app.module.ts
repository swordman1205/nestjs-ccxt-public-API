import { Module } from '@nestjs/common';
import { PriceModule } from './price/price.module';
import { ExchangeModule } from './exchange/exchange.module';
import { CCXTUpdateModule } from './ccxt-update/ccxt-update.module';
import { AppController } from './app.controller';

@Module({
  modules: [PriceModule, ExchangeModule, CCXTUpdateModule],
  controllers: [AppController]
})
export class ApplicationModule {}
