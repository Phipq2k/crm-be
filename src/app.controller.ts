import { Controller, Get } from '@nestjs/common';
import { NotAuth } from '@utils/metadatas';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @NotAuth()
  getHello(): string {
    return this.appService.getHello();
  }
}
