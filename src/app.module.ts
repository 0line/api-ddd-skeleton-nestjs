import { Module } from '@nestjs/common';
import { HealtyModule } from './healthy/infraestructure/healthy.module';
import { RegisterModule } from './register/infraestructure/register.module';
@Module({
  imports: [HealtyModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
