import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
@Controller('register')
export class RegisterController {

  constructor(private registerService: RegisterService) {}

  @Post()
  async status(@Req() req, @Res() res): Promise<void> {
    this.registerService.run(req, res);
  }
}