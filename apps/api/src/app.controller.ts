import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtPayload } from '@repo/types';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CurrentUser } from './common/decorators/current-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(@CurrentUser() user: JwtPayload) {
    return {
      message: 'Protected route',
      user,
    };
  }
}
