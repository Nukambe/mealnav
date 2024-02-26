import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { SignInDto } from './dto/signInDto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto, req: Request) {
    const user = req.user as User;
    const tokens = await this.signTokens(user.id, user.email);
    this.refreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  signOut(res: Response) {
    res.clearCookie('access_token');
    return { message: 'success' };
  }

  getCsrfToken(req: Request) {
    req.csrfToken();
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return null;
    }

    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      return null;
    }

    return this.usersService.safeUser(user);
  }

  async signTokens(userId: string, email: string) {
    const payload = { sub: userId, email };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        secret: process.env.JWT_ACCESS_SECRET,
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        secret: process.env.JWT_REFRESH_SECRET,
      }),
    ]);
    return { accessToken, refreshToken };
  }

  async refreshToken(userId: string, refreshToken: string) {
    refreshToken = await bcrypt.hash(refreshToken, 8);
    await this.usersService.update(userId, { refreshToken });
  }
}
