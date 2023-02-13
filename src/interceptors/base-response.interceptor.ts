import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Response } from 'express';
import { Reflector } from '@nestjs/core';
import { ResponseMessageKey } from '@utils/metadatas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ResponseOption<T> {
  status: number;
  message: string;
  data: T | null;
}

@Injectable()
export class BaseResponseInterceptor<T>
  implements NestInterceptor<T, ResponseOption<T>>
{
  constructor(private readonly reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseOption<T>> {
    const responseMessage =
      this.reflector.get<string>(ResponseMessageKey, context.getHandler()) ??
      '';
    const ctx = context.switchToHttp().getResponse<Response>();
    return next
      .handle()
      .pipe(
        map((data) => ({
          status: ctx.statusCode || 200,
          data: data || null,
          message: responseMessage,
        })),
      );
  }
}
