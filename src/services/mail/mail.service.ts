import { UserEntity } from '../../models/user/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { BaseEmail } from './@types/base-email.type';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: UserEntity, email: BaseEmail) {
    return this.mailerService.sendMail({
      to: user.email,
      subject: email.subject,
      template: 'baseEmail.hbs',
      context: { ...email }
    });
  }

  async sendSuportMail(email: BaseEmail, from: string) {
    return this.mailerService.sendMail({
      from: from,
      to: 'sex.adapt.sac@gmail.com',
      subject: email.subject,
      template: 'baseEmail.hbs',
      context: { ...email }
    });
  }

  async mailRecoverToken(email: string, token: number) {
    return await this.mailerService.sendMail({
      to: email,
      subject: 'Recuperação de senha',
      template: 'baseEmail.hbs',
      context: {
        token
      }
    });
  }
}
