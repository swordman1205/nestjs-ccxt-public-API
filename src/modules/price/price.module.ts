import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoinPriceController } from './price.controller';
import { PriceService } from './price.service';
import { priceProviders } from './price.provider';

@Module({
  modules: [DatabaseModule],
  controllers: [CoinPriceController],
  components: [PriceService, ...priceProviders]
})
export class PriceModule {}
