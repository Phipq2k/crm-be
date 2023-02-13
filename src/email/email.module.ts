import { ConfigOptionService } from "@config/config.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { Global, Module } from "@nestjs/common";
import { EmailService } from "./email.service";

@Global()
@Module({
    imports: [
        MailerModule.forRoot(new ConfigOptionService().getConfigMailer())
    ],
    controllers: [],
    providers: [
        EmailService
    ],
    exports: [EmailService]
})
export class EmailModule{};