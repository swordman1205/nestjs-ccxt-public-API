import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('coin-price')
export class CoinPriceController {

  constructor(private readonly priceService: PriceService) {}

  @Get()
  async findAll(@Query('pair') pair) {
    try {
      const info = await this.priceService.getData(pair);
      return {
        status: HttpStatus.OK,
        info
      };
    } catch (e) {
      throw new HttpException(e.message || 'Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
