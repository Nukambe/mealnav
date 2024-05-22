import 'dotenv/config';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const response = httpContext.getResponse();

    const { access_token } = request.cookies;
    if (!access_token) throw new UnauthorizedException('Unauthorized');

    try {
      const { sub } = await this.jwtService.verifyAsync(access_token, {
        secret: process.env.JWT_SECRET,
      });
      request.userId = sub;
    } catch {
      response.clearCookie('access_token');
      throw new UnauthorizedException('Unauthorized');
    }

    return true;
  }
}
