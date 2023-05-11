
import { Injectable } from '@nestjs/common';
import { HttpStatus, Req, Res } from '@nestjs/common';

@Injectable()
export class HealthyService {

  status(@Req() req, @Res() res): void{
      res.status(HttpStatus.OK).send({
        success: true,
        message: 'Esta funcionando correctamente',
        code: HttpStatus.OK,
      });
  }

}