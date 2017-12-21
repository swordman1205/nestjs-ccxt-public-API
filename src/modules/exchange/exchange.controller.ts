import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller('exchange-info')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get()
  async findAll(@Query('name') name) {
    try {
      const info = await this.exchangeService.getData(name);
      return {
        status: HttpStatus.OK,
        info
      };
    } catch (e) {
      throw new HttpException(e.message || 'Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
