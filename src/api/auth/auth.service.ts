import 'dotenv/config';
import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './strategies/at.strategy';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(req: Request) {
    const { id, email } = req.user as User;
    console.log('user', id, email);
    const tokens = await this.signTokens(id, email);
    this.refreshToken(id, tokens.refreshToken);
    return tokens;
  }

  async signOut(req: Request, res: Response) {
    const { sub } = req.user as JwtPayload;
    const user = await this.usersService.findOne(sub);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (!user.refreshToken) {
      throw new UnauthorizedException('User not signed in');
    }
    await this.usersService.update(sub, { refreshToken: null });

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    return res.status(200).send({ message: 'Logged out' });
  }

  getCsrfToken(req: Request) {
    const csrfToken = req.csrfToken();
    console.log('csrfToken', csrfToken);
    return { csrfToken };
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
        expiresIn: +process.env.JWT_ACCESS_EXPIRES_IN,
        secret: process.env.JWT_ACCESS_SECRET,
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: +process.env.JWT_REFRESH_EXPIRES_IN,
        secret: process.env.JWT_REFRESH_SECRET,
      }),
    ]);
    return { accessToken, refreshToken };
  }

  async refreshToken(userId: string, refreshToken: string) {
    refreshToken = await bcrypt.hash(refreshToken, 8);
    await this.usersService.update(userId, { refreshToken });
  }

  async refresh(req: Request) {
    const { sub, email, refreshToken } = req.user as JwtPayload & User;

    const user = await this.usersService.findOne(sub);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (!user.refreshToken) {
      throw new UnauthorizedException('User not signed in');
    }

    const authorized = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!authorized) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokens = await this.signTokens(sub, email);
    await this.refreshToken(sub, tokens.refreshToken);
    return tokens;
  }
}
