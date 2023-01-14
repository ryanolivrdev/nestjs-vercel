import { MailerConfigService } from '../../config/mail/mail.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useClass: MailerConfigService
    })
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
