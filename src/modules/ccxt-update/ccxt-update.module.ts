import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ccxtUpdateProviders } from './ccxt-update.provider';
import { CCXTUpdateService } from './ccxt-update.service';

@Module({
  modules: [DatabaseModule],
  components: [CCXTUpdateService, ...ccxtUpdateProviders]
})
export class CCXTUpdateModule {
  constructor(private readonly ccxtUpdateService: CCXTUpdateService) {
    this.ccxtUpdateService.run();
  }
}
