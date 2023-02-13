import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor() {}

  private static handleResponse(
    response: Response,
    exception: HttpException | Error,
  ): void {
    let responseBody: any = { message: 'Internal server error' };
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      // console.log(exception);

      statusCode = exception.getStatus();

      responseBody = {
        status: exception.getResponse()['statusCode'],
        message: exception.getResponse()['message'],
        data: null,
      };
    } else if (exception instanceof Error) {
      // console.log(exception);

      responseBody = {
        status: statusCode,
        message: exception.stack,
        data: null,
      };
    }

    console.log(responseBody);

    response.status(statusCode).json(responseBody);
  }

  private hanldeMessage(exception: HttpException | Error): void {
    let message = 'Internal Server Error';
    if (exception instanceof HttpException)
      message = JSON.stringify(exception.getResponse());
    else if (exception instanceof Error)
      message = JSON.stringify(exception.stack.toString());
  }

  public catch(exception: any, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();

    //Handling error message and logging
    this.hanldeMessage(exception);

    //Response to client
    AllExceptionFilter.handleResponse(response, exception);
  }
}
