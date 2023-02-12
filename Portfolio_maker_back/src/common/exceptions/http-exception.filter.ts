import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    // 실행 컨텍스트
    const response = ctx.getResponse<Response>();
    // res 가져온다
    const request = ctx.getRequest<Request>();
    // req 가져온다.
    const status = exception.getStatus();
    // status 가져온다.
    const error = exception.getResponse() as  // 에러처리된 인자가 전달되어서 error 메시지로 찍힌다. // exception.getResponse() 해주면
      | string // error가 string일 경우
      | { error: string; statusCode: number; message: string | string[] };
    // error가 string이 아닐 경우

    if (typeof error === 'string') {
      // object인 경우 nest 자체에서 에러처리가 된 경우. (json 형식 exception)
      // string인 경우 커스텀 인자값으로 넘겨주는 경우.
      response.status(status).json({
        // req.status(400).send({ ~~ }) 형태임.
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    } else {
      // 네스트 자체에서 처리된 에러인 경우.
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}
