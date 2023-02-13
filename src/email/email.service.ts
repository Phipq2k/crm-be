import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService{
    constructor(private readonly mailerService: MailerService) {}

    public async sendUserConfirmation(yanmail: string, contentHtml: string): Promise<boolean> {
        await this.mailerService.sendMail({
            to: yanmail,
            subject: 'Thay đổi mật khẩu',
            from: 'Phi Daddy<tranquocphipq@gmail.com>',
            html: contentHtml,
        });
        return true;
    }
}