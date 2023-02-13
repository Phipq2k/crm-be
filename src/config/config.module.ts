import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigOptionService } from './config.service';

@Global()
@Module({
  imports: [
    //Validation env
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        CONFIG_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        ACCESS_TOKEN_SECRET: Joi.string().required(),
        REFRESH_TOKEN_SECRET: Joi.string().required(),
        ACCESS_TOKEN_EXPIRESIN: Joi.string().required(),
        REFRESH_TOKEN_EXPIRESIN: Joi.string().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
      }),
    }),

    // Config Typorm for Database
    TypeOrmModule.forRootAsync({
      imports: [ConfigOptionModule],
      inject: [ConfigOptionService],
      useFactory: (configService: ConfigOptionService) =>
        configService.createTypeOrmOptions(),
    }),
  ],
  providers: [ConfigOptionService],
  exports: [ConfigOptionModule, ConfigOptionService],
})
export class ConfigOptionModule {}
