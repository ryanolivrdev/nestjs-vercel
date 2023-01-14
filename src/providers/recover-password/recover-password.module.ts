import { MailModule } from './../../services/mail/mail.module';
import { UserService } from '../../models/user/user.service';
import { UserEntity } from '../../models/user/entities/user.entity';
import { UserModule } from '../../models/user/user.module';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoverPasswordService } from './recover-password.service';
import { AccessibilityEntity } from '../../models/accessibility/entities/accessibility.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RecoverPasswordEntity,
      UserEntity,
      AccessibilityEntity
    ]),
    UserModule,
    MailModule
  ],
  controllers: [],
  providers: [RecoverPasswordService, UserService],
  exports: [RecoverPasswordService]
})
export class RecoverPasswordModule {}
