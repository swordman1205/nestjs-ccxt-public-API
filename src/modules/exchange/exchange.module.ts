import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExchangeController } from './exchange.controller';
import { exchangeProviders } from './exchange.provider';
import { ExchangeService } from './exchange.service';

@Module({
  modules: [DatabaseModule],
  controllers: [ExchangeController],
  components: [ExchangeService, ...exchangeProviders]
})
export class ExchangeModule {}
