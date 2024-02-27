import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  Response,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Post()
  signIn(@Request() req: any) {
    return this.authService.signIn(req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  refresh(@Request() req: any) {
    return this.authService.refresh(req);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getCsrfToken(@Request() req) {
    return this.authService.getCsrfToken(req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'))
  @Delete()
  signOut(@Request() req: any, @Response() res: any) {
    return this.authService.signOut(req, res);
  }
}
