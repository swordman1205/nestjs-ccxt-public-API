import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'This is public API for bittrex and poloniex.';
  }
}
