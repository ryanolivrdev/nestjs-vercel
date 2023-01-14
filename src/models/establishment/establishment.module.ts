import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentEntity } from './entities/establishment.entity';
import { AccessibilityEntity } from '../accessibility/entities/accessibility.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EstablishmentEntity, AccessibilityEntity])
  ],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
  exports: [EstablishmentService]
})
export class EstablishmentModule {}
