import { Controller, Get, Req, Res } from '@nestjs/common';
import { HealthyService } from './healthy.service';
@Controller('healthy')
export class HealthyController {

  constructor(private healthyService: HealthyService) {}

  @Get()
  async status(@Req() req, @Res() res): Promise<void> {
    this.healthyService.status(req, res);
  }
}