import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  // nest는 로깅을 할때 logger하는 클래스를 사용한다.
  // HTTP 프로토콜에 관한 로거를 사용할 수 있게 된다.

  use(req: Request, res: Response, next: NextFunction) {
    // app.use처럼 사용한다.
    // req, res, next 타이핑 해준다.
    res.on('finish', () => {
      // response가 끝났을때 콜백.
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });

    next();
  }
}
