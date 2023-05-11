import { Module } from '@nestjs/common';
import { HealthyController } from './healthy.controller';
import { HealthyService } from './healthy.service';

@Module({
  imports: [],
  controllers: [HealthyController],
  providers: [HealthyService],
})
export class HealthyModule {}
