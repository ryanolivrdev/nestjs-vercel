import { MailModule } from './../../services/mail/mail.module';
import { SuportEntity } from '../../models/suport/entities/suport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SuportService } from './suport.service';
import { SuportController } from './suport.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SuportEntity]), MailModule],
  controllers: [SuportController],
  providers: [SuportService]
})
export class SuportModule {}
