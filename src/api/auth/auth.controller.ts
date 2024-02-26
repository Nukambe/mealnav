import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  Response,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signInDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Post()
  signIn(@Body() signInDto: SignInDto, @Request() req: any) {
    return this.authService.signIn(signInDto, req);
  }

  @Get()
  getCsrfToken(@Request() req) {
    return this.authService.getCsrfToken(req);
  }

  @Delete()
  signOut(@Response() res: any) {
    return this.authService.signOut(res);
  }
}
