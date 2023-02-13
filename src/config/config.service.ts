import { MailerOptions } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class ConfigOptionService
  extends ConfigService
  implements TypeOrmOptionsFactory
{
  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.get('POSTGRES_HOST'),
      port: parseInt(this.get('POSTGRES_PORT')),
      username: this.get('POSTGRES_USER'),
      password: this.get('POSTGRES_PASSWORD'),
      database: this.get('POSTGRES_DB'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
      logNotifications: true
      
    };
  }

  public getConfigMailer(): MailerOptions{
    return {
        transport: {
            host: this.get<string>('MAIL_HOST'),
            secure: false,
            auth: {
                user: this.get<string>('MAIL_USER'),
                pass: this.get<string>('MAIL_PASSWORD')
            },
        },
        defaults: {
          from: 'sjdfhjskhfjkdsfh'
        }
    }
}
}
