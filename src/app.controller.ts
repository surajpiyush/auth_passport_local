import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
@Controller('app')
export class AppController {
  constructor() {}
  
  @Get('/user')
  @UseGuards(AuthGuard('local'))
  getHello(): string {
    return 'this is private data'
  }
}
