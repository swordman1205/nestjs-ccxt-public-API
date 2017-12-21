import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const bootstrap = async () => {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3000, () => {
		console.log('API running on localhost:3000...');
	});
}
bootstrap();
