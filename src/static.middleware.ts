import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
import { static as serveStatic } from 'express';

@Injectable()
export class StaticMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.path.startsWith('/api')) {
      serveStatic(join(__dirname, '..', 'public'))(req, res, next);
    } else {
      next();
    }
  }
}
