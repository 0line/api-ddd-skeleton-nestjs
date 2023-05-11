
import { Injectable } from '@nestjs/common';
import { HttpStatus, Req, Res } from '@nestjs/common';

@Injectable()
export class RegisterService {

  run(@Req() req, @Res() res): void{
    res.status(HttpStatus.CREATED).send();
  }

}